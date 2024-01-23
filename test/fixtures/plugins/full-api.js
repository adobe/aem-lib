export default function init(_, options) {
  options.init = true;
}

export function loadEager(_, options) {
  options.eager = true;
}

export function loadLazy(_, options) {
  options.lazy = true;
}

export function loadDelayed(_, options) {
  options.delayed = true;
}
