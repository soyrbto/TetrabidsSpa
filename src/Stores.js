import { writable } from "svelte/store";
import { moveSectionHandler } from "./functions";
import { pageSections } from "./StaticStore";

const load = writable(false);
const maxWidthTablet = writable(1280);
const displayedSection = moveSectionHandler.currentPos;
const displayedState = moveSectionHandler.store;
const nodeSections = writable([]);
const nodeFaq = writable([]);
const nodeSectionsMob = writable([]);
const navbarState = writable(false);
const navbarStateFaq = writable(false);
const animationRange = 2100;
const mapState = writable(0);
const throttleState = writable(false);
const accordionStates = writable({});
const currentWindow = writable();
const messageState = writable(false);
// 4 arrays used as list for different use cases:
// Contacto, Servicios, Productos, Blog, FAQ, home, sections
const sectionItems = writable({
  desktop: pageSections.slice(5, 6),
  navbarMob: pageSections.slice(1, 5),
  navbarSec: [...pageSections.slice(1, 3), [pageSections[0]]],
  navbarDesktop: pageSections.slice(1, 5),
});

export {
  load,
  animationRange,
  sectionItems,
  displayedSection,
  displayedState,
  maxWidthTablet,
  navbarState,
  nodeSections,
  nodeSectionsMob,
  mapState,
  throttleState,
  navbarStateFaq,
  nodeFaq,
  accordionStates,
  currentWindow,
  messageState,
};
