import { writable } from "svelte/store";

import { THEME_LIST } from "../entries.js";

const VALID_THEMES = THEME_LIST.map(theme => theme.value);
const STORAGE_KEY = "devtools.theme";

const store = writable(localStorage.getItem(STORAGE_KEY) || VALID_THEMES[0]);
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
  localStorage.setItem(STORAGE_KEY, theme);
}
