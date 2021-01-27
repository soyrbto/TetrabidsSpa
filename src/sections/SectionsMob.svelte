<script>
import Services from "./Services.svelte"
import Products from "./Products.svelte"
import Contact from "./Contact.svelte"

import { sectionItems } from "../Stores"

</script>





<div
class="slide-in-right {$sectionItems.navbarSec[0]}"
id={$sectionItems.navbarSec[0]}  
>
<Services />
</div>

<div
class="slide-in-right {$sectionItems.navbarSec[1]}"
id={$sectionItems.navbarSec[1]}
>
<Products />
</div>

<div
class="slide-in-right {$sectionItems.navbarSec[2]}"
id={$sectionItems.navbarSec[2]}
style="margin-top: 60px;"
>
<Contact />
</div>