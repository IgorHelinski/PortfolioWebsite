
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
  <div class="windowBox">
    <Draggable left={700} top={500} titleBarText={"Random ass window"}>
      <div class="window-body has-space content" style="height:240px;">
        <p>There's so much room for activities!</p>
        <p><strong style="color: purple">✨ Damn ✨</strong></p>
        <Counter/>
      </div>
    </Draggable>
  </div>

  <div class="windowBox">
    <Draggable left={150} top={100} titleBarText={"About me!"}>
      <div class="window-body has-space content" style="max-height:900px;">
        <center>
          <p>Hi, im Igor and i like programming and game development! </p>
          <p>... btw that's a really<strong style="color: purple">✨ cool ✨</strong>cat</p>
          <img src={brumhilde} alt="funny cat">
        </center>
      </div>
    </Draggable>
  </div>

  <div class="win7 task-bar">
    <div class="window violet glass active">
      <div class="title-bar" style="height: 35px;">
        <div class="title-bar-text">A task bar</div>
      </div>
    </div>
  </div>

</main>

<style>
  .windowBox :global(.onTop){
    z-index: 2;
  }

  .windowBox :global(.onBottom){
    z-index: 1;
  }

  .content{
    cursor:auto;
    user-select:none;
  }

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
</style>
