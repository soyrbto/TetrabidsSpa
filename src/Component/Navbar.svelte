<script>
  import { navbarItems } from "../StaticStore";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<style>
  nav {
    font-size: 22px;
    font-weight: 400px;
    font-family: "Josefin Sans", sans-serif;
    color: white;
  }

  li {
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li > ul:not(:last-child) {
    margin-right: 40px;
  }

  li > ul {
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
    /* background-color: yellowgreen; */
    width: 150px;
    text-align: center;
  }

  ul:hover {
    cursor: pointer;
    letter-spacing: 0.15em;
  }
</style>

<nav>
  <li>
    {#each navbarItems as item}
      <ul on:click={() => dispatch('itemLink', `${item}`)}>{item}</ul>
    {/each}
  </li>
</nav>
