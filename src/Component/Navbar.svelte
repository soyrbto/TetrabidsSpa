<script>
  import { navbarItems } from "../StaticStore";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<style>
  nav {
    /* META font-size 22px */
    font-size: clamp(22px, 1.2vw, 35px);
    font-weight: 400px;
    font-family: "Josefin Sans", sans-serif;
    color: white;
  }

  li {
    /* META HEIGH 125PX */
    height: 12.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li > ul:not(:last-child) {
    /* meta margin-right 40px */
    margin-right: clamp(40px, 12.08vw - 20rem, 200px);
  }

  li > ul {
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
    /* background-color: yellowgreen; */
    width: 15rem;
    text-align: center;
  }

  ul:hover {
    cursor: pointer;
    letter-spacing: 0.15em;
  }

  @media only screen and (max-width: 768px) {
    nav {
      visibility: hidden;
    }
  }
</style>

<nav>
  <li>
    {#each navbarItems as item}
      <ul on:click={() => dispatch('itemLink', `${item}`)}>{item}</ul>
    {/each}
  </li>
</nav>
