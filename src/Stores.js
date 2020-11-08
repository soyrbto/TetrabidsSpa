import { writable, get } from "svelte/store";
import { secNavbarItems } from "./StaticStore";

const stateStore = writable({});
const colorButtonStore = writable({});
const displayedSection = writable(secNavbarItems[0]);
const displayedState = writable({
  [secNavbarItems[0]]: false,
  [secNavbarItems[1]]: false,
  [secNavbarItems[2]]: false,
});

// functionality, study readables or put it in an object

const changeSection = (target) => {
  if (target != get(displayedSection)) {
    displayedState.update(
      (value) =>
        (value = { ...value, [get(displayedSection)]: true, [target]: false })
    );

    setTimeout(() => {
      displayedSection.set(`${target}`);
    }, 600);
  }
};

const testOut = (testOutVar) => {
  console.log(testOutVar);
};
export {
  stateStore,
  colorButtonStore,
  displayedSection,
  displayedState,
  changeSection,
  testOut,
};
