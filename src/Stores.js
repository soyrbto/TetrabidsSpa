import { writable, get } from "svelte/store";
import { secNavbarItems } from "./StaticStore";
const maxWidthTablet = 1280;

const displayedSection = writable(secNavbarItems[0]);
const displayedState = writable({
  [secNavbarItems[0]]: false,
  [secNavbarItems[1]]: false,
  [secNavbarItems[2]]: false,
});

const nodeSections = writable([]);

// Functions that changes the section displayed on deskptop screens (<1280px)
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

// function that shorten a text in a variable and add the view more at the end

let viewMore = "ver mas...";

const shortener = (mText, numbWords) => {
  let longitud = mText.length;
  let position = mText.lastIndexOf(" ", numbWords);
  mText = mText.slice(0, position);

  if (numbWords < longitud) {
    mText = mText + `<span> ${viewMore} </span>`;
  }

  return mText;
};

// navbarState is used for controlling the button state and the navbar state

let navbarState = writable(false);

export {
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
  navbarState,
  nodeSections,
  shortener,
};
