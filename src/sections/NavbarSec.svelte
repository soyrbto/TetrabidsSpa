<script>
  import { displayedSection, nodeSections, sectionItems } from "../Stores";
  import { moveSectionHandler } from "../functions";

  const sectionMove = () => {
    moveSectionHandler.vertical($nodeSections[0]);
  };
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  img {
    margin-bottom: clamp(14px, 1.04vw, 27px);
    height: clamp(42px, 3.125vw, 85px);

    &:hover {
      cursor: pointer;
    }
  }

  .item {
    font-size: $font-size-primary; // 25px
    font-weight: 700;
    color: #11a7dd;
    margin-bottom: clamp(14px, 1.04vw, 27px);
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
    user-select: none;

    &:hover {
      cursor: pointer;
      letter-spacing: 0.15em;
      transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
    }

    &.active {
      margin: 0 0 clamp(14px, 1.04vw, 27px) 0;
      width: 120%;
      border-bottom: 2px solid white;
      animation: slide 0.3s ease-in-out;
      letter-spacing: 0.15em;
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
    class:active={item == $displayedSection}
    on:click={(e) => {
      moveSectionHandler.horizontal(e.currentTarget.innerText);
    }}
  >
    {item}
  </div>
{/each}
