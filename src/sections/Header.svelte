<style type="text/scss">
  @import "../stylesGlobal/vars";

  .header {
    @include flex-center;
    font-family: $font-primary;
    font-weight: 700;
    color: white;
    background-color: $color-header;
    height: clamp(80px, 6.25vw, 160px); // 120px

    & .name {
      font-size: clamp(40px, 3.65vw, 90px);
      height: clamp(55px, 4.6875vw, 100px); // 90px
      margin-right: clamp(23px, 1.82vw, 46px); // 35px

      a {
        color: white;
        text-decoration: none;
      }
    }

    & .ellipse {
      @include flex-center;
      font-size: clamp(20px, 1.82vw, 45px); // 35px
      width: clamp(55px, 4.6875vw, 120px); // 90px
      height: clamp(55px, 4.6875vw, 120px); // 90px
      border-radius: 50%;
      box-shadow: -20px 19px 58px 7px rgba(0, 0, 0, 0.25);
    }
  }
</style>

<header class="header">
  <div class="name"><a href="/">Tetrabids</a></div>
  <div class="ellipse">Post</div>
</header>
