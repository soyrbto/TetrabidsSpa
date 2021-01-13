<script>
  export let imageUrl;
</script>

<style type="text/scss">
  .post-wrapper {
    display: inline-block;
    background: white;
    width: clamp(315px, 29.63vw, 569px);
    margin-bottom: 80px;

    .date {
      display: flex;
      font-size: clamp(15px, 1.04vw, 20px);
      line-height: 20px;
      font-weight: 700;
      color: #a5a1a1;

      .time-icon {
        width: 20px;
        margin: 0 15px 0 20px;
        background-image: url("/images/time-icon.svg");
        background-position: center;
      }
    }

    .image-post {
      width: 100%;
      height: clamp(300px, 17.96vw, 345px);
      margin: 13px 0 clamp(34px, 2.6vw, 50px) 0;
      border-radius: 20px;
      background: #a1a1a5;
    }

    .title-post {
      text-align: center;
      font-size: clamp(34px, 2.5vw, 48px);
      font-weight: 700;
    }
  }
</style>

<div class="post-wrapper">
  <div class="date">
    <div class="time-icon" />
    <slot name="date-published" />
  </div>

  <div
    class="image-post"
    style="background-image:url('{imageUrl}'); background-size: cover; background-position: center;"
  >
    <slot />
  </div>

  <div class="title-post">
    <slot name="title" />
  </div>
</div>
