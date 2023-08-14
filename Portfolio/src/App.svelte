
<script>
  // Routing
  import Router from 'svelte-spa-router'
  import Home from './routes/Home.svelte'
  import Business from './routes/Business.svelte'
  import CurseGiver from './routes/CurseGiver.svelte';
</script>

<Router routes={{
  '/': Home,
  '/business': Business,
  '/cursegiver': CurseGiver
}} />

