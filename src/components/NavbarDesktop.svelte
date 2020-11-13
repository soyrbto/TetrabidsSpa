<script>
  import { navbarItems, secNavbarItems } from "../StaticStore";
  import { changeSection, screenDisplacer } from "../Stores.js";

  let windowsWidth;
  const navbarMove = (e) => {
    let target = e.currentTarget.innerText;
    let currentIndex = secNavbarItems.findIndex((el) => el === target);
    if (windowsWidth > 980 && currentIndex !== -1) {
      let targetPosition = document.querySelector("#section-container")
        .offsetTop;
      screenDisplacer(0, targetPosition, 750);
      setTimeout(() => changeSection(target), 400);
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
    width: clamp(450px, 33.2vw, 700px);
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
    width: 15rem;
  }

  li:hover {
    cursor: pointer;
    letter-spacing: 0.15em;
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<nav>
  <ul>
    {#each navbarItems as item}
      <li on:click={(e) => navbarMove(e)}>{item}</li>
    {/each}
  </ul>
</nav>
