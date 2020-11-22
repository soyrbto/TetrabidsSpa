import { writable, get } from "svelte/store";
import { secNavbarItems, servicesData, productsData } from "./StaticStore";
const WindowsWidth = window.innerWidth;
const maxWidthTablet = 1280;

// stores used for components as states

const stateStore = writable({});
const colorButtonStore = writable({});
const displayedSection = writable(secNavbarItems[0]);
const displayedState = writable({
  [secNavbarItems[0]]: false,
  [secNavbarItems[1]]: false,
  [secNavbarItems[2]]: false,
});

//state of serviceDescription content
const servBodyContent = writable(servicesData.serviceItems[0]);

//state of productDescription content
const prodBodyContent = writable(productsData.productItems[0]);
// functionality, study readables or put it in an object
let activeChangeSection = true;
const changeSection = (target) => {
  if (activeChangeSection) {
    activeChangeSection = false;
    if (target != get(displayedSection)) {
      displayedState.update(
        (value) =>
          (value = { ...value, [get(displayedSection)]: true, [target]: false })
      );

      setTimeout(() => {
        displayedSection.set(`${target}`);
      }, 450);
    }
    setTimeout(() => {
      activeChangeSection = true;
    }, 900);
  }
};

//function that moves the screen to the target section from a start position
let activeScreenDisplacer = true;
const screenDisplacer = (startPosition, targetPosition, duration) => {
  if (WindowsWidth > maxWidthTablet) {
    if (activeScreenDisplacer) {
      activeScreenDisplacer = false;
      const distance = targetPosition - startPosition;
      let start = null;
      window.requestAnimationFrame(step);
      function step(timestamp) {
        if (!start) {
          start = timestamp;
        }
        const progress = timestamp - start;

        window.scrollTo(
          0,
          easeInOutCubic(progress, startPosition, distance, duration)
        );
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
      setTimeout(() => {
        activeScreenDisplacer = true;
      }, 500);
    }
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
  screenDisplacer,
  maxWidthTablet,
  servBodyContent,
  prodBodyContent,
};
