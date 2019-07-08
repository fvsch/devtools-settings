<script>
  import Icon from "./Icon.svelte";

  export let name;
  export let icon;
  export let label;
  export let shortcut;
  export let checked = false;
  export let isAddon = false;
</script>

<p class="settings-checktool">
  <input type="checkbox" {name} id="checktool-{name}" {checked} />
  <label for="checktool-{name}">
    <span class="settings-checktool__icon">
      {#if icon}<Icon id={icon} />{/if}
    </span>
    <span class="settings-checktool__text">{label}</span>
    {#if isAddon}
      <span class="settings-checktool__badge">Extension</span>
    {/if}
    {#if shortcut}
      <kbd class="settings-checktool__badge">{shortcut}</kbd>
    {/if}
  </label>
</p>
