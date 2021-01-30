<script>
  import { fly } from "svelte/transition";

  export let borderRadius = "20px";
  export let backgroundColor = "fff";
  export let boxShadow = "9px 12px 31px rgba(0, 0, 0, 0.5)";
</script>

<style>
  .card {
    background-color: #fff;
    display: inline-block;
  }
</style>

<div
  class="card"
  style="border-radius:{borderRadius}; background-color:{backgroundColor}; box-shadow:{boxShadow}"
  out:fly={{ x: 2500, duration: 600, opacity: 1 }}
  in:fly={{ x: 2500, duration: 600, opacity: 1 }}
>
  <slot />
</div>
