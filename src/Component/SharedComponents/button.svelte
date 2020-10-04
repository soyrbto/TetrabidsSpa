<script>
  export let borderRadius = '50px';
  export let color = 'orange';
</script>

<style>
  button {
    width: 100%;
    height: 60px;
    border-radius: 50px;

    border-style: none;
    color: white;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 25px;
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
  }

  .blue {
    background: #11a7dd;
  }

  button:hover {
    box-shadow: 4px 2px 10px rgba(255, 255, 255, 0.25);
    transform: translateY(-0.15em);
  }

  button:active {
    transform: translateY(-0.5px);
  }
</style>

<button style="border-radius:{borderRadius};" class={color}>
  <slot />
</button>
