<script>
  import ArticleCard from "../components/ArticleCard.svelte";
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .others-articles {
    &-title {
      font-family: Roboto;
      font-size: $font-size-titleSec-desk;
      margin-bottom: 1.5625vw; // 30px
    }

    &-wrapper {
      display: flex;
      justify-content: space-between;

      @include respond(phone) {
        flex-direction: column;
      }
    }
  }
</style>

<div class="others-articles">
  <div class="others-articles-title">
    Otros articulos que pueden interesarte
  </div>
  <div class="others-articles-wrapper">
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
  </div>
</div>
