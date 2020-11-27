<script>
  import page from "page";
  import MainPage from "./sections/MainPage.svelte";

  let current = MainPage;
  page("/", () => (current = MainPage));
  page.start();
</script>

<svelte:component this={current} />
