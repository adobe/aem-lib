/**
 * Builds a block DOM Element from a two dimensional array, string, or object
 * @param {string} blockName name of the block
 * @param {*} content two dimensional array or string or object of content
 */
export function buildBlock(blockName: string, content: any): HTMLDivElement;
/**
 * Returns a picture element with webp and fallbacks
 * @param {string} src The image URL
 * @param {string} [alt] The image alternative text
 * @param {boolean} [eager] Set loading attribute to eager
 * @param {Array} [breakpoints] Breakpoints and corresponding params (eg. width)
 * @returns {Element} The picture element
 */
export function createOptimizedPicture(src: string, alt?: string, eager?: boolean, breakpoints?: any[]): Element;
/**
 * Decorates a block.
 * @param {HTMLElement} block The block element
 */
export function decorateBlock(block: HTMLElement): void;
/**
 * Decorates all blocks in a container element.
 * @param {Element} main The container element
 */
export function decorateBlocks(main: Element): void;
/**
 * Decorates paragraphs containing a single link as buttons.
 * @param {Element} element container element
 */
export function decorateButtons(element: Element): void;
/**
 * Add <img> for icons, prefixed with codeBasePath and optional prefix.
 * @param {Element} [element] Element containing icons
 * @param {string} [prefix] prefix to be added to icon the src
 */
export function decorateIcons(element?: Element, prefix?: string): void;
/**
 * Decorates all sections in a container element.
 * @param {Element} main The container element
 */
export function decorateSections(main: Element): void;
/**
 * Set template (page structure) and theme (page styles).
 */
export function decorateTemplateAndTheme(): void;
/**
 * Gets placeholders object.
 * @param {string} [prefix] Location of placeholders
 * @returns {Promise<Record<string, string>>} Window placeholders object
 */
export function fetchPlaceholders(prefix?: string): Promise<Record<string, string>>;
/**
 * Retrieves the content of metadata tags.
 * @param {string} name The metadata name (or property)
 * @param {Document} doc Document object to query for metadata. Defaults to the window's document
 * @returns {string} The metadata value(s)
 */
export function getMetadata(name: string, doc?: Document): string;
/**
 * Loads JS and CSS for a block.
 * @param {HTMLElement} block The block element
 */
export function loadBlock(block: HTMLElement): Promise<HTMLElement>;
/**
 * Loads a CSS file.
 * @param {string} href URL to the CSS file
 */
export function loadCSS(href: string): Promise<any>;
/**
 * Loads a block named 'footer' into footer
 * @param footer footer element
 * @returns {Promise}
 */
export function loadFooter(footer: any): Promise<any>;
/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 * @returns {Promise}
 */
export function loadHeader(header: Element): Promise<any>;
/**
 * Loads a non module JS file.
 * @param {string} src URL to the JS file
 * @param {Object} attrs additional optional attributes
 */
export function loadScript(src: string, attrs: any): Promise<any>;
/**
 * Loads all blocks in a section.
 * @param {HTMLElement} section The section element
 * @param {Function} [loadCallback] Callback function to be called after blocks are loadeds
 */
export function loadSection(section: HTMLElement, loadCallback?: Function): Promise<void>;
/**
 * Loads all sections.
 * @param {Element} element The parent element of sections to load
 */
export function loadSections(element: Element): Promise<void>;
/**
 * Extracts the config from a block.
 * @param {Element} block The block element
 * @returns {object} The block config
 */
export function readBlockConfig(block: Element): object;
export function sampleRUM(checkpoint: any, data: any): void;
/**
 * Setup block utils.
 */
export function setup(): void;
/**
 * Sanitizes a string for use as a js property name.
 * @param {string} name The unsanitized string
 * @returns {string} The camelCased name
 */
export function toCamelCase(name: string): string;
/**
 * Sanitizes a string for use as class name.
 * @param {string} name The unsanitized string
 * @returns {string} The class name
 */
export function toClassName(name: string): string;
/**
 * Wait for Image.
 * @param {Element} section section element
 */
export function waitForFirstImage(section: Element): Promise<void>;
/**
 * Wrap inline text content of block cells within a <p> tag.
 * @param {Element} block the block element
 */
export function wrapTextNodes(block: Element): void;
