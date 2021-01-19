<script>
  import Footer from "../sections/Footer.svelte";
  import BlogCard from "../components/blogCard.svelte";
  import Button from "../components/Button.svelte";
  import CheckboxCategories from "../components/CheckboxCategories.svelte";
  import {
    areaCategories,
    experienceCategories,
    secNavbarItems,
  } from "../StaticStore";
  import { onMount } from "svelte";
  import axios from "axios";

  let windowsWidth;

  let items = [];

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  onMount(async () => {
    try {
      const res = await axios.get(
        "https://tetrabids-cms.herokuapp.com/articles"
      );
      items = res.data;
      console.log(res);
    } catch (e) {
      error = e;
      console.log(e);
    }
  });
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
      background: #0082ba;

      .logo {
        padding: 0 40px;
        color: white;
        font-size: clamp(50px, 2.6vw, 70px);
        font-weight: 700;

        .logo-title {
          text-decoration: none;
          color: white;
        }
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
          font-size: clamp(30px, 2.5vw, 55px);
          line-height: clamp(30px, 2.5vw, 48px);
          font-weight: 700;
          margin-top: 86px;
        }

        .description {
          font-size: clamp(18px, 1.5vw, 33px);
          line-height: clamp(35px, 2.6vw, 50px);
          margin: clamp(25px, 1.56vw, 30px) 0 clamp(60px, 4.16vw, 80px) 0;
          color: #a5a1a1;
        }

        @media screen and (max-width: 768px) {
          .description {
            margin: 20px 0 40px 0;
          }
        }

        .wrapper-buttons {
          display: flex;

          .fill {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: clamp(15px, 1.3vw, 29px);
            height: clamp(43px, 2.86vw, 60px);
            width: clamp(130px, 8.59vw, 170px);

            .button-faq {
              text-decoration: none;
              color: white;
            }
          }
        }
      }

      @media screen and (max-width: 768px) {
        .left-column {
          width: 100%;
          padding-right: 0;
        }
      }

      .right-column {
        height: clamp(510px, 37.39vw, 718px);
        width: 45%;
        background: #c4c4c4;
        border-radius: 20px;
      }

      @media screen and (max-width: 768px) {
        .right-column {
          width: 100%;
        }
      }

      @media screen and (max-width: 414px) {
        .right-column {
          height: 350px;
        }
      }
    }

    @media screen and (max-width: 768px) {
      .section-start {
        flex-direction: column-reverse;
        padding-top: 10%;
      }
    }

    .categories-article {
      display: flex;
      flex-direction: column;
      padding: 70px 10%;
    }

    .section-articles {
      padding: 0 2.5%;
      background-color: white;

      .wrapper-articles {
        display: flex;
        // justify-content: space-between;
        // flex-wrap: wrap;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
      }

      @media screen and (max-width: 768px) {
        .wrapper-articles {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media screen and (max-width: 414px) {
        .wrapper-articles {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<main class="page-content">
  <div class="header">
    <div class="logo"><a class="logo-title" href="/">Tetrabids</a></div>
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
          <div class="fill"><a class="button-faq" href="/faq">FAQ</a></div>
        </Button>
<<<<<<< HEAD
        <Button buttonType="outline">{secNavbarItems[2]}</Button>
=======
        <Button color="purple" />
>>>>>>> 17e14857eb4f6519a9536f486645c9a7b9e804d2
      </div>
    </div>
    <div class="right-column" />
  </div>

  <div class="categories-article">
    <div class="area">
      <CheckboxCategories categories={areaCategories} />
    </div>
    <div class="experience">
      <CheckboxCategories categories={experienceCategories} />
    </div>
  </div>

  <div class="section-articles">
    <div class="wrapper-articles">
      {#each items as item, index}
        <BlogCard imageUrl={item.presentationImage[0].url}>
          <div slot="date-published">
            {new Date(item.published_at).toLocaleDateString(undefined, options)}
          </div>
          <a
            slot="title"
            href={`/article/${index}`}
            style="text-decoration: none; color: black;"
            target="blank">{item.title}
          </a>
        </BlogCard>
      {/each}
    </div>
  </div>
  <Footer />
</main>
