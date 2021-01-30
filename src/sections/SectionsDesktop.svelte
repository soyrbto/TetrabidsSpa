<script>
  import Services from "../sections/Services.svelte";
  import Products from "./Products.svelte";
  import Contact from "./Contact.svelte";

  import { displayedSection, sectionItems } from "../Stores";

  let componentList = $sectionItems.navbarSec;

  let components = {
    [componentList[0]]: Services,
    [componentList[1]]: Products,
    [componentList[2]]: Contact,
  };
</script>

<div id={$displayedSection}>
  <svelte:component this={components[$displayedSection]} />
</div>
