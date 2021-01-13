<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import Footer from "../sections/Footer.svelte";
  import ArticleCard from "../components/ArticleCard.svelte";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/swiper.scss";

  // export let params;

  let windowsWidth;

  $: slidesPerView = windowsWidth <= 414 ? 1 : windowsWidth >= 768 ? 3 : 2;

  let titleArticle;
  let authorArticle;
  let dateArticle;
  let imageArticle;
  let tldrArticle;
  let bodyArticle;
  let rawDate;
  let error;

  let wordsPerMinute;
  let readingTime;

  // CONNECTION WITH STRAPI

  let idArticle = 0;

  onMount(async () => {
    try {
      const res = await axios.get(
        "https://tetrabids-cms.herokuapp.com/articles"
      );
      titleArticle = res.data[idArticle].title;
      authorArticle = res.data[idArticle].author;
      rawDate = new Date(res.data[idArticle].published_at);
      dateArticle = rawDate.toLocaleDateString();
      imageArticle = res.data[idArticle].presentationImage[idArticle].url;
      tldrArticle = res.data[idArticle].tldr;
      bodyArticle = res.data[idArticle].body;
      console.log(res);

      res.data.forEach((element) => {
        console.log(element.id);
      });

      // READING TIME

      wordsPerMinute = 200;
      readingTime = Math.round(countWords(bodyArticle) / wordsPerMinute);

      function countWords(textToCount) {
        return textToCount.split(" ").length;
      }
    } catch (e) {
      error = e;
    }
  });

  // convert MARKDOWN to html
  let md;

  const initializeRemarkable = () => {
    md = new window.remarkable.Remarkable();
  };
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

        .logo-title {
          text-decoration: none;
          color: white;
        }
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
          line-height: clamp(35px, 2.5vw, 48px);
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
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;

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
        line-height: clamp(40px, 2.5vw, 57px);
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

      .title-articule-wrapper {
        margin-bottom: 60px;

        .title-articule {
          font-size: clamp(30px, 2.5vw, 48px);
          line-height: clamp(35px, 2.5vw, 48px);
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
        text-align: justify;

        .image-articule-wrapper {
          height: 600px;
          width: 70%;
          margin: 30px 15% 70px 15%;
          // background-image: url("/images/home-image.svg");
          // background-size: cover;
          // background-repeat: no-repeat;
          // background-position: center;
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
      height: 850px !important;
      margin: 0 !important;
      padding: 77px 5% 0 5% !important;

      .tldr-title {
        font-size: clamp(14px, 2.34vw, 18px) !important;
      }
    }

    .tldr-wrapper {
      margin: 0 !important;

      .tldr {
        padding: 0 5% !important;
        font-size: clamp(14px, 2.34vw, 18px) !important;
        line-height: clamp(33px, 6.51vw, 40px) !important;
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

<svelte:head>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/2.0.0/remarkable.min.js"
    on:load={initializeRemarkable}>
  </script>
</svelte:head>
<svelte:window bind:innerWidth={windowsWidth} />
<main class="page-content">
  <div class="header">
    <div class="logo"><a class="logo-title" href="/">Tetrabids</a></div>
  </div>
  <div class="home-wrapper">
    <div class="title-home-wrapper">
      <h1 class="title-home">{titleArticle}</h1>
      <p class="author">{authorArticle}, Publicado {dateArticle}</p>
    </div>
    <div
      class="image-wrapper"
      style="background-image: url('{imageArticle}');"
    />
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
    <p class="tldr">{tldrArticle}</p>
  </div>
  <div class="main-article-wrapper">
    <div class="title-articule-wrapper">
      <h2 class="title-articule">{titleArticle}</h2>
      <p class="reading-time">Tiempo de lectura {readingTime} min</p>
    </div>
    <div class="body-article">
      {#if md}
        {@html md.render(bodyArticle)}
      {/if}
    </div>
  </div>
  <div class="others-article">
    <Swiper spaceBetween={50} slidesPerView={slidesPerView}>
      <SwiperSlide>
        <ArticleCard />
      </SwiperSlide>
      <SwiperSlide>
        <ArticleCard />
      </SwiperSlide>
      <SwiperSlide>
        <ArticleCard />
      </SwiperSlide>
      <SwiperSlide>
        <ArticleCard />
      </SwiperSlide>
      <SwiperSlide>
        <ArticleCard />
      </SwiperSlide>
      <SwiperSlide>
        <ArticleCard />
      </SwiperSlide>
    </Swiper>
  </div>
  <Footer />
</main>
