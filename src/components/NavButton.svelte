<script>
  import { navbarState as open } from "../Stores";

  const clicked = () => {
    open.update((n) => !n);
  };

  console.log($open);
</script>

<style type="text/scss">
  // outline

  :focus:not(:focus-visible) {
    outline: 0;
  }

  button:focus {
    outline-offset: 4px;
  }

  // burger

  .burger {
    position: absolute;
    top: 50%;
    left: 50%;

    // width: 50px;
    width: 40px;
    height: 30px;
    padding: 0;

    border: none;
    background-color: transparent;
    box-shadow: inset 0 -4px 0 0 white;

    transform: translate(-50%, -50%);

    &::after,
    &::before {
      position: absolute;
      content: "";
      display: block;
      height: 4px;

      background-color: white;
    }

    &::before {
      top: 0;
      left: 0;

      width: 100%;
    }

    &::after {
      top: 50%;
      right: 0;

      width: 50%;

      transform: translate(0, -50%);
    }

    &:hover {
      cursor: pointer;
    }
  }

  .open {
    animation-name: burgerOpen;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;

    &::after {
      animation-name: burgerAfterOpen;
      animation-duration: 0.5s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
    }

    &::before {
      animation-name: burgerBeforeOpen;
      animation-duration: 1s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
    }
  }

  .close {
    animation-name: burgerClose;
    animation-duration: 0.5s;
    animation-delay: 1s;
    animation-direction: reverse;
    animation-fill-mode: backwards;
    animation-timing-function: ease-in-out;

    &::after {
      animation-name: burgerAfterClose;
      animation-duration: 1s;
      animation-direction: reverse;
      animation-fill-mode: backwards;
      animation-timing-function: ease-in-out;
    }

    &::before {
      animation-name: burgerBeforeClose;
      animation-duration: 1s;
      animation-direction: reverse;
      animation-fill-mode: backwards;
      animation-timing-function: ease-in-out;
    }
  }

  @keyframes burgerOpen {
    0% {
      box-shadow: inset 0 -4px 0 0 white;
    }

    100% {
      box-shadow: inset 0 -4px 0 0 transparent;
    }
  }

  @keyframes burgerAfterOpen {
    0% {
      width: 50%;
    }

    25% {
      width: 100%;
      transform: translate(0, -50%) rotate(0) scaleX(1);
    }

    25% {
      width: 100%;
      transform: translate(0, -50%) rotate(0) scaleX(1);
    }

    50% {
      width: 100%;
      transform: translate(0, -50%) rotate(0) scaleX(0.6);
    }

    50% {
      width: 100%;
      transform: translate(0, -50%) rotate(0) scaleX(0.6);
    }

    75% {
      width: 100%;
      transform: translate(0, -50%) rotate(0) scaleX(0.6);
    }

    100% {
      width: 100%;
      transform: translate(0, -50%) rotate(45deg) scaleX(0.6);
    }
  }

  @keyframes burgerBeforeOpen {
    0% {
      transform: translateY(0) rotate(0) scaleX(1);
    }

    25% {
      top: 0;
      transform: translateY(0) rotate(0) scaleX(1);
    }

    25% {
      top: 0;
      transform: translateY(0) rotate(0) scaleX(1);
    }

    50% {
      top: 0;
      transform: translateY(0) rotate(0) scaleX(0.6);
    }

    75% {
      top: 50%;
      transform: translateY(-50%) rotate(0) scaleX(0.6);
    }

    75% {
      top: 50%;
      transform: translateY(-50%) rotate(0) scaleX(0.6);
    }

    100% {
      top: 50%;
      transform: translateY(-50%) rotate(-45deg) scaleX(0.6);
    }
  }

  @keyframes burgerClose {
    0% {
      box-shadow: inset 0 -4px 0 0 white;
    }

    100% {
      box-shadow: inset 0 -4px 0 0 transparent;
    }
  }

  @keyframes burgerAfterClose {
    0% {
      width: 50%;
    }

    25% {
      width: 100%;
      transform: translate(0, -50%) rotate(0) scaleX(1);
    }

    25% {
      width: 100%;
      transform: translate(0, -50%) rotate(0) scaleX(1);
    }

    50% {
      width: 100%;
      transform: translate(0, -50%) rotate(0) scaleX(0.6);
    }

    50% {
      width: 100%;
      transform: translate(0, -50%) rotate(0) scaleX(0.6);
    }

    75% {
      width: 100%;
      transform: translate(0, -50%) rotate(0) scaleX(0.6);
    }

    100% {
      width: 100%;
      transform: translate(0, -50%) rotate(45deg) scaleX(0.6);
    }
  }

  @keyframes burgerBeforeClose {
    0% {
      transform: translateY(0) rotate(0) scaleX(1);
    }

    25% {
      top: 0;
      transform: translateY(0) rotate(0) scaleX(1);
    }

    25% {
      top: 0;
      transform: translateY(0) rotate(0) scaleX(1);
    }

    50% {
      top: 0;
      transform: translateY(0) rotate(0) scaleX(0.6);
    }

    75% {
      top: 50%;
      transform: translateY(-50%) rotate(0) scaleX(0.6);
    }

    75% {
      top: 50%;
      transform: translateY(-50%) rotate(0) scaleX(0.6);
    }

    100% {
      top: 50%;
      transform: translateY(-50%) rotate(-45deg) scaleX(0.6);
    }
  }
</style>

<button
  on:click={clicked}
  class:open={$open}
  class:close={!$open}
  class="burger"
  type="button"
/>
