<script>
  import Checkbox from "../components/Checkbox.svelte";
  import Radios from "../components/Radios.svelte";
  import Select from "../components/Select.svelte";

  const COLOR_UNITS = [
    { value: "authored", label: "As Authored" },
    { value: "hex", label: "Hexadecimal" },
    { value: "hsl", label: "HSL(A)" },
    { value: "rgb", label: "RGB(A)" },
    { value: "named", label: "Color Names" }
  ];
  const TAB_SIZES = [
    { value: 2, label: "2" },
    { value: 4, label: "4" },
    { value: 8, label: "8" }
  ];
  const KEY_MAPS = [
    { value: "default", label: "Default" },
    { value: "vim", label: "Vim" },
    { value: "emacs", label: "Emacs" },
    { value: "sublime", label: "Sublime Text" }
  ];

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

<div class="settings-tab settings-tab--columns">
  <section>
    <h2>Inspector</h2>
    <Checkbox name="devtools.inspector.1" label="Show Browser Styles" />
    <Checkbox name="devtools.inspector.2" label="Truncate DOM attributes" />
    <Select
      indent
      name="devtools.inspector.3"
      label="Default color unit"
      options={COLOR_UNITS}
      selected={colorUnit}
      on:change={setColorUnit} />
  </section>
  <section>
    <h2>Web Console</h2>
    <Checkbox
      name="devtools.webconsole.timestampMessages"
      label="Enable timestamps" />
    <Checkbox
      name="devtools.webconsole.groupWarningMessages"
      label="Group similar messages" />
  </section>
  <section>
    <h2>Style Editor</h2>
    <Checkbox
      name="devtools.styleeditor.autocompletion-enabled"
      label="Autocomplete CSS" />
  </section>
  <section>
    <h2>Screenshot behavior</h2>
    <Checkbox
      name="devtools.screenshot.clipboard.enabled"
      label="Screenshot to clipboard" />
    <Checkbox
      name="devtools.screenshot.audio.enabled"
      label="Play camera shutter sound" />
  </section>
  <section>
    <h2>Performance</h2>
    <Checkbox
      name="devtools.performance.new-panel-enabled"
      label="Enable the new performance recorder"
      description="This change will apply after you close and re-open developer
      tools." />
    <Checkbox
      name="devtools.performance.ui.show-platform-data"
      label="Show Gecko platform data"
      description="Include Gecko platform symbols in JavaScript profiles." />
  </section>
  <section>
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
      indent
      name="devtools.editor.tabsize"
      label="Tab size"
      options={TAB_SIZES}
      selected={tabWidth}
      on:change={setTabWidth} />
    <Select
      indent
      name="devtools.editor.keymap"
      label="Key bindings"
      options={KEY_MAPS}
      selected={keymap}
      on:change={setKeymap} />
  </section>
</div>
