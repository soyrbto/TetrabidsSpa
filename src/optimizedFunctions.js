import { writable, get } from "svelte/store";
import { secNavbarItems } from "./StaticStore";

let isDesktop = true;

/******************************************************************/
/******************************************************************/

// function that creates the id, states and update functions for the accordion  on ----> Accordion.svelte
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

// controller for sevices and products list, create the state objects and updates the values on -----> products.svelte & services.svelte
const dynaListHandler = (function activeElement() {
  let initState = {};
  let ObjectStates = writable({});
  let activeItem;

  function createObjectStates(arrayOfElems, initvalue) {
    arrayOfElems.forEach((element) => {
      initState[element] = initvalue;
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

  return { createObjectStates, updateState, ObjectStates };
})();

/******************************************************************/
/******************************************************************/

// function that shortens the text in function of how many words
const textShortener = (function privateShortener() {
  let viewMore = "ver mas...";

  const shortener = (fullText, numbWords) => {
    let longitud = fullText.length;
    let position = fullText.lastIndexOf(" ", numbWords);
    fullText = fullText.slice(0, position);

    if (numbWords < longitud) {
      fullText = fullText + `<span> ${viewMore} </span>`;
    }
    return fullText;
  };

  return shortener;
})();

/******************************************************************/
/******************************************************************/

let moveSectionHandler = (function moveSection(arrSections) {
  let initState = {};
  let store = writable(initState);
  const currentPos = writable(arrSections[0]);

  arrSections.forEach((element) => {
    initState[element] = false;
  });

  store = writable(initState);

  function horizontal(whereTo) {
    if (isDesktop && whereTo != get(currentPos)) {
      store.update(
        (value) =>
          (value = { ...value, [whereTo]: false, [get(currentPos)]: true })
      );
    }
    setTimeout(() => {
      currentPos.set(whereTo);
    }, 450);
  }
  return { currentPos, store, horizontal };
})(secNavbarItems);

/******************************************************************/

export { accordionHandler, dynaListHandler, textShortener, moveSectionHandler };
