<script>
  import Card from '../Component/SharedComponents/Card.svelte';
  import { servicesData } from '../StaticStore';
  import Button from '../Component/SharedComponents/button.svelte';
  let bodyContent = 'asesoria';
  let serviceBinded;

  const getContent = () => {
    console.log('hey');
    console.log(serviceBinded);
  };
</script>

<style>
  .section-wrapper {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }

  .column-wrapper {
    background-image: url(../images/services-background.svg);
    background-position: top right;
    background-repeat: no-repeat;
    background-size: auto 100%;
    display: flex;
  }
  p {
    font-weight: 400;
    margin-top: 28px;
    display: block;
    font-family: montserrat;
    font-size: 16px;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
    margin-left: 70px;
    width: 358px;
    /* background-color: red; */
  }

  .col-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 245px;
    margin-left: 208px;
    padding: 163.5px 0 163.5px 0;
  }

  .col-3 {
    width: 486px;
    margin: 96px 72px 0 66px;
  }

  .title {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 32px;
    margin-top: 96px;
  }

  .team-image {
    align-self: center;
    margin: 74px 0 110px 0;
  }

  .description-wrapper {
    padding: 27px 25px 47px 25px;
  }

  h3 {
    color: #066d92;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 25px;
    font-weight: 600;
  }
  .service-body {
    margin-bottom: 29px;
    font-size: 14px;
  }

  .meeting {
    display: block;
    margin: 0 auto;
  }
</style>

<div class="section-wrapper">
  <div class="sec-navbar" />
  <Card>
    <div class="column-wrapper">
      <div class="col-1">
        <h2 class="title">{servicesData.title}</h2>
        <p class="abstract">{servicesData.abstract}</p>
        <img
          src="./images/team.png"
          alt="3 workers behind a desk waving at you"
          class="team-image" />
      </div>

      <div class="col-2">
        {#each servicesData.serviceItems as serviceItem}
          <Button borderRadius="10px" color="blue">
            <div class="test" on:click={getContent} bind:this={serviceBinded}>
              {serviceItem}
            </div>
          </Button>
        {/each}
      </div>
      <div class="col-3">
        <Card>
          <div class="description-wrapper">
            <h3>Asesoria</h3>
            <p class="service-body">
              {@html servicesData[bodyContent]}
            </p>
            <img src="./images/meeting.png" alt="" class="meeting" />
          </div>
        </Card>
      </div>
    </div>
  </Card>
</div>
