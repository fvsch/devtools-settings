<script>
  export let id;
  export let label;
  export let checked = false;
  export let description = "";

  let descriptionId;
  $: {
    if (description) {
      descriptionId = `description-${id}`;
    }
  }
</script>

<p class="settings-checkbox">
  <label>
    <input type="checkbox" checked={checked} aria-describedby={descriptionId} />
    <span>
      {label}
    </span>
  </label>
  {#if description}
    <br />
    <span id={descriptionId}>{description}</span>
  {/if}
</p>
