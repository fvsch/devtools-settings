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

export const TOOLBAR_PANELS = [
  {
    name: "netmonitor",
    icon: "tool-network",
    label: "Network",
    checked: true
  },
  {
    name: "styleeditor",
    icon: "tool-styleeditor",
    label: "Style Editor",
    checked: true
  },
  {
    name: "performance",
    icon: "tool-profiler",
    label: "Performance",
    checked: true
  },
  {
    name: "memory",
    icon: "tool-memory",
    label: "Memory",
    checked: true
  },
  {
    name: "storage",
    icon: "tool-storage",
    label: "Storage",
    checked: true
  },
  {
    name: "accessibility",
    icon: "tool-accessibility",
    label: "Accessibility",
    checked: true
  },
  {
    name: "application",
    icon: "tool-application",
    label: "Application",
    checked: true
  },
  {
    name: "dom",
    icon: "tool-dom",
    label: "DOM",
    checked: false
  },
  {
    name: "vuedevtools",
    icon: "extension-vue",
    label: "Vue.js devtools",
    badge: "Extension",
    checked: true
  },
  {
    name: "webhint",
    icon: "extension-webhint",
    label: "Hints",
    badge: "Extension",
    checked: false
  }
];

export const TOOLBAR_BUTTONS = [
  {
    name: "pickelement",
    icon: "command-pick",
    label: "Pick an element from the page",
    badge: "⇧⌘C",
    checked: true
  },
  {
    name: "rdm",
    icon: "command-responsivemode",
    label: "Responsive Design Mode",
    badge: "⌥⌘M",
    checked: true
  },
  {
    name: "pickiframe",
    icon: "command-frames",
    label: "Select an iframe as the currently targeted document",
    checked: true
  },
  {
    name: "screenshot",
    icon: "command-screenshot",
    label: "Take a screenshot of the entire page",
    checked: false
  },
  {
    name: "paintflashing",
    icon: "command-paintflashing",
    label: "Toggle paint flashing",
    checked: false
  },
  {
    name: "rulers",
    icon: "command-rulers",
    label: "Toggle rulers for the page",
    checked: false
  },
  {
    name: "measure",
    icon: "command-measure",
    label: "Measure a portion of the page",
    checked: false
  }
];

export const COLOR_UNITS = [
  { name: "color-unit", value: "authored", label: "As Authored" },
  { name: "color-unit", value: "hex", label: "Hexadecimal" },
  { name: "color-unit", value: "hsl", label: "HSL(A)" },
  { name: "color-unit", value: "rgb", label: "RGB(A)" },
  { name: "color-unit", value: "named", label: "Color Names" }
];

export const EDITOR_TAB_SIZES = [
  { name: "editor-tab-size", value: 2, label: "2" },
  { name: "editor-tab-size", value: 4, label: "4" },
  { name: "editor-tab-size", value: 8, label: "8" }
];

export const EDITOR_KEY_MAPS = [
  { name: "editor-key-map", value: "default", label: "Default" },
  { name: "editor-key-map", value: "vim", label: "Vim" },
  { name: "editor-key-map", value: "emacs", label: "Emacs" },
  { name: "editor-key-map", value: "sublime", label: "Sublime Text" }
];

export const ADVANCED_DEBUGGING = {
  title: "Debugging",
  path: "advanced/debugging",
  options: [
    {
      type: "checkbox",
      name: "devtools.source-map.client-service.enabled",
      label: "Enable Source Maps",
      description: "Show original source code, when available.",
      checked: true
    },
    {
      type: "checkbox",
      name: "devtools.debugger.remote-enabled",
      label: "Enable remote debugging",
      description:
        "Allow this Firefox instance to be targeted for remote debugging."
    },
    {
      type: "checkbox",
      name: "devtools.chrome.enabled",
      label: "Enable the Browser Toolbox",
      description:
        "The Browser Toolbox can be used to inspect and debug Firefox’s user interface. <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox'>Learn More</a>."
    }
  ]
};

export const ADVANCED_EXPERIMENTAL = {
  title: "Experimental",
  path: "advanced/experimental",
  options: [
    {
      type: "checkbox",
      name: "devtools.performance.new-panel-enabled",
      label: "Enable the new performance recorder",
      description: "Re-open developer tools to apply."
    }
  ]
};

export const ADVANCED_WEBPLATFORM = {
  title: "Web Platform features",
  path: "advanced/webplatform",
  options: [
    {
      type: "checkbox",
      name: "devtools.cache.disabled",
      label: "Disable HTTP cache",
      description:
        "Applies to all tabs where developer tools are open. Does not affect Service Workers.",
      checked: false
    },
    {
      type: "checkbox",
      name: "devtools.serviceWorkers.testing.enabled",
      label: "Enable Service Workers over HTTP",
      description: "Applies to all tabs where developer tools are open.",
      checked: false
    },
    {
      type: "checkbox",
      name: "disable-js",
      label: "Disable JavaScript for the current tab",
      description:
        "Reloads the page. If the tab or developer tools are closed, this setting will be forgotten.",
      checked: false
    }
  ]
};

export const ADVANCED_RESET = {
  title: "Reset DevTools settings",
  path: "advanced/reset",
  html: `
  <p class="settings-content__text">
    Restore initial settings for every tool, including hidden preferences
    set in
    <code>about:config</code>
  </p>
  <p>
    <button class="settings-content__danger-button">Reset Settings</button>
  </p>
  `
};

export const GET_EXTENSIONS_HTML = `
  Find DevTools extensions for
  <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=angular">Angular</a>,
  <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=react">React</a>,
  <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=redux">Redux</a>,
  <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=vue">Vue.js</a>,
  <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=developer">and more…</a>
`;
