<script>
  import page from "page";
  import Main from "./pages/Main.svelte";
  import Article from "./pages/Article.svelte";
  import Post from "./pages/Post.svelte";
  import Blog from "./pages/Blog.svelte";
  import Faq from "./pages/Faq.svelte";

  let current;
  let params;

  page("/", () => (current = Main));
  page("/blog", () => (current = Blog));
  page("/faq", () => (current = Faq));
  page(
    "/post/:id",
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    () => (current = Post)
  );
  page(
    "/service/:id",
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    () => (current = Post)
  );
  page(
    "/product/:id",
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    () => (current = Post)
  );

  page.start();
</script>

<svelte:component this={current} params={params} />
