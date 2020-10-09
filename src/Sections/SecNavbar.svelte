<script>
  let items = ['Servicios', 'Productos', 'Contacto'];
</script>

<style>
  .item {
    font-size: 25px;
    font-family: 'Josefin Sans', sans-serif;
    color: #11a7dd;
    font-weight: 700;
    margin-bottom: 10px;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
  }
  .item:hover {
    cursor: pointer;
    letter-spacing: 0.15em;
  }

  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
  }
</style>

<img src="./images/home-button.svg" alt="blue home button" />
{#each items as item}
  <div class="item">{item}</div>
{/each}
