<style type="text/scss">
  @import "../stylesGlobal/vars";

  .ellipse-1 {
    position: absolute;
    width: clamp(146px, 20.83vw, 533px);
    height: clamp(146px, 21.875vw, 560px);
    border-radius: 50%;
    left: 84vw;
    top: 6.72vw;
    background: #ffffff;
    mix-blend-mode: multiply;
    box-shadow: -4.58vw 1.97vw 2.5vw 0.31vw rgba(0, 0, 0, 0.25);
    z-index: 0;

    @include respond(tab-port) {
      box-shadow: -4.58vw 1.97vw 2.5vw 0.31vw rgba(0, 0, 0, 0.1);
      top: clamp(20rem, 19vw, 39rem);
    }
  }

  .ellipse-2 {
    position: absolute;
    width: calc(15vw + 28.4rem); // 568px
    height: calc(15.5vw + 29.4rem);
    border-radius: 50%;
    left: 0px;
    top: 346.95px;
    background: radial-gradient(
      80.15% 80.15% at 67.73% 41.1%,
      rgba(180, 189, 191, 0.9) 0%,
      rgba(196, 196, 196, 0) 100%
    );
    mix-blend-mode: multiply;
  }
</style>

<div class="ellipse-1" />
<div class="ellipse-2" />
