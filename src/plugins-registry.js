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

import { loadModule } from './dom-utils.js';

export default class PluginsRegistry {
  #plugins;

  static parsePluginParams(id, config) {
    const pluginId = !config
      ? id.split('/').splice(id.endsWith('/') ? -2 : -1, 1)[0].replace(/\.js/, '')
      : id;
    const pluginConfig = {
      load: 'eager',
      ...(typeof config === 'string' || !config
        ? { url: (config || id).replace(/\/$/, '') }
        : config),
    };
    pluginConfig.options ||= {};
    return { id: pluginId, config: pluginConfig };
  }

  constructor() {
    this.#plugins = new Map();
  }

  // Register a new plugin
  add(id, config) {
    const { id: pluginId, config: pluginConfig } = PluginsRegistry.parsePluginParams(id, config);
    this.#plugins.set(pluginId, pluginConfig);
  }

  // Get the plugin
  get(id) { return this.#plugins.get(id); }

  // Check if the plugin exists
  includes(id) { return !!this.#plugins.has(id); }

  // Load all plugins that are referenced by URL, and updated their configuration with the
  // actual API they expose
  async load(phase, context) {
    [...this.#plugins.entries()]
      .filter(([, plugin]) => plugin.condition
      && !plugin.condition(document, plugin.options, context))
      .map(([id]) => this.#plugins.delete(id));
    return Promise.all([...this.#plugins.entries()]
      // Filter plugins that don't match the execution conditions
      .filter(([, plugin]) => (
        (!plugin.condition || plugin.condition(document, plugin.options, context))
        && phase === plugin.load && plugin.url
      ))
      .map(async ([key, plugin]) => {
        try {
          // If the plugin has a default export, it will be executed immediately
          const pluginApi = (await loadModule(
            key,
            !plugin.url.endsWith('.js') ? `${plugin.url}/${key}.js` : plugin.url,
            !plugin.url.endsWith('.js') ? `${plugin.url}/${key}.css` : null,
            document,
            plugin.options,
            context,
          )) || {};
          this.#plugins.set(key, { ...plugin, ...pluginApi });
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('Could not load specified plugin', key);
        }
      }));
  }

  // Run a specific phase in the plugin
  async run(phase, context) {
    return [...this.#plugins.values()]
      .reduce((promise, plugin) => ( // Using reduce to execute plugins sequencially
        plugin[phase] && (!plugin.condition
            || plugin.condition(document, plugin.options, context))
          ? promise.then(() => plugin[phase](document, plugin.options, context))
          : promise
      ), Promise.resolve());
  }
}
