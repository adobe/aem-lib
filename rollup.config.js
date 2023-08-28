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

import cleanup from 'rollup-plugin-cleanup';

const banner = `/*
 * Copyright ${new Date().getFullYear()} Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
`;

const bundles = [
  {
    source: 'src/lib-franklin.js',
    outputFile: 'dist/aem-lib',
  },
];

export default [...bundles.map(({ outputFile, source }) => ({
  input: source,
  inlineDynamicImports: true,
  output: [
    {
      file: `${outputFile}.js`,
      format: 'es',
      sourcemap: false,
      exports: 'auto',
      banner,
    },
  ].filter((m) => m),
  plugins: [
    cleanup({
      comments: ['eslint', 'jsdoc', /^\//],
      maxEmptyLines: -1,
    }),
  ],
}))];
