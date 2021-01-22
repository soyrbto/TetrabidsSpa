<script>
  export let borderRadius = "50px";
  export let color = "orange";
  export let animation = "";
  export let buttonType = "";
</script>

<style type="text/scss">
  button {
    border-radius: 50px;
    padding: 0px;
    border-style: none;
    color: white;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    /*  META font-size 25px */
    outline: none;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
  }

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

  .outline {
    font-size: clamp(15px, 1.3vw, 29px);
    width: clamp(130px, 8.59vw, 170px);
    margin-left: 44px;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    border-radius: 50px;
    border: solid 2px transparent;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(180deg, #ec35f8 0%, #3c26ab 100%);
    background-origin: border-box;
    box-shadow: 2px 1000px 1px #fff inset;
    cursor: pointer;
    outline: none;

    &:hover {
      transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
      transform: translateY(-0.15em);
    }

    &:active {
      transform: translateY(-0.5px);
    }

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
  class={`${color} ${animation} ${buttonType}`}><span> <slot /></span>
</button>
