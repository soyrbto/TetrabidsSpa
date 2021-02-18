<script>
  import { sectionItems, nodeSections } from "../Stores";
  import { moveSectionHandler } from "../functions";

  let windowsWidth;
  const navbarMove = (e) => {
    var target = e.currentTarget.innerText;
    moveSectionHandler.vertical($nodeSections[1]);
    setTimeout(() => moveSectionHandler.horizontal(target), 400);
  };
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  nav {
    font-size: clamp(16px, 1.2vw, 31px); // 22px
    color: white;
    width: clamp(450px, 33.2vw, 750px); //580px

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      margin: 0;

      li {
        transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
        text-align: center;
        list-style: none;
        width: 17rem; // 170px

        &:hover {
          cursor: pointer;
          letter-spacing: 0.1em;
        }

        a {
          text-decoration: none;
          color: inherit;
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
        <li on:click={(e) => navbarMove(e)}>{item}</li>
      {:else}
        <li><a href={"/" + item}>{item}</a></li>
      {/if}
    {/each}
  </ul>
</nav>
