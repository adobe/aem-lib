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

import { toCamelCase } from './utils.js';

/**
 * Gets placeholders object.
 * @param {string} [prefix] Location of placeholders
 * @returns {Promise<Record<string, string>>} Window placeholders object
 */
// eslint-disable-next-line import/prefer-default-export
export async function fetchPlaceholders(prefix = 'default') {
  window.placeholders = window.placeholders || {};
  if (!window.placeholders[prefix]) {
    window.placeholders[prefix] = new Promise((resolve) => {
      fetch(`${prefix === 'default' ? '' : prefix}/placeholders.json`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          return { data: [] };
        }).then((/** @type {{ data: Array<{ Key: string, Text: string }> }} */ { data }) => {
          const placeholders = {};
          data
            .filter((placeholder) => placeholder.Key)
            .forEach((placeholder) => {
              placeholders[toCamelCase(placeholder.Key)] = placeholder.Text;
            });
          window.placeholders[prefix] = placeholders;
          resolve(window.placeholders[prefix]);
        }).catch(() => {
          // error loading placeholders
          const emptyPlaceholders = /** @type {Record<string, string>} */ ({});
          window.placeholders[prefix] = emptyPlaceholders;
          resolve(emptyPlaceholders);
        });
    });
  }
  return window.placeholders[`${prefix}`];
}
