<script>
  import { getTheme, setTheme } from "../themeHelper";
  let theme = getTheme();
  $: setTheme(theme);
</script>

<p class="settings-radios">
  <label
    class="settings-radios__item {theme === 'light' ? 'settings-radios__item--checked' : ''}">
    <input
      type="radio"
      name="devtools.theme"
      value="light"
      bind:group={theme} />
    <span>Light</span>
  </label>
  <label
    class="settings-radios__item {theme === 'dark' ? 'settings-radios__item--checked' : ''}">
    <input type="radio" name="devtools.theme" value="dark" bind:group={theme} />
    <span>Dark</span>
  </label>
</p>
