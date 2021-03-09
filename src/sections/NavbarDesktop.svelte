<script>
  import { sectionItems } from "../Stores";
  import { mapDriver, instructionsMap } from "../functions";

  let windowsWidth;
  const navbarMove = (i) => {
    instructionsMap.then((value) => mapDriver.button(value, i + 1));
  };
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  nav {
    display: flex;
    justify-content: center;
    font-size: clamp(16px, 1.2vw, 31px); // 22px
    color: white;
    width: 100%;
    height: 11.57vh;

    @include respond(tab-land) {
      height: 120px;
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: clamp(490px, 33.2vw, 750px); //580px
      height: 100%;
      margin: 0;

      li {
        transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
        text-align: center;
        list-style: none;
        width: 17rem; // 170px
        user-select: none;

        &:hover:not(:nth-child(3)) {
          cursor: pointer;
          letter-spacing: 0.1em;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        sup {
          color: white;
          background-color: red;
          border-radius: 3px;
          font-size: clamp(8px, 0.625vw, 12px);
          font-weight: 700;
          padding: 2px;
          margin-left: 3px;
        }
      }
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<nav>
  <ul>
    {#each $sectionItems.navbarDesktop as item, i}
      {#if i < 2}
        <li on:click={() => navbarMove(i)}>{item}</li>
      {:else if i > 2}
        <li><a href={"/" + item}>{item}</a></li>
      {:else}
        <li>{item}<sup>Pronto</sup></li>
      {/if}
    {/each}
  </ul>
</nav>
