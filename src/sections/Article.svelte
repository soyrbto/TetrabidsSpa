<script>
  import Footer from "../sections/Footer.svelte";
  import ArticleCard from "../components/ArticuleCard.svelte";
</script>

<style type="text/scss">
  .page-content {
    background-color: #e5e5e5;
    width: 100%;
    font-family: "Josefin Sans", sans-serif;
    position: relative;

    .header {
      display: flex;
      align-items: center;
      height: clamp(120px, 7.81vw, 151px);
      background: #361081;
      padding: 0 40px;

      .logo {
        color: white;
        font-style: normal;
        font-weight: 600;
        font-size: clamp(50px, 2.6vw, 70px);
        line-height: 70px;
      }
    }

    .home-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      height: clamp(780px, 45vw, 869px);
      margin: 0 10%;
      padding: 77px 3% 0 3%;
      background: white;
      // font-family: "Josefin Sans", sans-serif;

      .title-home-wrapper {
        // margin-left: 3%;

        .title-home {
          font-size: clamp(30px, 2.5vw, 48px);
          line-height: clamp(30px, 2.5vw, 48px);
          font-style: normal;
          font-weight: bold;
        }

        .author {
          font-size: clamp(12px, 0.9375vw, 18px);
          line-height: clamp(12px, 0.9375vw, 18px);
          margin-top: 18px;
          color: #c4c4c4;
        }
      }

      .image-wrapper {
        background-image: url("/images/home-image.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        height: 400px;
        margin: 40px 0;
      }

      .wrapper-icons {
        display: flex;
        padding: 0;

        .social-network {
          width: clamp(290px, 21vw, 405px);
          height: clamp(30px, 2.08vw, 40px);
          margin-left: 5%;

          ul {
            display: flex;
            justify-content: space-between;
            list-style: none;
            height: clamp(30px, 2.08vw, 40px);
            margin: 0;

            & > li > img {
              height: clamp(30px, 2.08vw, 40px);
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
          width: clamp(140px, 9.9vw, 190px);
          height: clamp(30px, 2.08vw, 40px);
          margin-left: clamp(70px, 6.25vw, 120px);

          & > img {
            height: clamp(30px, 2.08vw, 40px);
          }

          & > img:hover {
            cursor: pointer;
          }

          .share-text {
            font-size: clamp(12px, 0.9375vw, 18px);
            color: #bcbcbc;
          }
        }
      }

      .tldr-title {
        position: absolute;
        bottom: 2%;
        font-size: clamp(18px, 1.25vw, 24px);
        // margin: 128px 0 clamp(15px, 1.25vw, 24px) 0;
        color: #c4c4c4;
      }
    }

    .tldr-wrapper {
      display: flex;
      align-items: center;
      margin: 0 10%;
      background-color: #0082ba;

      .tldr {
        font-size: clamp(18px, 1.25vw, 24px);
        font-weight: 400;
        line-height: clamp(50px, 2.5vw, 57px);
        text-align: justify;
        padding: 0 3%;
        color: white;
      }
    }

    .main-article-wrapper {
      height: auto;
      margin: 0 10%;
      background: white;
      padding: 118px 3% 61px 3%;
      text-align: justify;

      .title-articule-wrapper {
        height: clamp(120px, 9.16vw, 176px);

        .title-articule {
          font-size: clamp(30px, 2.5vw, 48px);
          line-height: clamp(30px, 2.5vw, 48px);
          font-style: normal;
          font-weight: bold;
        }

        .reading-time {
          font-size: clamp(12px, 0.9375vw, 18px);
          line-height: clamp(12px, 0.9375vw, 18px);
          margin-top: 18px;
          color: #c4c4c4;
        }
      }

      .body-article {
        font-size: clamp(18px, 1.25vw, 24px);
        font-weight: 400;
        line-height: clamp(50px, 2.96vw, 57px);
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
      display: flex;
      justify-content: center;
      align-items: center;
      height: 534px;
      background-color: #361081;
    }
  }

  @media screen and (max-width: 1280px) {
    .home-wrapper {
      margin: 0 !important;
      padding: 77px 5% 0 5% !important;
    }

    .tldr-wrapper {
      margin: 0 !important;

      .tldr {
        padding: 0 5% !important;
        font-size: clamp(14px, 2.34vw, 18px) !important;
        line-height: clamp(33px, 6.51vw, 45px) !important;
      }
    }

    .main-article-wrapper {
      margin: 0 !important;
      padding: 118px 5% 61px 5% !important;

      .body-article {
        font-size: clamp(14px, 2.34vw, 18px) !important;
        line-height: clamp(33px, 6.51vw, 45px) !important;
      }
    }

    .wrapper-icons {
      flex-direction: column-reverse;
      align-items: center;

      .share {
        margin-bottom: 20px;
        width: 125px !important;

        img {
          height: 22px !important;
        }
      }
    }
    .social-network,
    .share {
      margin-left: 0px !important;
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
    <div class="tldr-title">Tl;dr = Muy largo, no lo leere</div>
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
  <div class="others-article">
    <ArticuleCard />
  </div>
  <Footer />
</main>
