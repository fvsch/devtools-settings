<script>
  import Icon from "./Icon.svelte";

  export let selected;
  export let tabs = [];
  export let select = () => {};

  function onTabSelect(event) {
    event.preventDefault();
    select(event.currentTarget.dataset.id);
  }
</script>

<nav class="settings-nav">
  <h1 class="settings-nav__title">Settings</h1>
  <ul class="settings-nav__tabs">
    {#each tabs as item (item.id)}
      <li>
        <a
          class="settings-nav__tab"
          href="#{item.id}"
          aria-current={item.id == selected}
          data-id={item.id}
          on:click={onTabSelect}>
          {item.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
