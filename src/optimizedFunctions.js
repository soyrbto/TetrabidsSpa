import { writable, get } from "svelte/store";

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

// controller for sevices and products list, create the state objects and updates the values
const dynaListHandler = (function activeElement() {
  let initState = {};
  let ObjectStates = writable({});

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
  }

  return { createObjectStates, updateState, ObjectStates };
})();

/******************************************************************/
/******************************************************************/
/******************************************************************/

export { accordionHandler, dynaListHandler };
