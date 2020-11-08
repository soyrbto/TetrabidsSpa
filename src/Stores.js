import { writable } from "svelte/store";
import { secNavbarItems } from "./StaticStore";

const stateStore = writable({});
const colorButtonStore = writable({});
const displayedSection = writable(secNavbarItems[0]);
const displayedState = writable({
  [secNavbarItems[0]]: false,
  [secNavbarItems[1]]: false,
  [secNavbarItems[2]]: false,
});

// const changeSection = writable;

export { stateStore, colorButtonStore, displayedSection, displayedState };
