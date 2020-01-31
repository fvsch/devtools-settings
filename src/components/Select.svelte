<script>
  import Icon from "./Icon.svelte";

  export let name;
  export let options;
  export let selected = null;
  export let label = null;
</script>

<p class="settings-select">
  <label class="settings-select__label" for={`select-${name}`}>{label}</label>
  <span class="settings-select__main">
    <select
      class="settings-select__select"
      {name}
      id={`select-${name}`}
      on:change>
      {#each options as option (option.value)}
        <option checked={option.value === selected} value={option.value}>
          {option.label}
        </option>
      {/each}
    </select>
    <Icon id="select-arrow" size="8" />
  </span>
</p>
