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
  <ul class="settings-nav__list">
    {#each tabs as item (item.id)}
      <li class="settings-nav__item">
        <a
          href="#{item.id}"
          aria-current={item.id == selected}
          on:click={getTabListener(item.id)}>
           {item.label}
        </a>
      </li>
    {/each}
  </ul>
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
  <div class="settings-nav__reset">
    <div class="settings-nav__item">
      <a
        href="#reset"
        aria-current={'reset' == selected}
        on:click={getTabListener('reset')}>
         Reset
      </a>
    </div>
  </div>
</nav>
