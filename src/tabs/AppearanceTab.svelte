<script>
  import ThemePicker from "../components/ThemePicker.svelte";

  export let selected;
  export let search;
</script>

<div class="settings-tab">
  <section>
    <h2>Color theme</h2>
    <ThemePicker />
  </section>
</div>
