<script>
  import { secNavbarItems } from "../StaticStore";
  import { displayedSection, changeSection } from "../Stores";

  let sectionMove = function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
</script>

<style>
  .item {
    /* META font size 25px 2.31vh*/
    font-size: 2.31vh;
    font-family: "Josefin Sans", sans-serif;
    color: #11a7dd;
    font-weight: 700;
    margin-bottom: 1.85vh;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
    user-select: none;
  }
  .item:hover {
    cursor: pointer;
    letter-spacing: 0.15em;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
  }

  img {
    margin-bottom: 1.85vh;
    height: 5.46vh;
  }

  img:hover {
    cursor: pointer;
  }

  .active {
    margin: 0 0 1.85vh 0;
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
{#each secNavbarItems as item}
  <div
    class="item"
    class:active={item === $displayedSection}
    on:click={(e) => {
      let target = e.currentTarget.innerText;
      changeSection(target);
    }}
  >
    {item}
  </div>
{/each}
