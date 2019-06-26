import { writable } from "svelte/store";

const VALID_THEMES = ["light", "dark", "highcontrast"];
const KEY = "devtools.theme";

const store = writable(localStorage.getItem(KEY) || VALID_THEMES[0]);
store.subscribe(onUpdate);
export default store;

function onUpdate(theme) {
  if (!VALID_THEMES.includes(theme)) {
    throw new Error(`Cannot set theme to '${theme}'`);
  }
  // Update class name
  const themeClass = `theme-${theme}`;
  if (themeClass !== document.documentElement.className) {
    document.documentElement.className = themeClass;
  }
  // Save value
  localStorage.setItem(KEY, theme);
}
