<script>
  import { displayedSection, nodeSections, sectionItems } from "../Stores";
  import { moveSectionHandler } from "../optimizedFunctions";

  const sectionMove = () => {
    moveSectionHandler.vertical($nodeSections[0]);
  };
</script>

<style>
  .item {
    /* META font size 25px */
    font-size: clamp(18px, 1.3vw, 33px);
    font-family: "Josefin Sans", sans-serif;
    color: #11a7dd;
    font-weight: 700;
    margin-bottom: clamp(14px, 1.04vw, 27px);
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
    user-select: none;
  }
  .item:hover {
    cursor: pointer;
    letter-spacing: 0.15em;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
  }

  img {
    margin-bottom: clamp(14px, 1.04vw, 27px);
    height: clamp(42px, 3.125vw, 85px);
  }

  img:hover {
    cursor: pointer;
  }

  .active {
    margin: 0 0 clamp(14px, 1.04vw, 27px) 0;
    width: 120%;
    border-bottom: 2px solid white;
    animation: slide 0.3s ease-in-out;
    letter-spacing: 0.15em;
  }

  @keyframes slide {
    from {
      width: 0%;
    }

    to {
      width: 100%;
      border-bottom: 2px solid white;
    }
  }
</style>

<img
  on:click={sectionMove}
  src="./images/home-button.svg"
  alt="blue home button"
/>
{#each $sectionItems.navbarSec as item}
  <div
    class="item"
    class:active={item === $displayedSection}
    on:click={(e) => {
      moveSectionHandler.horizontal(e.currentTarget.innerText);
    }}
  >
    {item}
  </div>
{/each}
