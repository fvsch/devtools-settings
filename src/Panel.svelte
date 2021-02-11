<script>
  import currentTab from "./stores/tab.js";
  import Nav from "./components/Nav.svelte";
  import Search from "./components/Search.svelte";
  import AppearanceTab from "./tabs/Appearance.svelte";
  import ToolsTab from "./tabs/Tools.svelte";
  import AdvancedTab from "./tabs/Advanced.svelte";

  const TABS = [
    { id: "appearance", label: "Customize" },
    { id: "tools", label: "Tool Options" },
    { id: "advanced", label: "Advanced" },
  ];

  const TAB_COMPONENTS = {
    appearance: AppearanceTab,
    tools: ToolsTab,
    advanced: AdvancedTab,
  };

  function switchTab(id = "") {
    $currentTab = id;
  }

  // TODO: show filtered content from any tab
  function searchSettings(query = "") {}
</script>

<div id="panel">
  <Nav tabs={TABS} selected={$currentTab} select={switchTab} />
  <Search onSearch={searchSettings} />
  <main>
    <svelte:component this={TAB_COMPONENTS[$currentTab]} />
  </main>
</div>
