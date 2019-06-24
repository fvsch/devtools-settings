<script>
  import Nav from "./components/Nav.svelte";
  import AppearanceTab from "./tabs/AppearanceTab.svelte";
  import CodeTab from "./tabs/CodeTab.svelte";
  import AdvancedTab from "./tabs/AdvancedTab.svelte";
  import ResetTab from "./tabs/ResetTab.svelte";

  const TABS = [
    { id: "appearance", label: "Appearance" },
    { id: "code", label: "Code" },
    { id: "advanced", label: "Advanced" }
  ];

  const TAB_COMPONENTS = {
    appearance: AppearanceTab,
    code: CodeTab,
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
