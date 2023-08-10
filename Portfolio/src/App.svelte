
<script>
  // logos
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import brumhilde from './assets/brumhilde.jpg'

  // icons
  import icon_thisPC from './assets/Win7Icons/thisPC.ico'
  import icon_binEmpty from './assets/Win7Icons/BinEmpty.ico'
  import icon_binFull from './assets/Win7Icons/BinFull.ico'
  import icon_folderStar from './assets/Win7Icons/folderStar.ico'

  // librarys idk
  import Counter from './lib/Counter.svelte'
  import Draggable from './lib/Draggable.svelte';
  import Icon from './lib/Icon.svelte';
  import "7.css/dist/7.scoped.css";
  
</script>

<div class="icon">
  <Icon icon={icon_binEmpty}>
    <div>Recycle Bin</div>
  </Icon>
</div>

<div class="icon">
  <Icon icon={icon_thisPC}>
    <div>This PC</div>
  </Icon>
</div>

<div class="icon">
  <Icon icon={icon_folderStar}>
    <div>Projects!</div>
  </Icon>
</div>

<main>
  <div class="windowBox">
    <Draggable left={1300} top={100} titleBarText={"Random ass window"}>
      <div class="window-body has-space content" style="height:240px;">
        <p>There's so much room for activities!</p>
        <p><strong style="color: purple">✨ Damn ✨</strong></p>
        <Counter/>
      </div>
    </Draggable>
  </div>

  <div class="windowBox">
    <Draggable left={200} top={100} titleBarText={"About me!"}>
      <div class="window-body has-space content" style="max-height:900px;">
        <center>
          <p>Hi, im Igor and i like programming and game development! </p>
          <p>... btw that's a really<strong style="color: purple"> ✨ cool ✨ </strong>cat</p>
          <img src={brumhilde} alt="funny cat">
        </center>
      </div>
    </Draggable>
  </div>

  <div class="win7 task-bar">
    <div class="window violet">
      <div class="title-bar" style="height: 35px;">
          
      </div>
    </div>
  </div>

</main>

<style>
  .icon{
    padding: 15px;
    user-select: none;
  }

  .icon div{
    color: whitesmoke; 
    text-shadow: -3px 0px 4px black, 0 3px 3px black, 2px 0 1px black, 0 -1px 2px black; 
    font-size:small;
  }

  :global(.caption){
    text-align: center;
  }

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
    background-color: #ff00f2d2;
  }
</style>
