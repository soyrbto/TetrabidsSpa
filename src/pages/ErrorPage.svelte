<style type="text/scss">
  .wrapper {
    background-image: url("/images/error-404.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    position: relative;

    img {
      position: absolute;
      top: 5%;
      left: 5%;
      width: clamp(38px, 3vw, 70px);
    }
  }
</style>

<div class="wrapper">
  <a href="/"><img src="/images/goback-404.svg" alt="go-back" /></a>
</div>
