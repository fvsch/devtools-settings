<script>
  import Checkbox from "../components/Checkbox.svelte";
  import Checktool from "../components/Checktool.svelte";
  import Radios from "../components/Radios.svelte";
  import theme from "../stores/theme.js";

  const THEME_LIST = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "highcontrast", label: "High Contrast" }
  ];

  const OPTIONAL_PANELS = [
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
    //{ name: "application", label: "Application", initial: true },
    {
      name: "dom",
      icon: "tool-dom",
      label: "DOM",
      initial: false
    },
    {
      name: "scratchpad",
      icon: "tool-scratchpad",
      label: "Scratchpad",
      initial: false
    }
  ];

  const EXTENSION_PANELS = [
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

  const OPTIONAL_BUTTONS = [
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

  function onThemeChange(event) {
    $theme = event.currentTarget.value;
  }

  const mdnExtensions = `
    Find DevTools extensions for
    <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=angular">Angular</a>,
    <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=react">React</a>,
    <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=redux">Redux</a>,
    <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=vue">Vue.js</a>,
    <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/search/?type=extension&amp;q=developer">and more…</a>
  `;
</script>

<div class="settings-content">
  <section class="settings-content__section">
    <h2>Color theme</h2>
    <Radios
      name="devtools.theme"
      options={THEME_LIST}
      selected={$theme}
      on:change={onThemeChange} />
  </section>
  <div class="settings-content__columns">
    <div class="settings-content__col settings-content__col--large">
      <section class="settings-content__section">
        <h2>Available tools</h2>
        <ul class="settings-content__panel-list">
          {#each OPTIONAL_PANELS as panel (panel.name)}
            <li>
              <Checktool {...panel} checked={panel.initial} />
            </li>
          {/each}
          {#each EXTENSION_PANELS as extension (extension.name)}
            <li class="extension">
              <Checktool {...extension} checked={extension.initial} isAddon />
            </li>
          {/each}
        </ul>
      </section>
    </div>
    <div class="settings-content__col settings-content__col--large">
      <section class="settings-content__section">
        <h2>Toolbar buttons</h2>
        {#each OPTIONAL_BUTTONS as button (button.name)}
          <Checktool {...button} checked={button.initial} />
        {/each}
      </section>
    </div>
  </div>
  <section class="settings-content__section">
    <h2>Get more tools</h2>
    <p class="settings-content__text">
      {@html mdnExtensions}
    </p>
  </section>
</div>
