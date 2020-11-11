<script>
  export let borderRadius = "20px";
  export let backgroundColor = "fff";
</script>

<style>
  .card {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 9px 12px 31px rgba(0, 0, 0, 0.5);
  }
</style>

<div
  class="card"
  style="border-radius:{borderRadius}; background-color:{backgroundColor}"
>
  <slot />
</div>
