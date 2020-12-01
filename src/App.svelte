<script>
  import page from "page";
  import MainPage from "./sections/MainPage.svelte";
  import Article from "./sections/Article.svelte";
  import Blog from "./sections/Blog.svelte";

  let current = MainPage;
  page("/", () => (current = MainPage));
  page("/article", () => (current = Article));
  page("/blog", () => (current = Blog));
  page.start();
</script>

<svelte:component this={current} />
