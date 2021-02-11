<script>
  import Checkbox from "../components/Checkbox.svelte";
  import {
    ADVANCED_WEBPLATFORM,
    ADVANCED_DEBUGGING,
    ADVANCED_EXPERIMENTAL,
    ADVANCED_RESET,
  } from "../entries.js";
</script>

<div class="settings-content">
  <div class="settings-content__columns">
    <section class="settings-content__col settings-content__section">
      <h2>{ADVANCED_WEBPLATFORM.title}</h2>
      {#each ADVANCED_WEBPLATFORM.options as item (item.name)}
        <Checkbox {...item} />
      {/each}
    </section>
    <section class="settings-content__col settings-content__section">
      <h2>{ADVANCED_DEBUGGING.title}</h2>
      {#each ADVANCED_DEBUGGING.options as item (item.name)}
        <Checkbox {...item} />
      {/each}
    </section>
    <section class="settings-content__col settings-content__section">
      <h2>{ADVANCED_EXPERIMENTAL.title}</h2>
      {#each ADVANCED_EXPERIMENTAL.options as item (item.name)}
        <Checkbox {...item} />
      {/each}
    </section>
    <section class="settings-content__col settings-content__section">
      <h2>{ADVANCED_RESET.title}</h2>
      {@html ADVANCED_RESET.html}
    </section>
  </div>
</div>
