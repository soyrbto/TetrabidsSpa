import { writable } from "svelte/store";
import { secNavbarItems } from "./StaticStore";

const stateStore = writable({});
const colorButtonStore = writable({});
const displayedSection = writable(secNavbarItems[0]);

export { stateStore, colorButtonStore, displayedSection };
