<script>
  import Checkbox from "../components/Checkbox.svelte";
  import Checktool from "../components/Checktool.svelte";
  import Radios from "../components/Radios.svelte";
  import theme from "../stores/theme.js";

  import {
    THEME_LIST,
    OPTIONAL_PANELS,
    EXTENSION_PANELS,
    OPTIONAL_BUTTONS,
    GET_EXTENSIONS_HTML
  } from "../entries.js";

  function onThemeChange(event) {
    $theme = event.currentTarget.value;
  }
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
    <div class="settings-content__col">
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
    <div class="settings-content__col">
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
      {@html GET_EXTENSIONS_HTML}
    </p>
  </section>
</div>
