<script>
  export let name;
  export let options;
  export let selected = null;
  export let label = null;
  export let indent = false;
</script>

<p class="settings-radios {indent ? 'settings-radios--indent' : ''}">
  {#if label}
    <span class="settings-radios__label">{label}</span>
  {/if}
  {#each options as option (option.value)}
    <label
      class="settings-radios__item {option.value === selected ? 'settings-radios__item--checked' : ''}">
      <input
        type="radio"
        {name}
        value={option.value}
        checked={option.value === selected}
        on:change />
      <span>{option.label}</span>
    </label>
  {/each}
</p>
