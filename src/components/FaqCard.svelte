<script>
  import Card from "../components/Card.svelte";

  export let id = "";
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

<div class="wrapper" id={`${id}`}>
  <Card>
    <div class="wrapper-card">
      <h3 class="title"><slot name="title">title</slot></h3>
      <p class="content"><slot name="content">content</slot></p>
    </div>
  </Card>
</div>
