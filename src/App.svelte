<script>
  import page from "page";
  import Main from "./pages/Main.svelte";
  import Article from "./pages/Article.svelte";
  import Post from "./pages/Post.svelte";
  import Blog from "./pages/Blog.svelte";
  import Faq from "./pages/Faq.svelte";

  let current;

  page("/", () => (current = Main));
  page("/blog", () => (current = Blog));
  page("/faq", () => (current = Faq));
  page("/post", () => (current = Post));
  page(
    "/article/:id",
    (ctx, next) => {
      next();
    },
    () => (current = Article)
  );

  page.start();
</script>

<svelte:component this={current} />
