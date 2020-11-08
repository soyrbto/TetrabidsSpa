import { writable, get } from "svelte/store";
import { secNavbarItems } from "./StaticStore";

// stores used for components as states

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

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

function linear(t, b, c, d) {
  return (c * t) / d + b;
}

export {
  stateStore,
  colorButtonStore,
  displayedSection,
  displayedState,
  changeSection,
  easeInOutCubic,
  linear,
};
