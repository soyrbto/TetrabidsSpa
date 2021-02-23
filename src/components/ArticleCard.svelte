<script>
  import Card from "./Card.svelte";
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .article-card-wrapper {
    display: flex;
    width: 29.16vw; //560px
    height: 13vw; //250px
    padding: 1.14vw; //22px
    border-radius: 20px;
    background-color: #fbefef;

    @include respond(tab-port) {
      flex-direction: column;
      height: auto;
    }

    @include respond(phone) {
      width: 100%;
      margin-bottom: 20px;
    }

    .post-img {
      background-color: grey;
      border-radius: 10px;
      width: 12.39vw; //238px

      @include respond(tab-port) {
        width: 100%;
      }
    }

    .content {
      margin-left: 0.67vw; //13px

      .title {
        font-size: $font-size-primary;
        line-height: 1.1;
        margin: 0.52vw 0;

        @include respond(tab-port) {
          margin: 1.2vw 0;
        }
      }
      .author,
      .date {
        font-size: clamp(10px, 0.78vw, 20px);
        color: #888383;
      }
    }
  }
</style>

<Card boxShadow="none">
  <div class="article-card-wrapper">
    <img src="/images/service-1.svg" alt="post-1" class="post-img" />
    <div class="content">
      <div class="title">Razones por las cuales deberias usar Telegram</div>
      <div class="author">Roberto Traspalacio</div>
      <div class="date">20 de febrero de 2021</div>
    </div>
  </div>
</Card>
