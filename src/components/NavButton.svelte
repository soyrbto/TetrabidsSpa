<script>
  import { navbarState as open } from "../Stores";

  let firstLoad = false;
  const clicked = () => {
    firstLoad = true;
    open.update((n) => !n);
  };
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  // outline

  :focus:not(:focus-visible) {
    outline: 0;
  }

  button:focus {
    outline-offset: 4px;
  }

  // burger

  .burger {
    position: relative;
    width: clamp(30px, 5.2vw, 40px);
    height: clamp(20px, 3.9vw, 25px);
    padding: 0;
    border: none;
    background-color: transparent;

    .bar {
      width: 100%;
      height: 2px;
      background-color: white;
      border-radius: 1px;
      position: absolute;
    }

    #bar-1 {
      top: 0;
    }

    #bar-2 {
      width: 50%;
      transform: translate(0, -50%);
      top: 50%;
    }

    #bar-3 {
      top: 90%;
      width: 80%;
    }
  }

  .open {
    #bar-2 {
      animation-name: burgerAfterOpen;
      animation-duration: 0.5s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
    }

    #bar-1 {
      animation-name: burgerBeforeOpen;
      animation-duration: 1s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
    }

    #bar-3 {
      animation-name: burgerOpen;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
    }
  }

  .close {
    #bar-2 {
      animation-name: burgerAfterClose;
      animation-duration: 1s;
      animation-direction: reverse;
      animation-fill-mode: backwards;
      animation-timing-function: ease-in-out;
    }

    #bar-1 {
      animation-name: burgerBeforeClose;
      animation-duration: 1s;
      animation-direction: reverse;
      animation-fill-mode: backwards;
      animation-timing-function: ease-in-out;
    }

    #bar-3 {
      animation-name: burgerClose;
      animation-duration: 0.5s;
      animation-delay: 1s;
      animation-direction: reverse;
      animation-fill-mode: backwards;
      animation-timing-function: ease-in-out;
    }
  }
</style>

<button
  on:click={clicked}
  class:open={$open}
  class:close={!$open && firstLoad}
  class="burger"
  type="button"
>
  <div class="bar" id="bar-1" />
  <div class="bar" id="bar-2" />
  <div class="bar" id="bar-3" />
</button>
