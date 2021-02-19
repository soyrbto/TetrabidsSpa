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
    transition: all 500ms ease-in-out;
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
      touch-action: none;
      background-color: rgba(0, 0, 0, 0.98);
      display: flex;
      justify-content: center;
      align-items: center;
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
      display: flex;
      align-items: center;
      justify-content: center;
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
      }
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />
{#if windowsWidth <= 768}
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
        {#each $sectionItems.navbarMob as item, i}
          <li class="nav__item">
            <div on:click={() => clickedItem(i)} class="nav__link">{item}</div>
          </li>
        {/each}
      </ul>
    </nav>
  </nav>
{/if}
