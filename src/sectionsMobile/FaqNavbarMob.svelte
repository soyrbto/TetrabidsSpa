<script>
  import { navbarStateFaq, nodeFaq } from "../Stores";
  import { faqStore } from "../FaqStore";
  import { moveSectionHandler } from "../functions";

  function goTo(i) {
    moveSectionHandler.vertical($nodeFaq[i]);
  }
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 5% 5%;
    pointer-events: none;
    z-index: -1;

    &.open {
      touch-action: none;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.98);
      pointer-events: visible;
      transition: all 200ms ease-in-out;
      z-index: 11;
    }
  }

  .nav__list {
    display: none;
    list-style: none;

    &.show {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
    }

    .nav__item {
      background-color: transparent;
      opacity: 0;
      animation-name: fadein;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      user-select: none;

      &:nth-child(1) {
        animation-delay: 1.2s;
      }
      &:nth-child(2) {
        animation-delay: 1.3s;
      }
      &:nth-child(3) {
        animation-delay: 1.4s;
      }
      &:nth-child(4) {
        animation-delay: 1.5s;
      }
      &:nth-child(5) {
        animation-delay: 1.6s;
      }
      &:nth-child(6) {
        animation-delay: 1.7s;
      }
      &:nth-child(7) {
        animation-delay: 1.8s;
      }
      &:nth-child(8) {
        animation-delay: 1.9s;
      }

      .nav__link {
        display: inline;
        font-size: clamp(16px, 4.58vw, 24px);
        font-weight: 300;
        line-height: 1.2;
        letter-spacing: 0.1em;
        text-decoration: none;
        color: white;
      }
    }
  }
</style>

<nav
  class:open={$navbarStateFaq}
  on:wheel|preventDefault
  class="nav"
  on:click={() => navbarStateFaq.set(false)}
>
  <ul class="show nav__list js-nav__list">
    {#each faqStore as item, i}
      <li class="nav__item">
        <div on:click={() => goTo(i)} class="nav__link">{item.title}</div>
      </li>
    {/each}
  </ul>
</nav>
