import {writable} from "svelte/store";

const stateStore = writable({}); 
const colorButtonStore = writable({});

 
export {stateStore, colorButtonStore};
