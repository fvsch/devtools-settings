<script>
  import currentTab from "./stores/tab.js";
  import Nav from "./components/Nav.svelte";
  import Search from "./components/Search.svelte";
  import AppearanceTab from "./tabs/Appearance.svelte";
  import ToolsTab from "./tabs/Tools.svelte";
  import AdvancedTab from "./tabs/Advanced.svelte";

  const TABS = [
    { id: "appearance", label: "Appearance" },
    { id: "tools", label: "Tools" },
    { id: "advanced", label: "Advanced" }
  ];

  const TAB_COMPONENTS = {
    appearance: AppearanceTab,
    tools: ToolsTab,
    advanced: AdvancedTab
  };

  function switchTab(id = "") {
    $currentTab = id;
  }

  function searchSettings(query = "") {}
</script>

<div id="panel">
  <Nav
    tabs={TABS}
    selected={$currentTab}
    select={switchTab}
    search={searchSettings} />
  <Search />
  <main>
    <svelte:component
      this={TAB_COMPONENTS[$currentTab]}
      selected={$currentTab} />
  </main>
</div>
