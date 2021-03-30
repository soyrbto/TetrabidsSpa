<script>
  import { moveSectionHandler } from "../functions";
  import Header from "../sections/Header.svelte";
  import { faqStore } from "../FaqStore";
  import { nodeFaq } from "../Stores";
  import FaqCard from "../components/FaqCard.svelte";
  import FaqNavbarMob from "../sectionsMobile/FaqNavbarMob.svelte";

  export let params = "";

  let windowsWidth;
  let scrollable;

  function goTo(i) {
    moveSectionHandler.vertical($nodeFaq[i]);
  }
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .page-container {
    position: relative;
    background-color: white;
    font-family: $font-primary;

    .content {
      display: flex;

      @include respond(tab-port) {
        flex-direction: column;
      }

      &-left {
        width: 36.25%;
        height: calc(100vh - #{$height-header});
        padding: 15px 38px;
        overflow: scroll;
        overflow-x: hidden;
        position: sticky;
        top: $height-header;
        z-index: 10;

        @include scrollBar;

        @include respond(tab-port) {
          width: 100%;
        }

        .button-wrapper {
          text-align: right;
          margin-bottom: 20px;

          a {
            display: inline-block;
            padding: 0.26vw 0.52vw;

            img {
              transition: all 200ms ease-in-out;
              width: 1.66vw;

              &:hover {
                filter: invert(35%) sepia(4%) saturate(215%) hue-rotate(338deg)
                  brightness(101%) contrast(90%);
              }
            }
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

        @include respond(tab-port) {
          width: 100%;
          position: relative;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<Header displayOn="true" sticky="true">
  <h4 slot="page">faq</h4>
</Header>
<main class="page-container">
  <div class="content">
    {#if windowsWidth > 768}
      <div class="content-left">
        <div class="button-wrapper">
          <a href="/"><img src="/images/goback-faq.svg" alt="go-back" /></a>
        </div>
        <ul class="faq-list">
          {#each faqStore as item, i}
            <li>
              <a on:click={() => goTo(i)} href="/faq#{i}">{item.title}</a>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
    <div bind:this={scrollable} class="content-right">
      {#if windowsWidth <= 768}
        <FaqNavbarMob />
      {/if}
      {#each faqStore as cardContent, i}
        <FaqCard
          id={`faq#${i}`}
          titleText={cardContent.title}
          contentText={cardContent.abstract}
        />
      {/each}
    </div>
  </div>
</main>
