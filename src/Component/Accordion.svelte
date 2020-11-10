<script>
  import { get } from "svelte/store";
  import { onMount } from "svelte";
  import { stateStore } from "../Stores";
  export let accordionId = "Math.random()";
  accordionId = Math.random();
  let active = false;
  let buttonStatus = "plus";

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
    display: flex;
    flex-direction: column;
    /* META width 590px */
    /* width: clamp(100px, 15.625vw + 29rem, 1000px); */
    width: 31vw;
    /* META 64px*/
    max-height: calc(0.5vw + 5.4rem);
    /* META 30px*/
    margin-bottom: 2.77vh;
    border-radius: 1rem;
    box-shadow: 9px 12px 31px rgba(0, 0, 0, 0.45);
    overflow: hidden;
    background-color: white;
    transition: max-height ease-in-out 0.7s;
  }

  @media screen and (max-width: 1000px) {
    .container {
      width: 70vw;
    }
    .body {
      width: 60vw !important;
    }
  }

  .container-open {
    /* meta height 190px */
    max-height: 190px;
    transition: max-height ease-in-out 0.7s;
  }

  .container-open > .title,
  .container-open button {
    cursor: auto;
  }

  .container-open svg path {
    d: path("M2 7H12 M7 7L7 7");
    transition: 0.6s;
  }

  .title {
    display: flex;
    margin: 22px 0 17px 11px;
    margin-bottom: clamp(12px, 0.52vw + 7px, 18px);
    font-weight: 600;
    font-family: "Josefin Sans", sans-serif;
    /* meta font size 18px */
    font-size: clamp(14px, 0.52vw + 8px, 22px);
    line-height: 22px;
    cursor: pointer;
    user-select: none;
  }

  @media screen and (max-height: 768px) {
    .title {
      font-size: clamp(10px, 1.7vh, 18px) !important;
    }
    .body {
      font-size: clamp(11px, 1.2vh, 13px) !important;
    }
  }

  .body {
    overflow: hidden;
    font-family: montserrat;
    /* meta font size 15px */
    font-size: clamp(13px, 0.6vw + 0.7rem, 16px);
    /* meta line height 28px */
    line-height: clamp(18px, 0.94vw + 10px, 32px);
    letter-spacing: 0.05em;
    /* meta width 515px */
    /* width: clamp(100px, 15.625vw + 21.5rem, 1000px); */
    width: 26.82vw;
    /* meta height 112px  */
    /* height: clamp(9rem, 4.16vw + 32rem, 13rem); */
    margin-left: 4.3rem;
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
    ><svg class="svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2 7H12 M7 2L7 12"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg></button>
    <slot name="header" />
  </label>

  <div class="body">
    <slot name="body" />
  </div>
</div>
