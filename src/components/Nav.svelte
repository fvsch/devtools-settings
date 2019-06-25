<script>
  export let selected;
  export let tabs = [];
  export let select = () => {};
  export let search = () => {};

  function getTabListener(id) {
    return function(event) {
      event.preventDefault();
      select(id);
    };
  }

  function onInput(event) {
    search(event.currentTarget.value);
  }

  function onSubmit(event) {
    event.preventDefault();
  }
</script>

<nav class="settings-nav">
  <ul class="settings-nav__group settings-nav__group--main">
    {#each tabs as item (item.id)}
      <li>
        <a
          class="settings-nav__tab"
          href="#{item.id}"
          aria-current={item.id == selected}
          on:click={getTabListener(item.id)}>
           {item.label}
        </a>
      </li>
    {/each}
  </ul>
  <div class="settings-nav__group settings-nav__group--search">
    <span class="settings-nav__separator" />
    <form
      class="settings-nav__search"
      action="#"
      role="search"
      on:submit={onSubmit}>
      <svg>
        <use href="#icon-filter" />
      </svg>
      <input
        name="q"
        aria-label="Filter Settings"
        placeholder="Filter Settings"
        on:input={onInput} />
    </form>
  </div>
  <div class="settings-nav__group settings-nav__group--reset">
    <a
      class="settings-nav__tab"
      href="#reset"
      aria-current={'reset' == selected}
      on:click={getTabListener('reset')}>
      Reset
    </a>
  </div>
</nav>
