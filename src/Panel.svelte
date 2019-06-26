<script>
  import currentTab from "./stores/tab.js";
  import Nav from "./components/Nav.svelte";
  import AppearanceTab from "./tabs/Appearance.svelte";
  import ToolsTab from "./tabs/Tools.svelte";
  import AdvancedTab from "./tabs/Advanced.svelte";
  import ResetTab from "./tabs/Reset.svelte";

  const TABS = [
    { id: "appearance", label: "Appearance" },
    { id: "tools", label: "Tools" },
    { id: "advanced", label: "Advanced" }
  ];

  const TAB_COMPONENTS = {
    appearance: AppearanceTab,
    tools: ToolsTab,
    advanced: AdvancedTab,
    reset: ResetTab
  };

  function switchTab(id = "") {
    $currentTab = id;
  }

  function searchSettings(query = "") {}
</script>

<div id="panel">
  <Nav tabs={TABS} selected={$currentTab} select={switchTab} search={searchSettings} />
  <main>
    <svelte:component this={TAB_COMPONENTS[$currentTab]} selected={$currentTab} />
  </main>
</div>
