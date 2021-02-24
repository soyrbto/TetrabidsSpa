<script>
  import Footer from "../sections/Footer.svelte";
  import Header from "../sections/Header.svelte";
  import Button from "../components/Button.svelte";
  import { faq } from "../FaqStore";
  import FaqCard from "../components/FaqCard.svelte";
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .page-container {
    position: relative;
    background-color: white;
    font-family: $font-primary;

    .content {
      display: flex;
      height: calc(
        100vh - clamp(80px, 6.25vw, 160px) - clamp(60px, 4.46vw, 115px)
      );

      &-left {
        width: 36.25%;
        padding: 15px 38px 0;
        overflow: scroll;
        overflow-x: hidden;

        @include scrollBar;

        .button-wrapper {
          text-align: right;
          margin-bottom: 20px;

          a {
            display: inline-block;
            padding: 0.26vw 0.52vw;
          }
        }

        ul li {
          font-size: $font-size-primary;
          list-style: none;
          margin-bottom: 35px;

          & a {
            text-decoration: none;
            color: #595656;
          }
        }
      }

      &-right {
        width: 63.75%;
        padding: 25px;
        background-color: #e9e6e6;
        overflow: scroll;
        overflow-x: hidden;

        @include scrollBar;
      }
    }
  }
</style>

<Header>
  <h4 slot="page">faq</h4>
</Header>
<main class="page-container">
  <div class="content">
    <div class="content-left">
      <div class="button-wrapper">
        <Button buttonType="outline"><a href="/">Volver</a></Button>
      </div>
      <ul class="faq-list">
        {#each faq as item, i}
          <li>
            <a href="/faq#{i}">{item.title}</a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="content-right">
      {#each faq as cardContent, i}
        <FaqCard id={i}>
          <div slot="title">{cardContent.title}</div>
          <div slot="content">{@html cardContent.abstract}</div>
        </FaqCard>
      {/each}
    </div>
  </div>
</main>
<Footer />
