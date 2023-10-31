export default (_, options) => {
  options.init = true;
};

export const loadEager = (_, options) => {
  options.eager = true;
};

export const loadLazy = (_, options) => {
  options.lazy = true;
};

export const loadDelayed = (_, options) => {
  options.delayed = true;
};
