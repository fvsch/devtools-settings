<script>
  import Checkbox from "../components/Checkbox.svelte";
  import Radios from "../components/Radios.svelte";
  import theme from "../stores/theme.js";

  const THEME_LIST = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "highcontrast", label: "High Contrast" }
  ];

  const OPTIONAL_PANELS = [
    { name: "netmonitor", label: "Network", initial: true },
    { name: "styleeditor", label: "Style Editor", initial: true },
    { name: "performance", label: "Performance", initial: true },
    { name: "memory", label: "Memory", initial: true },
    { name: "storage", label: "Storage", initial: true },
    { name: "accessibility", label: "Accessibility", initial: true },
    //{ name: "application", label: "Application", initial: true },
    { name: "dom", label: "DOM", initial: false },
    { name: "scratchpad", label: "Scratchpad", initial: false }
  ];

  const EXTENSION_PANELS = [
    { name: "vuedevtools", label: "Vue.js devtools", initial: true },
    { name: "webhint", label: "Hints", initial: true }
  ];

  const OPTIONAL_BUTTONS = [
    {
      name: "pickelement",
      label: "Pick an element from the page",
      shortcut: "Cmd+Shift+C",
      initial: true
    },
    {
      name: "rdm",
      label: "Responsive Design Mode",
      shortcut: "Cmd+Opt+M",
      initial: true
    },
    {
      name: "pickiframe",
      label: "Select an iframe as the currently targeted document",
      initial: true
    },
    {
      name: "screenshot",
      label: "Take a screenshot of the entire page",
      initial: false
    },
    {
      name: "paintflashing",
      label: "Toggle paint flashing",
      initial: false
    },
    {
      name: "rulers",
      label: "Toggle rulers for the page",
      initial: false
    },
    {
      name: "measure",
      label: "Measure a portion of the page",
      initial: false
    }
  ];

  function onThemeChange(event) {
    $theme = event.currentTarget.value;
  }

  const mdnExtensions = `
    Find more tools for
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
    <section class="settings-content__col settings-content__section">
      <h2>Visible tabs</h2>
      {#each OPTIONAL_PANELS as panel (panel.name)}
        <Checkbox {...panel} checked={panel.initial} />
      {/each}
    </section>
    <section class="settings-content__col settings-content__section">
      <h2>Toolbar buttons</h2>
      {#each OPTIONAL_BUTTONS as button (button.name)}
        <Checkbox {...button} checked={button.initial} />
      {/each}
    </section>
    <section class="settings-content__col settings-content__section">
      <h2>Extensions</h2>
      {#each EXTENSION_PANELS as extension (extension.name)}
        <Checkbox {...extension} checked={extension.initial} />
      {/each}
      <p class="settings-content__text">
        {@html mdnExtensions}
      </p>
    </section>
  </div>
</div>
