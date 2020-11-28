<script>
  import Card from "../components/shared/Card.svelte";
</script>

<style type="text/scss">
  .wrapper-section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 468px;
    width: 458px;
    padding: 5% 7%;

    img {
      background: #c4c4c4;
      height: 170px;
      width: 100%;
    }

    .summary {
      font-size: 16px;
      line-height: 37px;
      height: 200px;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    .wrapper-section {
      width: 300px;
    }
  }
</style>

<Card>
  <div class="wrapper-section">
    <img
      src="/images/home-image.svg"
      alt="image_articule"
      class="others-articule-image"
    />
    <div class="summary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl egestas
      dignissim cursus nunc at neque porttitor. Nibh egestas interdum mi
      consectetur non. Diam consequat feugiat augue.
    </div>
  </div>
</Card>
