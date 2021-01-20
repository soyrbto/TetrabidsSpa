import { writable, get } from "svelte/store";

// function that creates the id and states for the accordion
const accordionGenerator = (function idFuncCreator() {
  const accordionStates = writable({});
  let idNumber = 0;
  let idsArray = [];
  let InitialStates = {};

  function addItem() {
    idNumber++;
    idsArray.push(idNumber);
    InitialStates[idNumber] = false;
    accordionStates.set(InitialStates);
    return idNumber;
  }

  function updateState(accordionId) {
    accordionStates.set(InitialStates);
    accordionStates.update(
      (value) => (value = { ...value, [accordionId]: !value[accordionId] })
    );
  }

  return { addItem, updateState, accordionStates };
})();

export { accordionGenerator };
