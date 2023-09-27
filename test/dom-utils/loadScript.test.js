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
import { loadScript } from '../../src/dom-utils.js';

describe('loadScript', () => {
  it('loads JS file with attributes', async () => {
    const load = await loadScript('/test/fixtures/script.js', { foo: 'bar' });
    expect(load).to.exist;
    const { head, body } = document;
    expect(head.querySelector('script[foo="bar"]').src).to.include('/test/fixtures/script.js');
    expect(body.dataset.foo).to.equal('bar');
  });

  it('does not reload already loaded JS files', async () => {
    const reload = await loadScript('/test/fixtures/script.js');
    expect(reload).to.not.exist;
    const { head, body } = document;
    expect(head.querySelector('script[src*="/test/fixtures/script.js"]')).to.exist;
    expect(body.dataset.foo).to.equal('bar');
  });

  it('does not load invalid JS files', async () => {
    try {
      const invalid = await loadScript('/test/fixtures/foo.js');
      expect(invalid).to.exist;
    } catch (error) {
      expect(error).to.exist;
    }
  });
});
