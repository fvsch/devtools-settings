<script>
  import Checkbox from "../components/Checkbox.svelte";
  import Radios from "../components/Radios.svelte";
  import Select from "../components/Select.svelte";

  import { COLOR_UNITS, TAB_SIZES, KEY_MAPS } from "../entries.js";

  let colorUnit = "authored";
  let tabWidth = 2;
  let keymap = "default";

  function setColorUnit(event) {
    colorUnit = event.currentTarget.value;
  }
  function setTabWidth(event) {
    tabWidth = parseInt(event.currentTarget.value);
  }
  function setKeymap(event) {
    keymap = event.currentTarget.value;
  }
</script>

<div class="settings-content">
  <div class="settings-content__columns">
    <div class="settings-content__col">
      <section class="settings-content__section">
        <h2>Inspector</h2>
        <Checkbox name="devtools.inspector.1" label="Show Browser Styles" />
        <Checkbox name="devtools.inspector.2" label="Truncate DOM attributes" />
        <Select
          name="devtools.inspector.3"
          label="Default color unit"
          options={COLOR_UNITS}
          selected={colorUnit}
          on:change={setColorUnit} />
      </section>
      <section class="settings-content__section">
        <h2>Web Console</h2>
        <Checkbox
          name="devtools.webconsole.persistlog"
          label="Persist logs" />
        <Checkbox
          name="devtools.webconsole.timestampMessages"
          label="Enable timestamps" />
        <Checkbox
          name="devtools.webconsole.groupWarningMessages"
          label="Group similar messages" />
        <Checkbox
          name="devtools.webconsole.input.eagerEvaluation"
          label="Eager evaluation" />
      </section>
      <section class="settings-content__section">
        <h2>Style Editor</h2>
        <Checkbox
          name="devtools.styleeditor.autocompletion-enabled"
          label="Autocomplete CSS" />
      </section>
    </div>
    <div class="settings-content__col">
      <section class="settings-content__section">
        <h2>Screenshot behavior</h2>
        <Checkbox
          name="devtools.screenshot.clipboard.enabled"
          label="Screenshot to clipboard" />
        <Checkbox
          name="devtools.screenshot.audio.enabled"
          label="Play camera shutter sound" />
      </section>
      <section class="settings-content__section">
        <h2>Editor preferences</h2>
        <Checkbox
          checked
          name="devtools.editor.detectindentation"
          label="Detect indentation" />
        <Checkbox
          checked
          name="devtools.editor.autoclosebrackets"
          label="Autoclose brackets" />
        <Checkbox
          checked
          name="devtools.editor.expandtab"
          label="Indent using spaces" />
        <Radios
          name="devtools.editor.tabsize"
          label="Tab size"
          options={TAB_SIZES}
          selected={tabWidth}
          on:change={setTabWidth} />
        <Select
          name="devtools.editor.keymap"
          label="Key bindings"
          options={KEY_MAPS}
          selected={keymap}
          on:change={setKeymap} />
      </section>
    </div>
  </div>
</div>
