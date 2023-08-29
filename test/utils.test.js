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
import { expect } from '@esm-bundle/chai';
import { toClassName, toCamelCase } from '../src/utils.js';

describe('toClassName', () => {
  it('converts string to class name', () => {
    expect(toClassName('foo bar')).to.equal('foo-bar');
  });

  it('converts string to class name', () => {
    expect(toClassName('foo bar 123')).to.equal('foo-bar-123');
  });

  it('converts string to class name', () => {
    expect(toClassName('foo bar (baz, one, two three)')).to.equal('foo-bar-baz-one-two-three');
  });

  it('converts string to class name', () => {
    expect(toClassName('føo bår')).to.equal('f-o-b-r');
  });

  it('supports only strings', () => {
    expect(toClassName(1)).to.equal('');
    expect(toClassName({})).to.equal('');
  });
});

describe('toCamelCase', () => {
  it('converts string to camel-cased JS property name', () => {
    expect(toCamelCase('foo bar')).to.equal('fooBar');
  });

  it('converts string to camel-cased JS property name', () => {
    expect(toCamelCase('foo-bar')).to.equal('fooBar');
  });

  it('converts string to camel-cased JS property name', () => {
    expect(toCamelCase('FOO BAR')).to.equal('fooBar');
  });
});
