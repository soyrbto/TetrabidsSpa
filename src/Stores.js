import { writable } from "svelte/store";
import { moveSectionHandler } from "./optimizedFunctions";
import { pageSections } from "./StaticStore";

const maxWidthTablet = writable(1280);
const displayedSection = moveSectionHandler.currentPos;
const displayedState = moveSectionHandler.store;
const nodeSections = writable([]);
const navbarState = writable(false);

// 4 arrays used as list for different use cases:
// Contacto, Servicios, Productos, Blog, FAQ, home, sections
const sectionItems = writable({
  desktop: pageSections.slice(5, 8),
  navbarMob: pageSections.slice(1, 5),
  navbarSec: pageSections.slice(0, 3),
  navbarDesktop: pageSections.slice(1, 5),
});

export {
  sectionItems,
  displayedSection,
  displayedState,
  maxWidthTablet,
  navbarState,
  nodeSections,
};
