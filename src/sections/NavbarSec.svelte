<script>
  import { displayedSection, sectionItems } from "../Stores";
  import { instructionsMap, mapDriver } from "../functions";

  const sectionMove = () => {
    instructionsMap.then((value) => mapDriver.button(value, 0));
  };
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";
  .wrapper-img {
    display: flex;
    justify-content: center;
    img {
      margin-bottom: clamp(14px, 1.04vw, 27px);
      height: clamp(42px, 3.125vw, 85px);

      &:hover {
        cursor: pointer;
      }
    }
  }

  .item {
    font-size: $font-size-primary; // 25px
    font-weight: 700;
    color: #11a7dd;
    user-select: none;
    margin-bottom: clamp(14px, 1.04vw, 27px);
    display: inline-block;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: white;
      transition: width cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
    }

    &:hover {
      cursor: pointer;
      letter-spacing: 0.1em;
      transition: all 0.3s ease-in-out;
    }

    &.active {
      letter-spacing: 0.1em;

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background: white;
        transition: width 0.65s;
      }
    }
  }
</style>

<div class="wrapper-img">
  <img
    on:click={sectionMove}
    src="./images/home-button.svg"
    alt="blue home button"
  />
</div>
{#each $sectionItems.navbarSec as item, i}
  <div
    class="item"
    class:active={item == $displayedSection}
    on:click={() => {
      instructionsMap.then((value) => mapDriver.button(value, i + 2));
    }}
  >
    {item}
  </div>
{/each}
