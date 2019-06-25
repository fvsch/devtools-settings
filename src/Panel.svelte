<script>
  import Nav from "./components/Nav.svelte";
  import AppearanceTab from "./tabs/Appearance.svelte";
  import GeneralTab from "./tabs/General.svelte";
  import AdvancedTab from "./tabs/Advanced.svelte";
  import ResetTab from "./tabs/Reset.svelte";

  const TABS = [
    { id: "appearance", label: "Appearance" },
    { id: "general", label: "Tools" },
    { id: "advanced", label: "Advanced" }
  ];

  const TAB_COMPONENTS = {
    appearance: AppearanceTab,
    general: GeneralTab,
    advanced: AdvancedTab,
    reset: ResetTab
  };

  let selected = "appearance";

  function switchTab(id = "") {
    selected = id;
  }

  function searchSettings(query = "") {}
</script>

<div id="panel">
  <Nav tabs={TABS} {selected} select={switchTab} search={searchSettings} />
  <main>
    <svelte:component this={TAB_COMPONENTS[selected]} {selected} />
  </main>
</div>
