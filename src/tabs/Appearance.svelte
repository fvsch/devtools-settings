<script>
  import Checkbox from "../components/Checkbox.svelte";
  import Radios from "../components/Radios.svelte";

  import { getTheme, setTheme } from "../themeHelper";
  let theme = getTheme();
  setTheme(theme);

  const THEMES = [
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
    theme = event.currentTarget.value;
    setTheme(theme);
  }
</script>

<div class="settings-tab">
  <section>
    <h2>Color theme</h2>
    <Radios
      name="devtools.theme"
      options={THEMES}
      selected={theme}
      on:change={onThemeChange} />
  </section>
</div>
<div class="settings-tab settings-tab--columns">
  <section>
    <h2>Visible tabs</h2>
    {#each OPTIONAL_PANELS as panel (panel.name)}
      <Checkbox {...panel} checked={panel.initial} />
    {/each}
  </section>
  <section>
    <h2>Toolbar buttons</h2>
    {#each OPTIONAL_BUTTONS as button (button.name)}
      <Checkbox {...button} checked={button.initial} />
    {/each}
  </section>
</div>
