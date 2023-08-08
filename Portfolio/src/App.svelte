
<script>
  // logos
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  // librarys idk
  import Counter from './lib/Counter.svelte'
  import Draggable from './lib/Draggable.svelte';
  import "7.css/dist/7.scoped.css"
</script>

<main>
  <h1>Igor Heliński</h1>
  <h2>Portfolio</h2>

  <Draggable>
    <div class="resizable">
    <div class="window" style="width: 700px">
      <div class="title-bar">
        <div class="title-bar-text">A Window With Stuff In It</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
    </div>
      <div class="window-body">
        <p>There's so much room for activities!</p>
        <div class="card">
          <Counter />
        </div>
      </div>
    </div>
  </Draggable>

  

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn moreee
  </p>

  
</main>

<style>


  .resizable {
  display: inline-block;
  resize: both;
  overflow: hidden;
  line-height: 0;
  }


  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
