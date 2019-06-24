import Panel from "./Panel.svelte";
import { checkTheme } from "./themeHelper";

checkTheme();
window.addEventListener('hashchange', checkTheme);

const panel = new Panel({
  target: document.body,
  props: {
    name: "world"
  }
});

export default panel;
