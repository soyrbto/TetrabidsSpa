<script>
  import { onMount } from "svelte";
  import { accordionHandler } from "../optimizedFunctions";
  let accordionId;
  let states = accordionHandler.states;

  onMount(() => {
    accordionId = accordionHandler.addItem();
  });

  const changeState = () => {
    accordionHandler.updateState(accordionId);
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

  .container-open svg path {
    d: path("M2 7H12 M7 7L7 7");
    transition: 0.6s;
  }

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
  class:container-open={$states[accordionId]}
  class="container container-smaller"
>
  <label for={accordionId} class="title"
    ><button
      class:disabled={$states[accordionId]}
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
      </svg></button
    >
    <slot name="title" />
  </label>

  <div class="body">
    <slot name="body" />
  </div>
</div>
