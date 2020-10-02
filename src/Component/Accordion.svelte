<script>
  import { get } from 'svelte/store';
  import { onMount } from 'svelte';
  import { stateStore } from '../Stores';
  export let accordionId = 'Math.random()';
  accordionId = Math.random();

  onMount(() => {
    stateStore.update((value) => (value = { ...value, [accordionId]: false }));
  });

  const changeState = () => {
    stateStore.update(
      (value) => (value = { ...value, [accordionId]: !value[accordionId] }),
    );

    let stateArray = Object.keys(get(stateStore));
    stateArray.forEach((current) => {
      if (accordionId != current) {
        stateStore.update((value) => (value = { ...value, [current]: false }));
      }
    });
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
    transition: height ease-in-out 0.4s;
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
  }
</style>

<div
  class:container-open={$stateStore[accordionId]}
  class="container container-smaller">
  <label for={accordionId} class="title"><button
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
