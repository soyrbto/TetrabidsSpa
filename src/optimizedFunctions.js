import { writable, get } from "svelte/store";
import { pageSections } from "./StaticStore";
import { sectionItems } from "./Stores";

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
    console.log(whereTo);
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

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
  return { currentPos, store, horizontal, vertical };
})([pageSections[1], pageSections[2], pageSections[0]]);

/******************************************************************/
/******************************************************************/

export { accordionHandler, dynaListHandler, textShortener, moveSectionHandler };

//resolver el problema de los nodos en la mainpage, agregar la funcionalidad vertical en la horizontal, (nunca se llamara por separado)
// evitar que la animacion del boton se lance al cargarse
// terminar el accordion
// evitar que se relancen funciones de movimiento
// configurar el formulario con netlify
// agregar lazyLoad a las imagenes (en la pantalla principal) y textos en el blog
// agregar movimiento vertical si se hace en el footer
// bajar un poco el navbar
// importar correctamente en main secnavbarItems a la nueva variable

// rawy: hacer que el navbarsec se mantenga en el mismo sitio aunque no exista seccion
// para testear borrar linea 101 a 103 y clickear navbarsec
