import { writable, get } from "svelte/store";

// function that creates the id and states for the accordion
const accordionGenerator = (function idFuncCreator() {
  const accordionStates = writable({});
  let idNumber = 0;
  let accordionIds = [];
  let accordionState = {};

  function funcIncrement() {
    idNumber++;
    accordionIds.push(idNumber);
    accordionState[idNumber] = false;
    accordionStates.set(accordionState);
    console.log(idNumber, accordionIds);
    return idNumber;
  }

  function updateState(accordionId) {
    accordionStates.set(accordionState);
    accordionStates.update(
      (value) => (value = { ...value, [accordionId]: !value[accordionId] })
    );
    console.log(get(accordionStates));
  }

  return { funcIncrement, updateState, accordionStates };
})();

export { accordionGenerator };
