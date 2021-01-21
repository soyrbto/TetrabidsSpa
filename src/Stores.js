import { writable } from "svelte/store";
import { moveSectionHandler } from "./optimizedFunctions";

const maxWidthTablet = 1280;
const displayedSection = moveSectionHandler.currentPos;
const displayedState = moveSectionHandler.store;
const nodeSections = writable([]);

//function that moves the screen to the target section from a start position
let activeScreenDisplacer = true;
const screenDisplacer = (startPosition, targetPosition, duration) => {
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
};
// timing function for the movement used in screen displacer
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

function linear(t, b, c, d) {
  return (c * t) / d + b;
}

// navbarState is used for controlling the button state and the navbar state

let navbarState = writable(false);

export {
  displayedSection,
  displayedState,
  easeInOutCubic,
  linear,
  screenDisplacer,
  maxWidthTablet,
  navbarState,
  nodeSections,
};
