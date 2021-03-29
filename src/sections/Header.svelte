<script>
  import { navbarStateFaq } from "../Stores";
  export let displayOn = false;
  export let sticky = false;

  let windowsWidth;

  function changeState() {
    navbarStateFaq.update((value) => (value = !value));
  }
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .header {
    @include flex-center;
    font-family: $font-primary;
    font-weight: 700;
    color: white;
    background-color: $color-header;
    height: $height-header; // 120px
    position: relative;
    user-select: none;

    &.sticky {
      position: sticky;
      top: 0;
      z-index: 10;
    }

    img {
      position: absolute;
      left: clamp(20px, 3.25vw, 25px);
    }

    & .name {
      font-size: clamp(40px, 3.65vw, 90px);
      height: clamp(55px, 4.6875vw, 100px); // 90px
      margin-right: clamp(23px, 1.82vw, 46px); // 35px
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      a {
        color: white;
        text-decoration: none;
      }
    }

    & .ellipse {
      @include flex-center;
      font-size: clamp(20px, 1.82vw, 45px); // 35px
      width: clamp(55px, 4.6875vw, 120px); // 90px
      height: clamp(55px, 4.6875vw, 120px); // 90px
      border-radius: 50%;
      box-shadow: -20px 19px 58px 7px rgba(0, 0, 0, 0.25);
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<header class:sticky class="header">
  {#if windowsWidth <= 768 && displayOn}
    <img
      on:click={changeState}
      src="../images/chevron-down.svg"
      alt="menu-arrow"
    />
  {/if}
  <div class="name"><a href="/">Tetrabids</a></div>
  <div class="ellipse"><slot name="page" /></div>
</header>
