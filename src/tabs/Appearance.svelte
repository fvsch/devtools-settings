<script>
  import Checkbox from "../components/Checkbox.svelte";
  import Radios from "../components/Radios.svelte";
  import theme from "../stores/theme.js";

  import {
    THEME_LIST,
    TOOLBAR_PANELS,
    TOOLBAR_BUTTONS,
    GET_EXTENSIONS_HTML,
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
      on:change={onThemeChange}
    />
  </section>
  <div class="settings-content__columns">
    <div class="settings-content__col">
      <section class="settings-content__section">
        <h2>Available tools</h2>
        <ul class="settings-content__panel-list">
          {#each TOOLBAR_PANELS as item (item.name)}
            <li>
              <Checkbox {...item} />
            </li>
          {/each}
        </ul>
      </section>
    </div>
    <div class="settings-content__col">
      <section class="settings-content__section">
        <h2>Toolbar buttons</h2>
        {#each TOOLBAR_BUTTONS as item (item.name)}
          <Checkbox {...item} />
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
