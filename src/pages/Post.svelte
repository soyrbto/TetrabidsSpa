<script>
  import { onMount } from "svelte";
  import Share from "../components/ShareSocialNetwork.svelte";
  import Header from "../sections/Header.svelte";
  import RelatedPosts from "../sections/RelatedPosts.svelte";
  import Footer from "../sections/Footer.svelte";
  import { posts } from "../PostStore";

  export let params;
  let postId = params.id;

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .page-container {
    font-family: $font-primary;
    position: relative;
    background-color: white;
    padding: clamp(20px, 2.6vw, 67px) 4.16vw;

    .cover-page {
      display: flex;
      margin: 0 0 3.64vw;

      @include respond(tab-port) {
        flex-direction: column;
      }

      &-left {
        display: flex;
        flex-direction: column;
        border-right: 2px solid #666666;
        padding: 0 4.16vw 0 0;

        @include respond(tab-port) {
          border: none;
        }
        .title {
          font-size: $font-size-titleSec-desk;
        }

        .author {
          font-size: $font-size-body;
          color: #c4c4c4;
        }

        .image-cover {
          width: clamp(350px, 27.33vw, 853px); // 525px
          height: clamp(300px, 17.35vw, 445px); // 333px
          background-color: #c4c4c4;
          border-radius: 10px;
          margin: 20px 0;

          @include respond(tab-port) {
            width: 50vw;
            margin: 20px auto;
          }

          @include respond(phone) {
            width: 100%;
          }
        }
      }

      &-right {
        padding: 0 0 0 4.16vw;

        @include respond(tab-port) {
          padding: 4.16vw;
          margin-top: 2.5vw;
          background-color: antiquewhite;
        }

        .title-tldr {
          color: #c4c4c4;
          font-size: $font-size-body;
          font-style: italic;
          margin-bottom: 7px;
        }

        .tldr {
          font-size: clamp(16px, 0.93vw, 25px);
          line-height: 150%;
        }
      }
    }

    .article {
      width: 75vw;
      margin: 0 auto 3.64vw; // 70px

      @include respond(phone) {
        width: 90vw;
      }

      &-title {
        font-size: $font-size-titleSec-desk;
      }

      &-reading-time {
        font-size: $font-size-body;
        color: #c4c4c4;
        margin-bottom: clamp(15px, 1.3vw, 33px);
      }

      &-body {
        font-size: clamp(16px, 0.93vw, 25px);
        text-align: justify;
        line-height: 150%;
      }
    }
  }
</style>

<Header>
  <h4 slot="page">post</h4>
</Header>
<div class="page-container">
  <div class="cover-page">
    <div class="cover-page-left">
      <div class="title">{posts[postId].title}</div>
      <div class="author">{posts[postId].author}, {posts[postId].date}</div>
      <img src={posts[postId].image} alt="cover" class="image-cover" />
      <Share />
    </div>
    <div class="cover-page-right">
      <div class="title-tldr">Tl;dr = Muy largo, no lo leeré</div>
      <div class="tldr">{@html posts[postId].tldr}</div>
    </div>
  </div>
  <div class="article">
    <div class="article-title">{posts[postId].title}</div>
    <div class="article-reading-time">Tiempo de lectura 5 min</div>
    <div class="article-body">{@html posts[postId].body}</div>
  </div>
  <RelatedPosts />
</div>
<Footer />
