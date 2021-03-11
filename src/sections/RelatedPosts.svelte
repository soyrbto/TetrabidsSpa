<script>
  import PostCard from "../components/postCard.svelte";
  import { posts } from "../PostStore";
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .others-post {
    &-title {
      font-family: Roboto;
      font-size: $font-size-titleSec-desk;
      margin-bottom: 1.5625vw; // 30px
    }

    &-wrapper {
      display: flex;
      justify-content: space-between;

      .title {
        font-size: $font-size-primary;
        line-height: 1.1;
      }

      @include respond(phone) {
        flex-direction: column;
      }
    }
  }
</style>

<div class="others-post">
  <div class="others-post-title">Otros articulos que pueden interesarte</div>
  <div class="others-post-wrapper">
    <PostCard postLink={posts[7].link} postImage={posts[7].image}>
      <h2 class="title" slot="title">{posts[7].title}</h2>
      <p slot="author">{posts[7].author}</p>
      <p slot="date">{posts[7].date}</p>
    </PostCard>
    <PostCard postLink={posts[5].link} postImage={posts[5].image}>
      <h2 class="title" slot="title">{posts[5].title}</h2>
      <p slot="author">{posts[5].author}</p>
      <p slot="date">{posts[5].date}</p>
    </PostCard>
    <PostCard postLink={posts[0].link} postImage={posts[0].image}>
      <h2 class="title" slot="title">{posts[0].title}</h2>
      <p slot="author">{posts[0].author}</p>
      <p slot="date">{posts[0].date}</p>
    </PostCard>
  </div>
</div>
