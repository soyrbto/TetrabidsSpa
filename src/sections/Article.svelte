<script>
  import Footer from "./Footer.svelte";
</script>

<style type="text/scss">
  .page-content {
    background-color: #ccc;
    width: 100%;

    .header {
      display: flex;
      align-items: center;
      height: 151px;
      background: #361081;
      padding: 0 40px;

      .logo {
        color: white;
        font-style: normal;
        font-weight: 600;
        font-size: 70px;
        line-height: 70px;
      }
    }

    .home-wrapper {
      display: flex;
      flex-direction: column;
      height: 869px;
      margin: 0 10%;
      padding-top: 77px;
      background: white;

      .title-home-wrapper {
        margin-left: 3%;

        .title-home {
          font-size: 48px;
          line-height: 48px;
          font-style: normal;
          font-weight: bold;
        }

        .author {
          font-size: 18px;
          line-height: 18px;
          margin-top: 18px;
        }
      }

      .image-wrapper {
        background-image: url("/images/home-image.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        height: 400px;
        margin: 40px 3%;
      }

      .wrapper-icons {
        display: flex;
        padding: 0 3%;

        .social-network {
          width: 405px;
          height: 40px;

          ul {
            display: flex;
            justify-content: space-between;
            list-style: none;

            & > li > img {
              height: 40px;
              cursor: pointer;
            }

            & > li > img:hover {
              fill: green;
            }
          }
        }

        .share {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 190px;
          height: 40px;
          margin-left: 120px;

          & > img {
            height: 40px;
          }

          & > img:hover {
            cursor: pointer;
          }

          .share-text {
            font-size: 18px;
            color: #bcbcbc;
          }
        }
      }
    }

    .tldr-wrapper {
      display: flex;
      align-items: center;
      margin: 0 10%;
      background-color: #0082ba;

      .tldr {
        font-size: 24px;
        font-weight: 400;
        line-height: 57px;
        padding: 0 3%;
        color: white;
      }
    }

    .main-article-wrapper {
      height: auto;
      margin: 0 10%;
      background: white;
      // padding-top: 118px;

      padding: 118px 3% 61px 3%;

      .title-articule-wrapper {
        height: 294px;

        .title-articule {
          font-size: 48px;
          line-height: 48px;
          font-style: normal;
          font-weight: bold;
        }

        .reading-time {
          font-size: 18px;
          line-height: 18px;
          margin-top: 18px;
        }
      }

      .body-article {
        // padding-bottom: 61px;

        font-size: 24px;
        font-weight: 400;
        line-height: 57px;
        color: black;

        .image-articule-wrapper {
          height: 478px;
          width: 70%;
          margin: 30px 15% 70px 15%;
          background-image: url("/images/home-image.svg");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }

    .others-article {
      height: 534px;
      background-color: #361081;
    }
  }
</style>

<main class="page-content">
  <div class="header">
    <div class="logo">Tetrabids</div>
  </div>
  <div class="home-wrapper">
    <div class="title-home-wrapper">
      <h1 class="title-home">Nombre del articulo</h1>
      <p class="author">Roberto Traspalacio, 25 de Noviembre del 2020</p>
    </div>
    <div class="image-wrapper" />
    <div class="wrapper-icons">
      <div class="social-network">
        <ul>
          <li><img src="/images/instagram-icon.svg" alt="instagram-icon" /></li>
          <li><img src="/images/telegram-icon.svg" alt="telegram-icon" /></li>
          <li><img src="/images/facebook-icon.svg" alt="facebook-icon" /></li>
          <li><img src="/images/whatsapp-icon.svg" alt="whatsapp-icon" /></li>
          <li><img src="/images/correo-icon.svg" alt="correo-icon" /></li>
        </ul>
      </div>
      <div class="share">
        <img src="/images/share-icon.svg" alt="share-icon" />
        <p class="share-text">20 compartidos</p>
      </div>
    </div>
  </div>
  <div class="tldr-wrapper">
    <p class="tldr">
      Tl;dr consectetur adipiscing elit. Auctor vestibulum proin tempor eget
      amet volutpat tortor nunc. In tortor, ornare lobortis sit feugiat
      volutpat. Risus ut libero pellentesque praesent sociis in lorem sapien
      sit. Gravida cras enim dui ullamcorper pharetra, varius. Ridiculus
      aliquam, enim, amet, pretium felis et. Porttitor egestas nec bibendum amet
      mattis integer. Lectus turpis aliquet lectus ipsum lectus. Auctor lobortis
      ac nisl porttitor faucibus blandit nunc nisl enim. Eget odio quam fusce
      sit malesuada tempus fringilla.
    </p>
  </div>
  <div class="main-article-wrapper">
    <div class="title-articule-wrapper">
      <h2 class="title-articule">Nombre del articulo</h2>
      <p class="reading-time">Tiempo de lectura 5 min</p>
    </div>
    <div class="body-article">
      <p class="first-part">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
        vestibulum proin tempor eget amet volutpat tortor nunc. In tortor,
        ornare lobortis sit feugiat volutpat. Risus ut libero pellentesque
        praesent sociis in lorem sapien sit. Gravida cras enim dui ullamcorper
        pharetra, varius. Ridiculus aliquam, enim, amet, pretium felis et.
        Porttitor egestas nec bibendum amet mattis integer. Lectus turpis
        aliquet lectus ipsum lectus. Auctor lobortis ac nisl porttitor faucibus
        blandit nunc nisl enim. Eget odio quam fusce sit malesuada tempus
        fringilla. Ipsum quam massa praesent mattis egestas. Elit, ultrices
        enim, ligula et massa vestibulum. Consequat vitae sed quis sit donec mi.
        Eget orci, mauris nam sed luctus. Nibh consequat in convallis amet,
        scelerisque consequat est mi. Sit volutpat tincidunt aliquet nullam
        pulvinar. Fusce vitae consequat urna dapibus dui egestas. Urna donec
        amet volutpat elit pharetra tincidunt eu tortor.
      </p>
      <div class="image-articule-wrapper" />
      <p class="second-part">
        At aenean eleifend enim lorem elementum. Ut a quam sed facilisi cursus
        facilisis odio. Ultricies volutpat faucibus mauris quisque faucibus
        varius maecenas. Integer vestibulum malesuada et aliquam ultrices at
        tellus mauris mattis. Nunc id quis facilisi sit odio vel. Mattis augue
        quis vel nisi massa. Dignissim fames diam id eu. Aliquam, convallis
        interdum egestas nisi in. Nibh dolor, turpis nunc arcu non dignissim
        quam. Nibh adipiscing cursus lectus commodo. Sed facilisis orci,
        fermentum aliquet. Purus sed nunc a facilisi quam amet.
      </p>
    </div>
  </div>
  <div class="others-article" />
  <Footer />
</main>
