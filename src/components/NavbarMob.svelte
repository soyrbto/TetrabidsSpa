<script>
  import { each } from "svelte/internal";

  import { navbarItems } from "../StaticStore";
  let navShow = false;

  const clicked = () => {
    navShow = !navShow;
  };

  let windowsWidth;
</script>

<style>
  nav {
    height: 100%;
    margin: 0;
    font-family: "Roboto", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu {
    display: flex;
    position: absolute;
    bottom: 12%;
    right: 12%;
    background-color: #0580b9;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    z-index: 20;
    box-shadow: 0px 3px 8px #333;
    cursor: pointer;
    flex-direction: column;
  }

  .menu__line {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 4px;
    background-color: white;
    border-radius: 13px;
    transition-duration: 0.4s;
  }

  .menu__line:nth-child(1) {
    top: 14px;
  }
  .menu__line:nth-child(2) {
    top: 28px;
  }
  .menu__line:nth-child(3) {
    bottom: 14px;
  }

  .nav.open {
    background-color: rgba(0, 0, 0, 0.9);
    width: 100vw;
    height: 100vh;
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms ease-in-out;
  }

  .nav__list {
    display: none;
  }

  .nav__list.show {
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
  }

  .nav__item:nth-child(1) {
    animation-delay: 0.2s;
  }
  .nav__item:nth-child(2) {
    animation-delay: 0.3s;
  }
  .nav__item:nth-child(3) {
    animation-delay: 0.4s;
  }
  .nav__item:nth-child(4) {
    animation-delay: 0.5s;
  }
  .nav__item:not(:last-child) {
    margin-bottom: 32px;
  }

  .nav__link {
    font-size: 24px;
    letter-spacing: 0.1em;
    text-decoration: none;
    color: white;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(24px);
    }
    100% {
      opacity: 1;
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />
{#if windowsWidth <= 768}
  <nav>
    <div on:click={clicked} class:active={navShow} class="menu js-menu">
      <span class="menu__line" />
      <span class="menu__line" />
      <span class="menu__line" />
    </div>
    <nav class:open={navShow} class="nav js-nav">
      <ul class:show={navShow} class="nav__list js-nav__list">
        {#each navbarItems as navbarItem}
          <li class="nav__item">
            <a class="nav__link" href="algo">{navbarItem}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </nav>
{/if}
