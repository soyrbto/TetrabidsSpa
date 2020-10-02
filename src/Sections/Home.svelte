<script>
  import Navbar from '../Component/NavBar.svelte';
  import TitleSubtitle from '../Component/TitleSubtitle.svelte';
  import { accordionData } from '../StaticStore';
  import Accordion from '../Component/Accordion.svelte';
  import Button from '../Component/SharedComponents/button.svelte';
</script>

<style>
  .navbar {
    margin-bottom: 95px;
  }

  .wrapper {
    display: flex;
  }
  .col-1 {
    margin-left: 210px;
  }
  .col-2 {
    margin-left: 451px;
  }

  img {
    height: 587px;
    width: 587px;
  }
  .button {
    display: flex;
    justify-content: center;
  }

  .accordion {
    margin-top: 20px;
  }
</style>

<div class="navbar">
  <Navbar />
</div>
<div class="wrapper">
  <div class="col-1">
    <TitleSubtitle />
    <div class="accordion">
      {#each accordionData as accordion}
        <Accordion>
          <h3 slot="header">{accordion.title}</h3>
          <p slot="body">{accordion.body}</p>
        </Accordion>
      {/each}
    </div>
    <div class="button">
      <Button />
    </div>
  </div>

  <div class="col-2"><img src="./images/laptop.svg" alt="" /></div>
</div>
