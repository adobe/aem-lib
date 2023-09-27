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

/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import { expect } from '@esm-bundle/chai';
import { loadCSS } from '../../src/dom-utils.js';

describe('loadCSS', () => {
  it('loads CSS file', async () => {
    const load = await loadCSS('/test/fixtures/styles.css');
    expect(load).to.exist;
    const { head } = document;
    expect(head.querySelector('link[rel="stylesheet"]').href).to.include('/test/fixtures/styles.css');
    expect(getComputedStyle(document.body).color).to.equal('rgb(255, 99, 71)');
  });

  it('does not reload already loaded CSS files', async () => {
    const reload = await loadCSS('/test/fixtures/styles.css');
    expect(reload).to.not.exist;
    expect(document.head.querySelector('link[rel="stylesheet"]').href).to.include('/test/fixtures/styles.css');
    expect(getComputedStyle(document.body).color).to.equal('rgb(255, 99, 71)');
  });

  it('does not load invalid CSS files', async () => {
    try {
      const invalid = await loadCSS('/test/fixtures/foo.css');
      expect(invalid).to.exist;
    } catch (error) {
      expect(error).to.exist;
    }
  });
});
