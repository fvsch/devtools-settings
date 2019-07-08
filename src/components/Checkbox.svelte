<script>
  export let name;
  export let label;
  export let checked = false;
  export let description = "";

  let descriptionId;
  $: {
    if (description) {
      descriptionId = `description-${name}`;
    }
  }
</script>

<p class="settings-checkbox">
  <label>
    <input type="checkbox" {name} {checked} aria-describedby={descriptionId} />
    <span class="settings-checkbox__text">{label}</span>
  </label>
  {#if description}
    <span class="settings-checkbox__info" id={descriptionId}>
      {description}
    </span>
  {/if}
</p>
