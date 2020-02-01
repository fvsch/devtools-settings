<script>
  import Icon from "./Icon.svelte";

  export let name;
  export let icon;
  export let label;
  export let badge;
  export let description;
  export let checked = false;

  let inputId;
  let descriptionId;
  $: {
    inputId = `checkbox:${name}`;
    if (description) {
      descriptionId = `checkbox-description:${name}`;
    }
  }
</script>

<div class="settings-checkbox">
  <p class="settings-checkbox__main">
    <input
      type="checkbox"
      id={inputId}
      {name}
      {checked}
      aria-describedby={descriptionId} />
    <label class="settings-checkbox__label" for={inputId}>
      {#if icon}
        <span class="settings-checkbox__icon">
          <Icon class="settings-checkbox__icon" id={icon} />
        </span>
      {/if}
      <span class="settings-checkbox__text">{label}</span>
      {#if badge}
        <span class="settings-checkbox__badge">{badge}</span>
      {/if}
    </label>
  </p>
  {#if description}
    <span class="settings-checkbox__info" id={descriptionId}>
      {@html description}
    </span>
  {/if}
</div>
