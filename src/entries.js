export const THEME_LIST = [
  {
    value: "light",
    label: "Light",
    icon: "theme-light"
  },
  {
    value: "dark",
    label: "Dark",
    icon: "theme-dark"
  },
  {
    value: "highcontrast",
    label: "High Contrast",
    icon: "theme-highcontrast"
  }
];

export const OPTIONAL_PANELS = [
  {
    name: "netmonitor",
    icon: "tool-network",
    label: "Network",
    initial: true
  },
  {
    name: "styleeditor",
    icon: "tool-styleeditor",
    label: "Style Editor",
    initial: true
  },
  {
    name: "performance",
    icon: "tool-profiler",
    label: "Performance",
    initial: true
  },
  {
    name: "memory",
    icon: "tool-memory",
    label: "Memory",
    initial: true
  },
  {
    name: "storage",
    icon: "tool-storage",
    label: "Storage",
    initial: true
  },
  {
    name: "accessibility",
    icon: "tool-accessibility",
    label: "Accessibility",
    initial: true
  },
  {
    name: "application",
    icon: "tool-application",
    label: "Application",
    initial: true
  },
  {
    name: "dom",
    icon: "tool-dom",
    label: "DOM",
    initial: false
  }
];

export const EXTENSION_PANELS = [
  {
    name: "vuedevtools",
    icon: "extension-vue",
    label: "Vue.js devtools",
    initial: true
  },
  {
    name: "webhint",
    icon: "extension-webhint",
    label: "Hints",
    initial: false
  }
];

export const OPTIONAL_BUTTONS = [
  {
    name: "pickelement",
    icon: "command-pick",
    label: "Pick an element from the page",
    shortcut: "Cmd+Shift+C",
    initial: true
  },
  {
    name: "rdm",
    icon: "command-responsivemode",
    label: "Responsive Design Mode",
    shortcut: "Cmd+Opt+M",
    initial: true
  },
  {
    name: "pickiframe",
    icon: "command-frames",
    label: "Select an iframe as the currently targeted document",
    initial: true
  },
  {
    name: "screenshot",
    icon: "command-screenshot",
    label: "Take a screenshot of the entire page",
    initial: false
  },
  {
    name: "paintflashing",
    icon: "command-paintflashing",
    label: "Toggle paint flashing",
    initial: false
  },
  {
    name: "rulers",
    icon: "command-rulers",
    label: "Toggle rulers for the page",
    initial: false
  },
  {
    name: "measure",
    icon: "command-measure",
    label: "Measure a portion of the page",
    initial: false
  }
];

export const GET_EXTENSIONS_HTML = `
  Find DevTools extensions for
  <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=angular">Angular</a>,
  <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=react">React</a>,
  <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=redux">Redux</a>,
  <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=vue">Vue.js</a>,
  <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=developer">and more…</a>
`;

export const COLOR_UNITS = [
  { value: "authored", label: "As Authored" },
  { value: "hex", label: "Hexadecimal" },
  { value: "hsl", label: "HSL(A)" },
  { value: "rgb", label: "RGB(A)" },
  { value: "named", label: "Color Names" }
];

export const TAB_SIZES = [
  { value: 2, label: "2" },
  { value: 4, label: "4" },
  { value: 8, label: "8" }
];

export const KEY_MAPS = [
  { value: "default", label: "Default" },
  { value: "vim", label: "Vim" },
  { value: "emacs", label: "Emacs" },
  { value: "sublime", label: "Sublime Text" }
];
