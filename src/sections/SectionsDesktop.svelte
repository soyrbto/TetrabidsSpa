<script>
  import Services from "./Services.svelte";
  import Products from "./Products.svelte";
  import Contact from "./Contact.svelte";

  import { sectionItems } from "../Stores";

  let visibleSection = $sectionItems.navbarSec[0];
</script>

{#if visibleSection == $sectionItems.navbarSec[0]}
  <div
    class:slide-out-right={$sectionItems.navbarSec[0] !== visibleSection}
    class="slide-in-right {$sectionItems.navbarSec[0]}"
    id={$sectionItems.navbarSec[0]}
  >
    <Services />
  </div>
{:else if visibleSection == $sectionItems.navbarSec[1]}
  <div
    class:slide-out-right={$sectionItems.navbarSec[1] == visibleSection}
    class="slide-in-right {$sectionItems.navbarSec[1]}"
    id={$sectionItems.navbarSec[1]}
  >
    <Products />
  </div>
{:else if visibleSection == $sectionItems.navbarSec[2]}
  <div
    class:slide-out-right={$sectionItems.navbarSec[2] == visibleSection}
    class="slide-in-right {$sectionItems.navbarSec[2]}"
    id={$sectionItems.navbarSec[2]}
  >
    <Contact />
  </div>
{/if}
