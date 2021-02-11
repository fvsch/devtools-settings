<script>
  import Icon from "./Icon.svelte";

  export let name;
  export let options;
  export let selected = null;
  export let label = null;
</script>

<p class="settings-radios">
  {#if label}
    <span class="settings-radios__label">{label}</span>
  {/if}
  {#each options as option (option.value)}
    <label
      class="settings-radios__item {option.value === selected
        ? 'settings-radios__item--checked'
        : ''}"
    >
      <input
        type="radio"
        {name}
        value={option.value}
        checked={option.value === selected}
        on:change
      />
      {#if option.icon}
        <Icon id={option.icon} />
      {/if}
      <span>{option.label}</span>
    </label>
  {/each}
</p>
