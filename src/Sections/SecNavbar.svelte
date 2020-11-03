<script>
  import { createEventDispatcher } from "svelte";
  import { secNavbarItems } from "../StaticStore";
  import { displayedSection } from "../Stores";
  const dispatch = createEventDispatcher();

  let sectionMove = {
    home: function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    servicios: function () {
      window.scrollTo({ top: 1920, left: 0, behavior: "smooth" });
    },
  };
</script>

<style>
  .item {
    font-size: 25px;
    font-family: "Josefin Sans", sans-serif;
    color: #11a7dd;
    font-weight: 700;
    margin-bottom: 20px;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
    user-select: none;
  }
  .item:hover {
    cursor: pointer;
    letter-spacing: 0.15em;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
  }

  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  img:hover {
    cursor: pointer;
  }

  .active {
    margin: 20px 0;
    width: 120%;
    border-bottom: 3px solid white;
    animation: slide 0.5s ease-in-out;
    letter-spacing: 0.15em;
  }

  @keyframes slide {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }
</style>

<img
  on:click={sectionMove.home}
  src="./images/home-button.svg"
  alt="blue home button"
/>
{#each secNavbarItems as item}
  <div
    class="item"
    class:active={item === $displayedSection}
    on:click={() => {
      dispatch('secNavbarClicked', `${item}`);
    }}
  >
    {item}
  </div>
{/each}
