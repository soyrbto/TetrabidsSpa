<script>
  import { createEventDispatcher } from "svelte";
  import { secNavbarItems } from "../StaticStore";
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
    margin-bottom: 10px;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
  }
  .item:hover {
    cursor: pointer;
    letter-spacing: 0.15em;
  }

  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  img:hover {
    cursor: pointer;
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
    on:click={() => {
      dispatch('secNavbarClicked', `${item}`);
    }}
  >
    {item}
  </div>
{/each}
