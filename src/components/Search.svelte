<script>
  import Icon from "./Icon.svelte";

  function onSubmit(event) {
    event.preventDefault();
  }

  function onInput(event) {}
</script>

<div class="settings-search">
  <form
    class="settings-search__form"
    action="#"
    role="search"
    on:submit={onSubmit}>
    <Icon id="filter" />
    <input
      name="q"
      aria-label="Filter Settings"
      placeholder="Filter Settings"
      on:input={onInput} />
  </form>
</div>
