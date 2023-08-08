
<script>
  // logos
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import brumhilde from './assets/brumhilde.jpg'

  // librarys idk
  import Counter from './lib/Counter.svelte'
  import Draggable from './lib/Draggable.svelte';
  import "7.css/dist/7.scoped.css";
</script>

<main>
  <Draggable left={700} top={500}>
    <div class="win7" style="width:480px;">
      <div class="window glass active">
        <div class="title-bar">
          <div class="title-bar-text" >A window with contents</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body has-space" style="height:240px;">
          <p>There's so much room for activities!</p>
          <p><strong style="color: purple">✨ Damn ✨</strong></p>
          <Counter/>
        </div>
      </div>
    </div>
  </Draggable>

  <Draggable left={150} top={100}>
        <div class="window-body has-space no-drag" style="max-height:900px;">
          <center>
            <p>Hi, im Igor and i like programming and game development! </p>
            <p>... btw that's a really<strong style="color: purple">✨ cool ✨</strong>cat</p>
            <img src={brumhilde} alt="funny cat">
          </center>
        </div>
  </Draggable>

  <div class="win7 task-bar">
    <div class="window violet glass active">
      <div class="title-bar" style="height: 35px;">
        <div class="title-bar-text">A task bar</div>
      </div>
    </div>
  </div>

</main>

<style>
  .task-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .violet::before,
  .violet > .title-bar {
    background-color: #6ec1e7;
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
