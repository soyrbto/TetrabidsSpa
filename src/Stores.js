import { writable, get } from "svelte/store";
import { secNavbarItems } from "./StaticStore";

// stores used for components as states

const stateStore = writable({});
const colorButtonStore = writable({});
const displayedSection = writable(secNavbarItems[0]);
const displayedState = writable({
  [secNavbarItems[0]]: false,
  [secNavbarItems[1]]: false,
  [secNavbarItems[2]]: false,
});

// functionality, study readables or put it in an object

const changeSection = (target) => {
  if (target != get(displayedSection)) {
    displayedState.update(
      (value) =>
        (value = { ...value, [get(displayedSection)]: true, [target]: false })
    );

    setTimeout(() => {
      displayedSection.set(`${target}`);
    }, 600);
  }
};

export {
  stateStore,
  colorButtonStore,
  displayedSection,
  displayedState,
  changeSection,
};

/*

DE CADA UNO PUEDO OBTENER LA CLASE DE CADA UNO "HOME" ETC

HOME
SERVICIOS
PRODUCTOS
CONTACTO

FUNCION(DONDE ESTOY) {

IF DELTA > 0
BUSCA EL INDICE ARREGLO + 1
SE OBTIENE EL NOMBRE DE LA SECCION SIGUIENTE
FUNCION MOVIMIENTO(HACIA A DONDE VA){}

IF DELTA < 0 
BUSCARLO EN EL ARREGLO - 1
SE OBTIENE EL NOMBRE DE LA SECCION ANTERIOR}
FUNCION MOVIMIENTO(HACIA A DONDE VA){}
*/

/*

I need 4 things:
- where am I
- where am I going
- how much time will I last
- tiempo actual

FUNCION MOVIMIENTO(DONDE ESTOY){
  DELTA>0? ADondeVoy = ARRAY.TARGET+1 : ADondeVoy ARRAY.TARGET-1;
  DondeEstoy = e.target (clean the slide-out class) 
  window.requestFrameAnimation(4 arg.)
  if progress is < duration  call it again 

}

*/
