<script>
  import page from "page";
  import MainPage from "./pages/MainPage.svelte";
  import Article from "./pages/Article.svelte";
  import Blog from "./pages/Blog.svelte";

  let current = MainPage;
  page("/", () => (current = MainPage));
  page("/article", () => (current = Article));
  page("/blog", () => (current = Blog));
  page.start();
</script>

<svelte:component this={current} />
