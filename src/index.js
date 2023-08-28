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

import { toCamelCase, toClassName } from './utils.js';
import { readBlockConfig } from './block-utils.js';
import {
  loadCSS,
  loadScript,
  getMetadata,
  createOptimizedPicture,
  normalizeHeadings,
  decorateTemplateAndTheme,
} from './dom-utils.js';
import { decorateButtons, decorateIcons, decorateSections } from './decorate.js';
import { sampleRUM } from './rum.js';
import { fetchPlaceholders } from './placeholders.js';
import {
  updateSectionsStatus,
  buildBlock,
  loadBlock,
  loadBlocks,
  decorateBlock,
  decorateBlocks,
  loadHeader,
  loadFooter,
  waitForLCP,
} from './block-loader.js';
import { init, setup } from './setup.js';

init();

// eslint-disable-next-line max-len
export {
  toCamelCase,
  toClassName,
  readBlockConfig,
  loadCSS,
  loadScript,
  getMetadata,
  createOptimizedPicture,
  normalizeHeadings,
  decorateTemplateAndTheme,
  decorateButtons,
  decorateIcons,
  decorateSections,
  sampleRUM,
  fetchPlaceholders,
  updateSectionsStatus,
  buildBlock,
  loadBlock,
  loadBlocks,
  decorateBlock,
  decorateBlocks,
  loadHeader,
  loadFooter,
  waitForLCP,
  setup,
};
