<script>
import { onMount } from "svelte";
import secNavBar from "../Component/SecNavBar.svelte";
import Card from "../Component/SharedComponents/Card.svelte";
import Button from "../Component/SharedComponents/button.svelte";
import { colorButtonStore } from "../Stores";
import { servicesData } from "../StaticStore";
import SecNavBar from "../Component/SecNavBar.svelte";
let bodyContent = "asesoria";
let buttonColor = {};

onMount(() => {
  console.log(servicesData.serviceItems);

  servicesData.serviceItems.forEach((elt) => {
    buttonColor[elt] = "blue";
  });

  colorButtonStore.set({ ...buttonColor, asesoria: "white" });
});

const getContent = (e) => {
  bodyContent = e.target.innerText;
  colorButtonStore.set({ ...buttonColor });
  colorButtonStore.update(
    (value) => (value = { ...value, [bodyContent]: "white" })
  );
};
</script>

<style type="text/scss">
.section-wrapper {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.columns-wrapper {
  background-image: url(../images/services-background.svg);
  background-position: top right;
  background-repeat: no-repeat;
  background-size: auto 100%;
  display: flex;
  padding: 96px 0 91px 0;

  .col-1 {
    display: flex;
    flex-direction: column;
    margin-left: 70px;
    width: 358px;

    .abstract {
      display: block;
      margin-bottom: 50px;
    }

    .title {
      font-family: var(--display-typo);
      font-size: 32px;
    }

    .team-image {
      align-self: center;
      justify-self: flex-end;
    }
  }

  .col-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 245px;
    margin-left: 208px;
    height: 601px;

    .button-item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
    }
  }

  .col-3 {
    width: 486px;
    margin: 0 72px 0 66px;
  }
}

.description-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 27px 25px 47px 25px;
  position: relative;
}

.typo-title {
  color: #066d92;
}

.service-body {
  margin-top: 1px;
  margin-bottom: 29px;
  font-size: 14px;
  height: 240px;
  line-height: 175%;
  letter-spacing: 0.08em;
}

.meeting {
  display: block;
  margin: 0 auto;
  height: 220px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 246px;
  align-self: center;
  top: 570px;

  .button-card-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 246px;
    height: 58px;
  }
}

.secnavbar-wrapper {
  width: 118px;
  margin-right: 110px;
  align-self: center;

  .secnavbar-card-content {
    height: 290px;
    width: 190px;
    padding: 30px;
  }
}
</style>

<!-- WHOLE SERVICE SCREEN -->
<div class="section-wrapper">
  <!-- SECUNDARY NAVBAR SECTION -->
  <div class="secnavbar-wrapper">
    <Card>
      <div class="secnavbar-card-content"><SecNavBar/></div>
    </Card>
  </div>
  
  

  <!--  SERVICES SECTION -->
  <Card>
    <div class="columns-wrapper">

      <!--  SERVICE ABSTRACT SUB-SECTION -->
      <div class="col-1">
        <h2 class="title">{servicesData.title}</h2>
        <p class="abstract typo-paragraph">{servicesData.abstract}</p>
        <img
          src="./images/team.png"
          alt="3 workers behind a desk waving at you"
          class="team-image" />
      </div>
      <!--  SERVICE ITEMS SUB-SECTION -->
      <div class="col-2">
        {#each servicesData.serviceItems as serviceItem}
          <Button borderRadius="10px" color={$colorButtonStore[serviceItem]}>
            <div class="button-item" on:click={getContent}>{serviceItem}</div>
          </Button>
        {/each}
      </div>
      <!--  SERVICES DESCRIPTIONS SUB-SECTION -->
      <div class="col-3">
        <Card>
          <div class="description-card-content">
            <h3 class="typo-title">{bodyContent}</h3>
            <p class="service-body typo-paragraph">
              {@html servicesData[bodyContent]}
            </p>
            <img src="./images/meeting.png" alt="" class="meeting" />
            <div class="button-wrapper">
              <Button color="purple">
                <div class="button-card-content">Sigue Leyendo</div>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </Card>
</div>
