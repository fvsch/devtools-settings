import { writable } from "svelte/store";

const key = "devtools-settings.tab";
const store = writable(localStorage.getItem(key) || "appearance");
store.subscribe((value) => localStorage.setItem(key, value));
export default store;
