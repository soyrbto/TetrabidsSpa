<script>
  import { fly } from "svelte/transition";

  export let animateFly = 0;
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
  out:fly={{ x: animateFly, duration: 500, opacity: 1 }}
  in:fly={{ x: animateFly, duration: 800, opacity: 1 }}
>
  <slot />
</div>
