<script>
  import { get } from 'svelte/store';
  import { onMount, afterUpdate } from 'svelte';
  import { stateStore } from '../Stores';
  export let accordionId = 'Math.random()';
  accordionId = Math.random();
  let active = false;

  // WHEN EVERY ELEMENT IS MOUNTED
  onMount(() => {
    //IT WILL LOAD A OBJECT WITH THE ID AS A NAME PROPERTY AND FALSE AS ITS VALUE
    stateStore.update((value) => (value = { ...value, [accordionId]: false }));

    //AFTER A SECOND IT WILL UPDATE THE VALUE OF THE FIRST PROPERTY TO FALSE
    setTimeout(function () {
      let state = Object.keys(get(stateStore));
      stateStore.update((value) => (value = { ...value, [state[0]]: true }));
      active = true;
    }, 1000);
  });

  //WHEN CLICKED THE BUTTON OR THE TITLE
  const changeState = () => {
    if (active && !get(stateStore)[accordionId]) {
      //IT WILL UPDATE THE PROPERTY NAME OF THE COMPONENT ID ATO ITS OPPOSITE BOOLEAN VALUE
      stateStore.update(
        (value) => (value = { ...value, [accordionId]: !value[accordionId] }),
      );

      //THEM IT WILL LOOP TROUGH ALL OF THE PROPERTY NAMES AND GIVE THEM FALSE EXCEPT THIS COMPONENT
      let stateArray = Object.keys(get(stateStore));
      stateArray.forEach((current) => {
        if (accordionId != current) {
          stateStore.update(
            (value) => (value = { ...value, [current]: false }),
          );
        }
      });
    }
  };
</script>

<style>
  .container {
    width: 590px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    height: 65px;
    overflow: hidden;
    border-radius: 10px;
    background-color: white;
    transition: height ease-in-out 0.7s;
    box-shadow: 9px 12px 31px rgba(0, 0, 0, 0.45);
  }

  .container-open {
    height: 190px;
  }

  .body {
    overflow: hidden;
    font-family: montserrat;
    font-size: 15px;
    line-height: 28.5px;
    transition: all 0.5s;
    letter-spacing: 0.05em;
    width: 515px;
    height: 112px;
    margin-left: 43px;
  }

  .title {
    margin: 22px 0 17px 11px;
    font-weight: 600;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    display: flex;
    line-height: 22px;
    cursor: pointer;
  }

  .button {
    width: 22px;
    height: 22px;
    color: white;
    font-weight: 700;
    cursor: pointer;
    margin-right: 12.77px;
    background-color: #11a7dd;
    border-radius: 50%;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    transition: all ease-in-out 0.7s;
  }

  .disabled {
    background-color: #a0a3a4;
  }
</style>

<div
  class:container-open={$stateStore[accordionId]}
  class="container container-smaller">
  <label for={accordionId} class="title"><button
      class:disabled={$stateStore[accordionId]}
      on:click={changeState}
      id={accordionId}
      type="button"
      class="button">+</button>
    <slot name="header" />
  </label>

  <div class="body">
    <slot name="body" />
  </div>
</div>
