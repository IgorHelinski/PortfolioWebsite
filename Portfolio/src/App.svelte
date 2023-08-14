
<script>
  // Routing
  import Router from 'svelte-spa-router'
  import Home from './routes/Home.svelte'
  import Business from './routes/Business.svelte'
</script>

<Router routes={{
  '/': Home,
  '/business': Business
}} />

