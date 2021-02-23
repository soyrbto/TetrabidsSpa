<script>
  import ArticleCard from "../components/ArticleCard.svelte";
  import Footer from "../Sections/Footer.svelte";
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";
  .wrapper-content {
    font-family: $font-primary;
    position: relative;
    background-color: white;

    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: clamp(40px, 3.65vw, 90px);
      font-weight: 700;
      color: white;
      background-color: #0082ba;
      height: clamp(80px, 6.25vw, 160px); // 120px

      & .name {
        height: clamp(55px, 4.6875vw, 100px); // 90px
        margin-right: clamp(23px, 1.82vw, 46px); // 35px
      }

      & .ellipse {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(20px, 1.82vw, 45px); // 35px
        width: clamp(55px, 4.6875vw, 120px); // 90px
        height: clamp(55px, 4.6875vw, 120px); // 90px
        border-radius: 50%;
        box-shadow: -20px 19px 58px 7px rgba(0, 0, 0, 0.25);
      }
    }

    .cover-page {
      display: flex;
      margin: clamp(20px, 2.6vw, 67px) 0 3.64vw;

      @include respond(tab-port) {
        flex-direction: column;
      }

      &-left {
        display: flex;
        flex-direction: column;
        border-right: 2px solid #666666;
        padding: 0 4.16vw;

        .title {
          font-size: $font-size-titleSec-desk;
        }

        .author {
          font-size: $font-size-body;
          color: #c4c4c4;
        }

        .image-cover {
          width: clamp(227px, 27.33vw, 853px); // 525px
          height: clamp(300px, 17.35vw, 445px); // 333px
          background-color: #c4c4c4;
          border-radius: 10px;
          margin: 20px 0;

          @include respond(tab-port) {
            width: 50vw;
            margin: 20px auto;
          }

          @include respond(phone) {
            width: 100%;
          }
        }

        .wrapper-icons {
          display: flex;
          justify-content: space-between;
          padding: 0;

          @include respond(tab-port) {
            width: 50vw;
            margin: auto;
          }

          @include respond(phone) {
            width: 100%;
            margin: 0;
          }

          .social-network {
            width: clamp(160px, 14.32vw, 365px); //275px

            ul {
              display: flex;
              justify-content: space-between;
              list-style: none;

              & > li > img {
                height: clamp(25px, 1.82vw, 47px); // 35px
                cursor: pointer;
              }
            }
          }

          .share {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: clamp(120px, 9.68vw, 190px); //186px
            & > img {
              height: clamp(25px, 1.82vw, 47px); // 35px
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
      }

      &-right {
        padding: 0 4.16vw;

        @include respond(tab-port) {
          padding: 4.16vw;
          margin-top: 2.5vw;
          background-color: antiquewhite;
        }

        .title-tldr {
          color: #c4c4c4;
          font-size: $font-size-body;
          font-style: italic;
          margin-bottom: 7px;
        }

        .tldr {
          font-size: clamp(16px, 0.93vw, 25px);
          line-height: 150%;
        }
      }
    }

    .article {
      width: 75vw;
      margin: 0 auto 3.64vw; // 70px

      @include respond(phone) {
        width: 90vw;
      }

      &-title {
        font-size: $font-size-titleSec-desk;
      }

      &-reading-time {
        font-size: $font-size-body;
        color: #c4c4c4;
        margin-bottom: clamp(15px, 1.3vw, 33px);
      }

      &-body {
        font-size: clamp(16px, 0.93vw, 25px);
        text-align: justify;
        line-height: 150%;
      }
    }

    .others-articles {
      width: 91.66vw;
      height: 19.11vw;
      margin: auto;

      @include respond(tab-port) {
        height: auto;
        margin-bottom: 20px;
      }

      &-title {
        font-family: Roboto;
        font-size: $font-size-titleSec-desk;
        margin-bottom: 1.5625vw; // 30px
      }

      &-wrapper {
        display: flex;
        justify-content: space-between;

        @include respond(phone) {
          flex-direction: column;
        }
      }
    }
  }
</style>

<div class="wrapper-content">
  <div class="header">
    <div class="name">Tetrabids</div>
    <div class="ellipse">Post</div>
  </div>

  <div class="cover-page">
    <div class="cover-page-left">
      <div class="title">Nombre del articulo</div>
      <div class="author">Roberto Traspalacio, 22 de Febrero del 2021</div>
      <img src="/images/service-3.svg" alt="cover" class="image-cover" />
      <div class="wrapper-icons">
        <div class="social-network">
          <ul>
            <li>
              <img src="/images/instagram-icon.svg" alt="instagram-icon" />
            </li>
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
    <div class="cover-page-right">
      <div class="title-tldr">Tl;dr = Muy largo, no lo leeré</div>
      <div class="tldr">
        <p>
          Consectetur adipiscing elit. Auctor vestibulum proin tempor eget amet
          volutpat tortor nunc. In tortor, ornare lobortis sit feugiat volutpat.
          Risus ut libero pellentesque praesent sociis in lorem sapien sit.
          Gravida cras enim dui ullamcorper pharetra, varius. Ridiculus aliquam,
          enim, amet, pretium felis et. Porttitor egestas nec bibendum amet
          mattis integer. Lectus turpis aliquet lectus ipsum lectus. Auctor
          lobortis ac nisl porttitor faucibus blandit nunc nisl enim. Eget odio
          quam fusce sit malesuada tempus fringilla.
        </p>
        <br />
        <p>
          Consectetur adipiscing elit. Auctor vestibulum proin tempor eget amet
          volutpat tortor nunc. In tortor, ornare lobortis sit feugiat volutpat.
          Risus ut libero pellentesque praesent sociis in lorem sapien sit.
          Gravida cras enim dui ullamcorper pharetra, varius. Ridiculus aliquam,
          enim, amet, pretium felis et. Porttitor egestas nec bibendum amet
          mattis integer. Lectus turpis aliquet lectus ipsum lectus. Auctor
          lobortis ac nisl porttitor faucibus blandit nunc nisl enim. Eget odio
          quam fusce sit malesuada tempus fringilla.
        </p>
      </div>
    </div>
  </div>

  <div class="article">
    <div class="article-title">Nombre del articulo</div>
    <div class="article-reading-time">Tiempo de lectura 5 min</div>
    <div class="article-body">
      <p>
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
        scelerisque consequat est mi.
      </p>
      <br />
      <p>
        Sit volutpat tincidunt aliquet nullam pulvinar. Fusce vitae consequat
        urna dapibus dui egestas. Urna donec amet volutpat elit pharetra
        tincidunt eu tortor. At aenean eleifend enim lorem elementum. Ut a quam
        sed facilisi cursus facilisis odio. Ultricies volutpat faucibus mauris
        quisque faucibus varius maecenas. Integer vestibulum malesuada et
        aliquam ultrices at tellus mauris mattis. Nunc id quis facilisi sit odio
        vel. Mattis augue quis vel nisi massa. Dignissim fames diam id eu.
        Aliquam, convallis interdum egestas nisi in. Nibh dolor, turpis nunc
        arcu non dignissim quam. Nibh adipiscing cursus lectus commodo. Sed
        facilisis orci, fermentum aliquet. Purus sed nunc a facilisi quam amet.
      </p>
      <br />
      <p>
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
    </div>
  </div>

  <div class="others-articles">
    <div class="others-articles-title">
      Otros articulos que pueden interesarte
    </div>
    <div class="others-articles-wrapper">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  </div>
  <Footer />
</div>
