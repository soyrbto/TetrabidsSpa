<script>
  import { load } from "./Stores";
  import { onMount } from "svelte";
  import page from "page";
  import Main from "./pages/Main.svelte";
  import Post from "./pages/Post.svelte";
  import Faq from "./pages/Faq.svelte";
  import ErrorPage from "./pages/ErrorPage.svelte";

  onMount(() => {
    load.set(true);
  });

  let current;
  let params;

  page("/", () => (current = Main));
  page("/faq", () => (current = Faq));
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
  page("/*", () => (current = ErrorPage));

  page.start();
</script>

<svelte:component this={current} params={params} />
