<script>
  import { onMount } from "svelte";
  export let fact;

  onMount(async () => {
    const res = await fetch("/api/fact");
    const act = await res.text();
    fact = act;
  });
</script>

<main>
  <h1>seeker</h1>
  <br />
  <p>{fact ? fact : '...'}</p>
</main>
