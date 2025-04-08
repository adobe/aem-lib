/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { getMetadata } from './dom-utils.js';

/**
 * Gets placeholders object.
 * @param {string} [prefix] Location of placeholders
 * @returns {object} Window placeholders object
 */
// eslint-disable-next-line import/prefer-default-export
export async function fetchPlaceholders(prefix = 'default') {
  const root = getMetadata('root')?.replace(/\/$/, '') || (prefix === 'default' ? '' : prefix);
  const [override, fallback] = getMetadata('placeholders')?.split('\n') || [];
  const url = override || `${root}/placeholders.json`;
  window.placeholders = window.placeholders || {};

  if (!window.placeholders[prefix]) {
    window.placeholders[prefix] = new Promise((resolve) => {
      // const url = fallback || `${prefix === 'default' ? '' : prefix}/placeholders.json`;
      Promise.all([fetch(url), fallback ? fetch(fallback) : Promise.resolve()])
        // get json from sources
        .then(async ([resp, oResp]) => {
          if (resp.ok) {
            if (oResp?.ok) {
              return Promise.all([resp.json(), await oResp.json()]);
            }
            return Promise.all([resp.json(), {}]);
          }
          return [{}];
        })
        // process json from sources
        .then(([json, oJson]) => {
          const placeholders = {};

          const allKeys = new Set([
            ...(json.data?.map(({ Key }) => Key) || []),
            ...(oJson?.data?.map(({ Key }) => Key) || []),
          ]);

          allKeys.forEach((Key) => {
            if (!Key) return;
            const keys = Key.split('.');
            const originalValue = json.data?.find((item) => item.Key === Key)?.Text;
            const overrideValue = oJson?.data?.find((item) => item.Key === Key)?.Text;
            const finalValue = overrideValue ?? originalValue;
            const lastKey = keys.pop();
            const target = keys.reduce((obj, key) => {
              obj[key] = obj[key] || {};
              return obj[key];
            }, placeholders);
            target[lastKey] = finalValue;
          });

          window.placeholders[prefix] = placeholders;
          resolve(placeholders);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('error loading placeholders', error);
          // error loading placeholders
          window.placeholders[prefix] = {};
          resolve(window.placeholders[prefix]);
        });
    });
  }
  return window.placeholders[`${prefix}`];
}
