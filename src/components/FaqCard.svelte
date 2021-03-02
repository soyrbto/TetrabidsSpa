<script>
  import { onMount } from "svelte";
  import { nodeFaq } from "../Stores";
  import Card from "../components/Card.svelte";

  let titleNode;

  onMount(() => {
    nodeFaq.update((value) => [...value, titleNode]);
  });
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";
  .wrapper {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    .wrapper-card {
      padding: 25px;

      .title {
        font-size: $font-size-titleSec-desk;
        margin-bottom: 20px;
        line-height: 1.2;
      }

      .content {
        font-size: $font-size-body;
      }
    }
  }
</style>

<div bind:this={titleNode} class="wrapper">
  <Card>
    <div class="wrapper-card">
      <h3 class="title">
        <slot name="title">title</slot>
      </h3>
      <p class="content"><slot name="content">content</slot></p>
    </div>
  </Card>
</div>
