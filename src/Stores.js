import { writable } from "svelte/store";
import { moveSectionHandler } from "./optimizedFunctions";

const maxWidthTablet = 1280;
const displayedSection = moveSectionHandler.currentPos;
const displayedState = moveSectionHandler.store;
const nodeSections = writable([]);
const navbarState = writable(false);

export {
  displayedSection,
  displayedState,
  maxWidthTablet,
  navbarState,
  nodeSections,
};
