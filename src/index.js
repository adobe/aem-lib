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

import { init } from './setup.js';

export { toCamelCase, toClassName } from './utils.js';
export { readBlockConfig } from './block-utils.js';
export {
  loadCSS,
  loadScript,
  getMetadata,
  createOptimizedPicture,
  decorateTemplateAndTheme,
} from './dom-utils.js';
export { decorateButtons, decorateIcons, decorateSections } from './decorate.js';
export { sampleRUM } from '@adobe/helix-rum-js';
export { fetchPlaceholders } from './placeholders.js';
export {
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

export { setup } from './setup.js';

init();
