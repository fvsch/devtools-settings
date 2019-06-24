<script>
  import Checkbox from '../components/Checkbox.svelte';
</script>

<div class="settings-tab">
  <section>
    <h2>Editor preferences</h2>
    <Checkbox checked id="devtools.editor.detectindentation" label="Detect indentation" />
    <Checkbox checked id="devtools.editor.autoclosebrackets" label="Autoclose brackets" />
    <Checkbox checked id="devtools.editor.expandtab" label="Indent using spaces" />
  </section>
</div>
