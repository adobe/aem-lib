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
import { buildBlock } from '../../src/block-loader.js';

describe('buildBlock', () => {
  it('buildBlock - block from a string', async () => {
    const block = await buildBlock('someblock', '<p>This is my block.</p>');

    expect(block).to.be.instanceOf(HTMLElement);
    expect(block.classList.contains('someblock')).to.be.true;
    expect(block.innerHTML).to.equal('<div><div><p>This is my block.</p></div></div>');
  });

  it('buildBlock - block from array', async () => {
    const block = await buildBlock('someblock', [['Col11', 'Col12'], ['<p>Col21</p>', '<p>Col22</p>']]);

    expect(block).to.be.instanceOf(HTMLElement);
    expect(block.classList.contains('someblock')).to.be.true;
    expect(block.innerHTML).to.equal('<div><div>Col11</div><div>Col12</div></div><div><div><p>Col21</p></div><div><p>Col22</p></div></div>');
  });

  it('buildBlock - block from object', async () => {
    const div = document.createElement('div');
    div.innerHTML = '<p>This is my block.</p>';
    const block = await buildBlock('someblock', div);

    expect(block).to.be.instanceOf(HTMLElement);
    expect(block.classList.contains('someblock')).to.be.true;
    expect(block.innerHTML).to.equal('<div><div><div><p>This is my block.</p></div></div></div>');
  });
});
