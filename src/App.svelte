<script>
  import page from "page";
  import MainPage from "./sections/MainPage.svelte";
  import Article from "./sections/Article.svelte";

  let current = MainPage;
  let params;

  page("/", () => (current = MainPage));
  page("/article", () => (current = Article));
  page.start();
</script>

<svelte:component this={current} params={params} />
