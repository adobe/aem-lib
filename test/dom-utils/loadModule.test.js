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
import { loadModule } from '../../src/dom-utils.js';

describe('loadModule', () => {
  it('loads the JS, returns the api and executes the default export', async () => {
    const options = {};
    const api = await loadModule('/test/fixtures/plugins/full-api.js', null, document, options);
    expect(options.init).to.be.true;
    expect(api.loadEager).to.exist;
    expect(api.loadLazy).to.exist;
    expect(api.loadDelayed).to.exist;
  });

  it('loads and applies the CSS file', async () => {
    await loadModule('/test/fixtures/plugins/complex/complex.js', '/test/fixtures/plugins/complex/complex.css', document, {});
    expect(getComputedStyle(document.body).fontFamily).to.equal('system-ui');
  });

  it('throws if the file cannot be loaded', async () => {
    expect(async () => { await loadModule('/invalid.js'); }).to.throw;
  });
});
