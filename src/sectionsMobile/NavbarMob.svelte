<script>
  import { sectionItems, nodeSections } from "../Stores";
  import NavButton from "../components/NavButton.svelte";
  import { navbarState } from "../Stores";
  import { moveSectionHandler } from "../optimizedFunctions";

  const clickedItem = () => {
    var whereTo = $nodeSections["targetText"];
    console.log(whereTo);
    moveSectionHandler.vertical(whereTo);
  };

  let windowsWidth;
</script>

<style>
  nav {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: "Roboto", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    transition: all 500ms ease-in-out;
  }

  .menu {
    display: flex;
    position: absolute;
    top: 7%;
    right: 10%;
    background-color: transparent;
    /* height: 70px; */
    /* width: 70px; */
    border-radius: 50%;
    z-index: 20;
    /* box-shadow: 0px 3px 8px #333; */
    cursor: pointer;
    flex-direction: column;
  }

  .nav.open {
    touch-action: none;
    background-color: rgba(0, 0, 0, 0.98);
    width: 100vw;
    height: 100vh;
    position: absolute;
    right: 0px;
    top: 0px;
    border-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms ease-in-out;
    z-index: 0;
    pointer-events: visible;
  }

  @media only screen and (min-width: 768px) {
    .nav.open {
      height: 800px;
    }
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
    cursor: pointer;
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
  .button {
    pointer-events: visible;
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
        {#each $sectionItems.navbarMob as item}
          <li class="nav__item">
            <div on:click={clickedItem} class="nav__link">{item}</div>
          </li>
        {/each}
      </ul>
    </nav>
  </nav>
{/if}
