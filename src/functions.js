import { tick } from "svelte";
import { writable, get } from "svelte/store";
import { pageSections } from "./StaticStore";
import {
  nodeSections,
  mapState,
  nodeSectionsMob,
  throttleState,
} from "./Stores";

/******************************************************************/
/******************************************************************/

// function that creates the id, states and update functions for the accordion
const accordionHandler = (function accordionFuntionality() {
  const states = writable({});
  let idNumber = 0;
  let idsArray = [];
  let InitialStates = {};

  function addItem() {
    idNumber++;
    idsArray.push(idNumber);
    InitialStates[idNumber] = false;
    states.set(InitialStates);
    return idNumber;
  }

  function updateState(accordionId) {
    states.set(InitialStates);
    states.update(
      (value) => (value = { ...value, [accordionId]: !value[accordionId] })
    );
  }

  return { addItem, updateState, states };
})();

/******************************************************************/
/******************************************************************/

// controller for sevices and products list, create the state objects and updates the values
const dynaListHandler = (function activeElement() {
  let initState = {};
  let ObjectStates = writable({});
  let activeItem;
  let id = {};

  function createObjectStates(arrayOfElems, initvalue) {
    arrayOfElems.forEach((element, i) => {
      initState[element] = initvalue;
      id[element] = i;
    });

    ObjectStates.set(initState);
    return ObjectStates;
  }

  function updateState(eleToUpdate, updateTo) {
    ObjectStates.set(initState);
    ObjectStates.update(
      (value) => (value = { ...value, [eleToUpdate]: updateTo })
    );
    activeItem = eleToUpdate;
    return activeItem;
  }

  return { createObjectStates, updateState, ObjectStates, id };
})();

/******************************************************************/
/******************************************************************/

// function that shortens the text in function of how many words
const textShortener = (function privateShortener() {
  const shortener = (fullText, numbCharacters) => {
    let longitud = fullText.length;
    let position = fullText.lastIndexOf(" ", numbCharacters);
    fullText = fullText.slice(0, position);

    if (numbCharacters < longitud) {
      fullText = fullText + " " + ". . .";
    }
    return fullText;
  };

  return shortener;
})();

/******************************************************************/
/******************************************************************/

// handles the horizontal movement of the sections
let moveSectionHandler = (function moveSection(arrSections) {
  let initState = {};
  let store = writable(initState);
  let onMotion = false;
  const currentPos = writable(arrSections[0]);

  arrSections.forEach((element) => {
    initState[element] = false;
  });

  store = writable(initState);

  function horizontal(whereTo) {
    if (whereTo != get(currentPos) && !onMotion) {
      onMotion = true;
      currentPos.set(false);
      setTimeout(() => {
        currentPos.set(whereTo);
        onMotion = false;
      }, 500);
    }
  }

  function vertical(whereTo, whereFrom = window.pageYOffset, howLong = 750) {
    let start = null;
    let distance = whereTo.offsetTop - whereFrom;
    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      window.scrollTo(
        0,
        easeInOutCubic(progress, whereFrom, distance, howLong)
      );
      if (progress < howLong) window.requestAnimationFrame(step);
    }
  }

  // movement function (this case Cubic)
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
  return { currentPos, store, horizontal, vertical };
})([pageSections[1], pageSections[2], pageSections[0]]);

//=================== function that delays a state =======>
function delay(storeState, time) {
  setTimeout(() => {
    storeState.update((value) => !value);
  }, time);
}

/******************************************************************/
/******************************************************************/

//function that controls the movement on wheel from main

const instructionsMap = (async function asyncWrapper() {
  await tick();
  const instruction = (function (sections, pageSections) {
    const instructionsObj = {
      0: () => {
        moveSectionHandler.vertical(get(sections)[0]);
      },
      1: () => {
        moveSectionHandler.vertical(get(sections)[1]);
      },
      2: () => {
        moveSectionHandler.vertical(get(sections)[1]);
        moveSectionHandler.horizontal(pageSections[1]);
      },
      3: () => {
        moveSectionHandler.vertical(get(sections)[1]);
        moveSectionHandler.horizontal(pageSections[2]);
      },
      4: () => {
        moveSectionHandler.vertical(get(sections)[1]);
        moveSectionHandler.horizontal(pageSections[0]);
      },
    };
    return instructionsObj;
  })(nodeSections, pageSections);

  return instruction;
})();

const instructionsMapMob = (async function asyncWrapper() {
  await tick();
  const instruction = (function (sections) {
    const instructionsObj = {
      0: () => {
        moveSectionHandler.vertical(get(sections)[0]);
      },
      1: () => {
        moveSectionHandler.vertical(get(sections)[1]);
      },
      2: () => {
        moveSectionHandler.vertical(get(sections)[2]);
      },
    };
    return instructionsObj;
  })(nodeSectionsMob);

  return instruction;
})();

const mapDriver = (function InstructFollower() {
  let time = 600;
  function wheel(e, instructions) {
    let i = get(mapState);
    e.preventDefault();
    if (!get(throttleState)) {
      throttleState.set(true);

      if (e.deltaY > 0 && i != 1) {
        i = 1;
        instructions[i]();
        delay(throttleState, time);
      } else if (e.deltaY < 0 && i != 0) {
        i = 0;
        instructions[i]();
        delay(throttleState, time);
      } else {
        instructions[0]();
        delay(throttleState, time);
      }
    }

    mapState.set(i);
  }

  function button(instructions, path) {
    instructions[path]();
    mapState.set(path);
  }

  return { wheel, button };
})();
/******************************************************************/
/******************************************************************/

export {
  accordionHandler,
  dynaListHandler,
  textShortener,
  moveSectionHandler,
  instructionsMap,
  instructionsMapMob,
  mapDriver,
};

// commandments of functionality
// 1. all functionality has to be encapsulated in a iife
// 2. if instantiation is required it will be the return of the function
// 3. is an state (store) is required it will be created on the function
// 4. if a static info is required it will be consumed on the function
// 5. states are consumed by components
// 6. functions are used in correspondent lifecycle function of component
// 7. html nodes will be caught on lifecycle component iife
