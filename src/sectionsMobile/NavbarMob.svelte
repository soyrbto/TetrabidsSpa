<script>
  import { sectionItems } from "../Stores";
  import NavButton from "../components/NavButton.svelte";
  import { navbarState } from "../Stores";
  import { instructionsMapMob, mapDriver } from "../functions";

  const clickedItem = (i) => {
    if (i <= 1) instructionsMapMob.then((value) => mapDriver.button(value, i));
  };

  let windowsWidth;
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  nav {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    font-family: $font-secundary;
    // transition: all 500ms ease-in-out;
    pointer-events: none;

    .menu {
      position: absolute;
      top: clamp(27px, 4.55vw, 35px);
      right: clamp(24px, 3.9vw, 30px);
      border-radius: 50%;
      z-index: 10;

      .button {
        pointer-events: visible;
      }
    }

    .nav.open {
      @include flex-center;
      touch-action: none;
      background-color: rgba(0, 0, 0, 0.98);
      transition: all 200ms ease-in-out;
      pointer-events: visible;
      z-index: 5;

      @include respond(tab-port) {
        height: 100vh;
        position: fixed;
      }
    }
  }

  .nav__list {
    display: none;

    &.show {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav__item {
      @include flex-center;
      background-color: transparent;
      width: 100%;
      opacity: 0;
      animation-name: fadein;
      animation-duration: 1s;
      animation-fill-mode: forwards;

      &:nth-child(1) {
        animation-delay: 0.2s;
      }
      &:nth-child(2) {
        animation-delay: 0.3s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
      &:nth-child(4) {
        animation-delay: 0.5s;
      }
      &:not(:last-child) {
        margin-bottom: 32px;
      }

      .nav__link {
        font-size: 24px;
        letter-spacing: 0.1em;
        text-decoration: none;
        color: white;
        cursor: pointer;

        &.soom {
          transform: translate(25.5%);
        }

        sup {
          background-color: red;
          border-radius: 3px;
          font-size: 10px;
          font-weight: 700;
          padding: 2px;
          margin-left: 3px;
        }

        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />
<nav on:wheel|preventDefault>
  <div class:active={$navbarState} class="menu js-menu">
    <div class="button">
      <NavButton />
    </div>
  </div>
  <nav
    on:click={() => navbarState.update((el) => !el)}
    class:open={$navbarState}
    class="nav js-nav"
  >
    <ul class:show={$navbarState} class="nav__list js-nav__list">
      <li class="nav__item">
        <div on:click={() => clickedItem(0)} class="nav__link">
          {$sectionItems.navbarMob[0]}
        </div>
      </li>
      <li class="nav__item">
        <div on:click={() => clickedItem(1)} class="nav__link">
          {$sectionItems.navbarMob[1]}
        </div>
      </li>
      <li class="nav__item">
        <div class="nav__link soom">
          {$sectionItems.navbarMob[2]}<sup>Pronto</sup>
        </div>
      </li>
      <li class="nav__item">
        <div class="nav__link">
          <a href="/faq">{$sectionItems.navbarMob[3]}</a>
        </div>
      </li>
    </ul>
  </nav>
</nav>
