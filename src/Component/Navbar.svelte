<script>
  import { NavBarItems } from '../StaticStore';
</script>

<style>
  nav {
    font-size: 25px;
    font-weight: 400px;
    font-family: 'Josefin Sans', sans-serif;
    color: white;
  }

  li {
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li > ul:not(:last-child) {
    margin-right: 90px;
  }
</style>

<nav>
  <li>
    {#each NavBarItems as item}
      <ul>{item}</ul>
    {/each}
  </li>
</nav>
