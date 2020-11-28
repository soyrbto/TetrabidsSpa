<script>
  import Footer from "../sections/Footer.svelte";
  import ArticleCard from "../components/ArticleCard.svelte";
  import ArticleBody from "../components/shared/ArticleBody.svelte";
  import { articleAsesoria } from "../articles.js";
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
      padding: 77px 3% 0 3%;
      background: white;
      // font-family: "Josefin Sans", sans-serif;

      .title-home-wrapper {
        // margin-left: 3%;

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
        margin: 40px 0;
      }

      .wrapper-icons {
        display: flex;
        padding: 0;

        .social-network {
          width: 405px;
          height: 40px;

          ul {
            display: flex;
            justify-content: space-between;
            list-style: none;
            height: 40px;
            margin: 0;

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

      .tldr-title {
        font-size: 24px;
        margin: 128px 0 24px 0;
        color: #c4c4c4;
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
        height: 176px;

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
      display: flex;
      justify-content: center;
      align-items: center;
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
      <h1 class="title-home">{articleAsesoria.title}</h1>
      <p class="author">{articleAsesoria.author}, {articleAsesoria.date}</p>
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
    <p class="tldr" />
  </div>
  <div class="main-article-wrapper">
    <div class="title-articule-wrapper">
      <h2 class="title-articule">{articleAsesoria.title}</h2>
      <p class="reading-time">Tiempo de lectura 5 min</p>
    </div>
    <div class="body-article">
      <ArticleBody>
        <div class="image-articule-wrapper" />
      </ArticleBody>
    </div>
  </div>
  <div class="others-article">
    <ArticleCard />
  </div>
  <Footer />
</main>
