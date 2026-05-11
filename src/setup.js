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

import { sampleRUM } from '@adobe/helix-rum-js';

/**
 * Setup block utils.
 */
export function setup() {
  window.hlx = window.hlx || {};
  window.hlx.RUM_MASK_URL = 'full';
  window.hlx.RUM_MANUAL_ENHANCE = true;
  window.hlx.lighthouse = new URLSearchParams(window.location.search).get('lighthouse') === 'on';

  [window.hlx.codeBasePath] = new URL(import.meta.url).pathname.split('/scripts/');
}

/**
 * Auto initialization.
 */
/* c8 ignore next 18 */
export function init() {
  setup();
  sampleRUM.collectBaseURL = window.origin;
  sampleRUM();
}
