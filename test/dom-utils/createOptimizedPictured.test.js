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
import { createOptimizedPicture } from '../../src/dom-utils.js';

describe('createOptimizedPictured', () => {
  it('creates optimized picture', () => {
    const picture = createOptimizedPicture('/test/fixtures/logo.png');
    // webp
    expect(picture.querySelector(':scope source[type="image/webp"]')).to.exist;
    // fallback
    expect(picture.querySelector(':scope source:not([type="image/webp"])')).to.exist;
    // default
    expect(picture.querySelector(':scope img').src).to.include('format=png&optimize=medium');
  });
});
