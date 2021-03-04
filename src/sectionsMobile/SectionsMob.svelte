<script>
  import Services from "../sections/Services.svelte";
  import Products from "../sections/Products.svelte";
  import Contact from "../sections/Contact.svelte";
  import { sectionItems, nodeSectionsMob } from "../Stores";
  import { onMount } from "svelte";

  let services, products, contact;
  onMount(() => {
    let nodesArr = [services, products, contact];
    nodeSectionsMob.set(nodesArr);
  });
</script>

<div
  bind:this={services}
  class="slide-in-right {$sectionItems.navbarSec[0]}"
  id={$sectionItems.navbarSec[0]}
>
  <Services />
</div>

<div
  bind:this={products}
  class="slide-in-right {$sectionItems.navbarSec[1]}"
  id={$sectionItems.navbarSec[1]}
>
  <Products />
</div>

<div
  bind:this={contact}
  class="slide-in-right {$sectionItems.navbarSec[2]}"
  id={$sectionItems.navbarSec[2]}
>
  <Contact />
</div>
