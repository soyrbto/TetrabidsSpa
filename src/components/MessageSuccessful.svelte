<script>
  import { messageState } from "../Stores";
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .success-message {
    text-align: center;

    max-width: 500px;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  .success-message__icon {
    max-width: 75px;
  }

  .success-message__title {
    color: $success-primary;
    transform: translateY(25px);
    opacity: 0;
    transition: all 200ms ease;

    &.active {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .icon-checkmark {
    circle {
      fill: $success-primary;
      transform-origin: 50% 50%;
      transform: scale(0);
      transition: transform 200ms cubic-bezier(0.22, 0.96, 0.38, 0.98);
    }
    path {
      transform: scale(0);
      transition: stroke-dashoffset 350ms ease;
      transition-delay: 100ms;

      &.active {
        transform: scale(1);
      }
    }

    &.active {
      circle {
        transform: scale(1);
      }
    }
  }
</style>

<div class="success-message">
  <svg
    viewBox="0 0 76 76"
    class:active={$messageState}
    class="success-message__icon icon-checkmark"
  >
    <circle cx="38" cy="38" r="36" />
    <path
      class:active={$messageState}
      fill="none"
      stroke="#FFFFFF"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      d="M17.7,40.9l10.9,10.9l28.7-28.7"
    />
  </svg>
  <h1 class:active={$messageState} class="success-message__title">
    ¡Mensaje Recibido!
  </h1>
</div>
