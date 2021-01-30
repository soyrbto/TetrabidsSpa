<script>
  import Services from "./Services.svelte";
  import Products from "./Products.svelte";
  import Contact from "./Contact.svelte";

  import { displayedSection, sectionItems } from "../Stores";

  let componentList = $sectionItems.navbarSec;

  let components = {
    [componentList[1]]: Services,
    [componentList[2]]: Products,
    [componentList[0]]: Contact,
  };
</script>

<div id={$displayedSection}>
  <svelte:component this={components[$displayedSection]} />
</div>
