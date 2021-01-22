<script>
  import { navbarItems, secNavbarItems } from "../StaticStore";
  import { moveSectionHandler } from "../optimizedFunctions";

  let windowsWidth;
  const navbarMove = (e) => {
    let target = e.currentTarget.innerText;
    let currentIndex = secNavbarItems.findIndex((el) => el === target);
    if (windowsWidth > 980 && currentIndex !== -1) {
      let targetPosition = document.querySelector("#section-container")
        .offsetTop;
      moveSectionHandler.vertical(0, targetPosition, 750);
      setTimeout(() => moveSectionHandler.horizontalMove(target), 400);
    }
  };
</script>

<style>
  nav {
    /* META font-size 22px */
    font-size: clamp(16px, 1.2vw, 31px);
    font-family: "Josefin Sans", sans-serif;
    color: white;
    /* META width 580px */
    width: clamp(450px, 33.2vw, 750px);
  }

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    /* META HEIGH 125PX */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0;
  }

  ul > li {
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
    text-align: center;
    list-style: none;
    /* META 150px*/
    width: 17rem;
  }

  li:hover {
    cursor: pointer;
    letter-spacing: 0.1em;
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<nav>
  <ul>
    {#each navbarItems as item, i}
      {#if i < 2}
        <li on:click={(e) => navbarMove(e)}>{item}</li>
      {:else}
        <li><a href={"/" + item}>{item}</a></li>
      {/if}
    {/each}
  </ul>
</nav>
