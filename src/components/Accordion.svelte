<script>
  import { onDestroy, onMount } from "svelte";
  import { accordionHandler } from "../functions";
  import { accordionStates } from "../Stores";

  export let title;
  export let body;

  let windowsWidth;
  let accordionId;
  let accordionBody;
  let accordionTitle;
  let thatOpens;
  let fullSize;
  let states = accordionStates;

  $: {
    if (thatOpens && accordionBody && accordionTitle && windowsWidth > 0) {
      fullSize =
        1.35 * accordionBody.scrollHeight + accordionTitle.offsetHeight;

      if ($accordionStates[accordionId]) {
        thatOpens.style.height = `${fullSize}px`;
      } else {
        thatOpens.style.removeProperty("height");
      }
    }
  }

  onMount(() => {
    accordionId = accordionHandler.addItem();
    accordionHandler.updateState(Object.keys($accordionStates)[0]);
  });

  onDestroy(() => {
    accordionHandler.resetState();
  });

  accordionStates.subscribe((value) => {
    if (value[accordionId] && thatOpens != undefined) {
      thatOpens.style.height = `${fullSize}px`;
    } else if (thatOpens != undefined) {
      thatOpens.style.removeProperty("height");
    }
  });

  const changeState = () => {
    accordionHandler.updateState(accordionId);
  };
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .container {
    display: flex;
    flex-direction: column;
    width: clamp(calc(20vw + 26rem), 30.72vw, 750px); // 590px
    height: clamp(55px, 3.43vw, 90px); // 66px
    margin-bottom: clamp(30px, 1.56vw, 40px); // 30px
    border-radius: 10px;
    box-shadow: 9px 12px 31px rgba(0, 0, 0, 0.45);
    overflow: hidden;
    background-color: white;
    transition: height ease-in-out 0.7s;

    @include respond(tab-port) {
      width: 60.72vw;
    }

    @include respond(phone) {
      width: 90vw;
    }

    &-open svg path {
      //d: path("M2 7H12 M7 7L7 7");
      transition: 0.6s;
    }

    &-open > .title > .wrapper-title-accordion,
    &-open > .title > .wrapper-button {
      cursor: default;
    }

    .title {
      display: flex;
      align-items: center;
      margin: clamp(17px, 1.143vw, 30px) auto clamp(17px, 1.143vw, 30px)
        clamp(11px, 0.57vw, 12px);
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // remove blue box on click

      .wrapper-button {
        height: clamp(22px, 1.143vw, 30px);
        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(22px, 1.143vw, 30px); // 22px
          height: clamp(22px, 1.143vw, 30px);
          color: white;
          margin-right: clamp(11px, 0.66vw, 13px); // 13px
          background-color: #11a7dd;
          border-radius: 50%;
          outline: none;
          border-style: none;
          transition: all ease-in-out 0.7s;
          cursor: pointer;
        }
        .disabled {
          background-color: #a0a3a4;
          cursor: default;
        }
      }

      .wrapper-title-accordion {
        height: clamp(22px, 1.143vw, 30px);

        @include respond(phone) {
          display: flex;
          align-items: flex-end;
        }

        .title-accordion {
          font-size: clamp(20px, 1.143vw, 30px);
          line-height: 1;
          display: inline;
          vertical-align: text-top;

          @include respond(tab-land) {
            height: 82.2%;
          }

          @include respond(phone) {
            font-size: clamp(15px, 4.34vw, 18px); // 18px
          }
        }
      }
    }
    .body {
      font-size: $font-size-body;
      line-height: clamp(20px, 1.45vw, 35px);
      letter-spacing: 0.05em;
      width: 100%;
      padding: 0 4% 0 clamp(44.5px, 2.395vw, 47px);
      padding-bottom: clamp(16px, 1.143vw, 30px);
      overflow: hidden;
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<div
  bind:this={thatOpens}
  class:container-open={$states[accordionId]}
  class="container"
>
  <label for={accordionId} class="title">
    <div class="wrapper-button">
      <button
        class:disabled={$states[accordionId]}
        on:click={changeState}
        id={accordionId}
        type="button"
        class="button"
        ><svg
          class="svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M2 7H12 M7 2L7 12"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg></button
      >
    </div>
    <div class="wrapper-title-accordion">
      <h3 bind:this={accordionTitle} class="title-accordion">{title}</h3>
    </div>
  </label>

  <div class="body" bind:this={accordionBody}>
    <p>{body}</p>
  </div>
</div>
