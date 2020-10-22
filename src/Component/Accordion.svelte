<script>
  import { get } from "svelte/store";
  import { onMount } from "svelte";
  import { stateStore } from "../Stores";
  export let accordionId = "Math.random()";
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
        (value) => (value = { ...value, [accordionId]: !value[accordionId] })
      );

      //THEM IT WILL LOOP TROUGH ALL OF THE PROPERTY NAMES AND GIVE THEM FALSE EXCEPT THIS COMPONENT
      let stateArray = Object.keys(get(stateStore));
      stateArray.forEach((current) => {
        if (accordionId != current) {
          stateStore.update(
            (value) => (value = { ...value, [current]: false })
          );
        }
      });
    }
  };
</script>

<style>
  .container {
    /* meta width 590px */
    width: clamp(100px, 15.625vw + 29rem, 1000px);
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    /* meta height 65px (132px, ) */
    /* height: clamp(4vw + 4rem, 6vw - 1rem, 6vw + 10rem); */
    height: calc(0.5vw + 5.4rem);
    overflow: hidden;
    border-radius: 1rem;
    background-color: white;
    transition: height ease-in-out 0.7s;
    box-shadow: 9px 12px 31px rgba(0, 0, 0, 0.45);
  }

  .container-open {
    /* meta height 190px */
    height: clamp(16rem, 6.2vw + 9rem, 240px);
  }

  .body {
    overflow: hidden;
    font-family: montserrat;
    /* meta font size 15px */
    font-size: clamp(10px, 0.4vw + 0.5rem, 20px);
    /* meta line height 28px */
    line-height: clamp(18px, 0.94vw + 10px, 32px);
    transition: all 0.5s;
    letter-spacing: 0.05em;
    /* meta width 515px */
    width: clamp(100px, 15.625vw + 21.5rem, 1000px);
    /* meta height 112px  */
    height: clamp(9rem, 4.16vw + 32rem, 13rem);
    margin-left: 4.3rem;
  }

  .title {
    margin: 22px 0 17px 11px;
    margin-bottom: clamp(12px, 0.52vw + 7px, 18px);
    font-weight: 600;
    font-family: "Josefin Sans", sans-serif;
    /* meta font size 18px */
    font-size: clamp(14px, 0.52vw + 8px, 22px);
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
  class="container container-smaller"
>
  <label for={accordionId} class="title"><button
      class:disabled={$stateStore[accordionId]}
      on:click={changeState}
      id={accordionId}
      type="button"
      class="button"
    >+</button>
    <slot name="header" />
  </label>

  <div class="body">
    <slot name="body" />
  </div>
</div>
