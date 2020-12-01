<script>
  import Footer from "../sections/Footer.svelte";
  import BlogCard from "../components/blogCard.svelte";
  import Button from "../components/shared/Button.svelte";
</script>

<style type="text/scss">
  .page-content {
    position: relative;
    width: 100%;
    font-family: "Josefin Sans", sans-serif;

    .header {
      display: flex;
      align-items: center;
      height: clamp(120px, 7.81vw, 151px);
      border-radius: 0 0 0 80px;
      background: #ffbe0b;

      .logo {
        padding: 0 40px;
        color: white;
        font-size: clamp(50px, 2.6vw, 70px);
        font-weight: 700;
      }
    }

    .section-start {
      display: flex;
      padding: 4% 10% 0 10%;

      .left-column {
        display: flex;
        flex-direction: column;
        width: 55%;
        padding-right: 132px;

        .title {
          font-size: clamp(30px, 2.5vw, 48px);
          line-height: clamp(30px, 2.5vw, 48px);
          font-weight: 700;
          margin-top: 86px;
        }

        .description {
          font-size: clamp(18px, 1.56vw, 30px);
          line-height: 50px;
          margin: 29px 0 104px 0;
        }

        .wrapper-buttons {
          display: flex;
          justify-content: space-between;
          width: 50%;

          .fill,
          .outline {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: clamp(15px, 1.3vw, 29px);
            height: 55px;
            width: 165px;
          }

          .outline {
            font-family: "Josefin Sans", sans-serif;
            font-weight: 700;
            border-radius: 50px;
            border: solid 2px transparent;
            background-image: linear-gradient(
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0)
              ),
              linear-gradient(180deg, #ec35f8 0%, #3c26ab 100%);
            background-origin: border-box;
            background-clip: content-box, border-box;
            box-shadow: 2px 1000px 1px #fff inset;
            cursor: pointer;
            outline: none;

            &:hover {
              transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.65s;
              transform: translateY(-0.15em);
            }

            span {
              background: -webkit-linear-gradient(
                90deg,
                #ec35f8 0%,
                #3c26ab 100%
              );
              //   -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }

      .right-column {
        height: 718px;
        width: 45%;
        background: grey;
        border-radius: 20px;
      }
    }

    .navbar-categories {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 304px;
      background: white;
      font-weight: 600;

      ul {
        display: flex;
        justify-content: space-evenly;
        font-size: 30px;
        list-style: none;
        width: 60%;
        margin: 0;

        li {
          cursor: pointer;
        }
      }
    }

    .section-articles {
      padding: 0 2.5%;
      background-color: white;

      .wrapper-articles {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        height: 100%;
      }
    }
  }
</style>

<main class="page-content">
  <div class="header">
    <div class="logo">Tetrabids</div>
  </div>
  <div class="section-start">
    <div class="left-column">
      <div class="title">Blog</div>
      <div class="description">
        consectetur adipiscing elit. Auctor vestibulum proin tempor eget amet
        volutpat tortor nunc. In tortor, ornare lobortis sit feugiat volutpat.
        Risus ut libero pellentesque praesent sociis in lorem sapien sit.
      </div>
      <div class="wrapper-buttons">
        <Button color="purple">
          <div class="fill">FAQ</div>
        </Button>
        <button class="outline"><span>Contacto</span></button>
      </div>
    </div>
    <div class="right-column" />
  </div>
  <div class="navbar-categories">
    <ul>
      <li>Categoria 1</li>
      <li>Categoria 2</li>
      <li>Categoria 3</li>
      <li>Categoria 4</li>
    </ul>
  </div>
  <div class="section-articles">
    <div class="wrapper-articles">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </div>
  <Footer />
</main>
