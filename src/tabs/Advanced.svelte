<script>
  import Checkbox from "../components/Checkbox.svelte";
</script>

<div class="settings-content">
  <div class="settings-content__columns">
    <section class="settings-content__col settings-content__section">
      <h2>Browser tabs</h2>
      <Checkbox
        name="devtools.cache.disabled"
        label="Disable HTTP cache"
        description="Applies to all tabs where developer tools are open. Does
        not affect Service Workers." />
      <Checkbox
        name="disable-js"
        label="Disable JavaScript for the current tab"
        description="Reloads the page. If the tab or developer tools are closed,
        this setting will be forgotten." />
      <Checkbox
        name="devtools.serviceWorkers.testing.enabled"
        label="Enable Service Workers over HTTP"
        description="Applies to all tabs where developer tools are open." />
    </section>
    <section class="settings-content__col settings-content__section">
      <h2>Debugging</h2>
      <Checkbox
        checked
        name="devtools.source-map.client-service.enabled"
        label="Enable Source Maps"
        description="Show original source code, when available." />
      <Checkbox
        name="devtools.debugger.remote-enabled"
        label="Enable remote debugging"
        description="Allows developer tools to debug a remote instance like
        Firefox for Android." />
      <Checkbox
        name="devtools.chrome.enabled"
        label="Enable the Browser Toolbox"
        description="Use Tools > Web Developer > Browser Toolbox to debug
        Firefox and Firefox add-ons." />
    </section>
    <section class="settings-content__col settings-content__section">
      <h2>Experimental</h2>
      <Checkbox
        name="devtools.performance.new-panel-enabled"
        label="Enable the new performance recorder"
        description="Re-open developer tools to apply." />
    </section>
    <section class="settings-content__col settings-content__section">
      <h2>Reset DevTools settings</h2>
      <p class="settings-content__text">
        Restore initial settings for every tool, including hidden preferences
        set in
        <code>about:config</code>
      </p>
      <p>
        <button class="settings-content__danger-button">Reset Settings</button>
      </p>
    </section>
  </div>
</div>
