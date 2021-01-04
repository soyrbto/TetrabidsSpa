<script>
  import page from "page";
  import MainPage from "./pages/MainPage.svelte";
  import Article from "./pages/Article.svelte";
  import Blog from "./pages/Blog.svelte";
  import Faq from "./pages/Faq.svelte";

  let current = MainPage;
  let params;

  page("/", () => (current = MainPage));
  page("/article", () => (current = Article));
  page("/blog", () => (current = Blog));
  page("/faq", () => (current = Faq));

  page.start();
</script>

<svelte:component this={current} params={params} />
