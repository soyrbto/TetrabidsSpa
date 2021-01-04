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
    display: flex;
    flex-direction: column;
    /* META width 590px */
    width: clamp(calc(20vw + 26rem), 30.72vw, 750px);
    /* META 66px*/
    height: clamp(52px, 3.43vw, 90px);
    /* META 30px*/
    margin-bottom: 2.77vh;
    border-radius: 1rem;
    box-shadow: 9px 12px 31px rgba(0, 0, 0, 0.45);
    overflow: hidden;
    background-color: white;
    transition: height ease-in-out 0.7s;
  }

  @media screen and (max-width: 768px) {
    .container {
      width: clamp(332px, 80vw, 538px);
    }
  }

  .container-open > .title,
  .container-open button {
    cursor: auto;
  }

  /* .container-open svg path {
    d: path("M2 7H12 M7 7L7 7");
    transition: 0.6s;
  } */

  .title {
    display: flex;
    align-items: center;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    margin-top: clamp(16px, 1.14vw, 30px);
    margin-bottom: clamp(16px, 1.14vw, 30px);
    margin-left: clamp(11px, 0.57vw, 12px);
    cursor: pointer;
    user-select: none;
  }

  .body {
    overflow: hidden;
    font-family: montserrat;
    /* meta font size 15px */
    /* font-size: clamp(13px, 0.6vw + 0.7rem, 16px); */
    font-size: clamp(11px, 0.78vw, 20px);
    /* meta line height 28px */
    line-height: clamp(18px, 0.94vw + 10px, 32px);
    letter-spacing: 0.05em;
    width: 100%;
    /* padding: 0 3% 0 6%; */
    padding: 0 4% 0 clamp(44.5px, 2.395vw, 47px);
    padding-bottom: clamp(16px, 1.14vw, 30px);
  }

  .button {
    width: 22px;
    height: 22px;
    color: white;
    font-weight: 700;
    cursor: pointer;
    /** META 12.77px*/
    margin-right: clamp(11px, 0.66vw, 13px);
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
