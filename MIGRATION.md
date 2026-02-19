# Migration Guide

Migration instructions for breaking changes in `@adobe/aem-lib`.

**Note:** This guide is for projects that **manually update `aem.js`**.

---

## [3.0.0](https://github.com/adobe/aem-lib/compare/v2.10.6...v3.0.0) (19/02/2026)

### BREAKING CHANGE: Removed `decorateButtons` function

The `decorateButtons` function has been completely removed. ([view removal](https://github.com/adobe/aem-lib/commit/a691de7))

**Why:** Button decoration is presentation logic that belongs in customizable project code, not in a shared library.

**Related:** [adobe/aem-boilerplate#585](https://github.com/adobe/aem-boilerplate/pull/585)

---

#### What breaks

If you upgrade `aem.js` to v3.x:

- Imports of `decorateButtons` will fail
- Calls to `decorateButtons()` will fail
- Links will not get button CSS classes (`.button`, `.button-container`, `.primary`, `.secondary`)

If you're **not** manually upgrading `aem.js`, nothing breaks.

---

#### How to fix it

**Option 1: Use the new implementation** (Recommended)

New opt-in pattern where authors format links to indicate button intent.

1. Copy new `decorateButtons` to `scripts.js`: [View code](https://github.com/adobe/aem-boilerplate/pull/585/files)
2. Update imports to reference `scripts.js` instead of `aem.js`
3. **Optional:** Adopt new button styles: [View styles](https://github.com/adobe/aem-boilerplate/pull/585/files)
4. **Important:** Plain links will NOT auto-buttonize. If your content relies on auto-buttonization, you'll need to update your content. Authors must format links to create buttons:
   - **Bold** = Primary button
   - *Italic* = Secondary button
   - ***Bold + italic*** = Accent button
   - Plain link = Stays a link

---

**Option 2: Use the old implementation**

Keeps everything working exactly as before.

1. Copy old `decorateButtons` to `scripts.js`: [View code](https://github.com/adobe/aem-lib/blob/fddcc63e3ee5946525d2c02ff68fe34d9630a9c6/src/decorate.js#L16-L44)
2. Update imports to reference `scripts.js` instead of `aem.js`
3. No other changes needed (CSS and content stay the same)

---

**Option 3: Remove button decoration**

1. Remove all imports of `decorateButtons`
2. Remove all calls to `decorateButtons()`
3. No other changes needed (links stay as links, button CSS won't apply)

---

#### Need help?

- See [boilerplate PR #585](https://github.com/adobe/aem-boilerplate/pull/585) for implementation details
- [Open an issue](https://github.com/adobe/aem-lib/issues)
