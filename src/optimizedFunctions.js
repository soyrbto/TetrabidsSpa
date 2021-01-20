import { writable } from "svelte/store";

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

export { accordionHandler };
