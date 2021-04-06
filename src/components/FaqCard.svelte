<script>
  import { onDestroy, onMount } from "svelte";
  import { nodeFaq, load } from "../Stores";
  import Card from "../components/Card.svelte";

  let titleNode;
  export let titleText, contentText, id;

  onMount(() => {
    if ($load) nodeFaq.update((value) => [...value, titleNode]);
  });

  onDestroy(() => {
    nodeFaq.set([]);
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
    <div class="wrapper-card" id={`faq#${id}`}>
      <h3 class="title">
        <div>{titleText}</div>
      </h3>
      <div class="content">{@html contentText}</div>
    </div>
  </Card>
</div>
