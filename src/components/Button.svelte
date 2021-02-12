<script>
  export let borderRadius = "50px";
  export let color = "orange";
  export let animation = "";
  export let buttonType = "";
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  button {
    font-size: $font-size-primary;
    font-family: $font-primary;
    font-weight: 600;
    color: white;
    border-style: none;
    padding: 0px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
    outline: none;
    cursor: pointer;
  }

  // COLORS BACKGROUND

  .orange {
    background: linear-gradient(180deg, #ffbe0b 0%, #ab2626 100%);
  }

  .purple {
    background: linear-gradient(180deg, #ec35f8 0%, #3c26ab 100%);
  }

  .white {
    background: white;
    color: #066d92;
  }

  .blue {
    background: #11a7dd;
    color: white;
  }

  // OUTLINE BUTTON

  .outline {
    font-weight: 700;
    padding: clamp(10px, 0.78vw, 17px) clamp(25px, 1.56vw, 30px);
    margin-left: 44px;
    border: solid 2px transparent;
    box-shadow: 2px 1000px 1px #fff inset;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(180deg, #ec35f8 0%, #3c26ab 100%);
    background-origin: border-box;

    span {
      background: -webkit-linear-gradient(90deg, #ec35f8 0%, #3c26ab 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>

<button
  style="border-radius:{borderRadius};"
  class={`${color} ${animation} ${buttonType}`}
  ><span> <slot /></span>
</button>
