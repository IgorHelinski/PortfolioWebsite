<script>
    // images
    import brumhilde from '../assets/brumhilde.jpg'

    // gifs
    import butterfly_Welcome from '../assets/Gifs/welbutterfly.gif'
    import stars from '../assets/Gifs/blinkingstars_bg.gif'

    // icons
    import icon_thisPC from '../assets/Win7Icons/thisPC.ico'
    import icon_binEmpty from '../assets/Win7Icons/BinEmpty.ico'
    import icon_binFull from '../assets/Win7Icons/BinFull.ico'
    import icon_folderStar from '../assets/Win7Icons/folderStar.ico'
    import icon_folderBusiness from '../assets/Win7Icons/folderBusiness.ico'

    import logo_curseGiver from '../assets/CurseGiverLogo64x64.png'

    // libs
    import Counter from '../lib/Counter.svelte'
    import Draggable from '../lib/Draggable.svelte';
    import Icon from '../lib/Icon.svelte';
    import RepoCard from '../lib/RepoCard.svelte';

    // css
    import "7.css/dist/7.scoped.css";
    import '../style.css'
</script>

<body>
    <div class="icon">
      <Icon icon={icon_binEmpty}>
        <div>Recycle Bin</div>
      </Icon>
    </div>
  
    <div class="icon">
      <Icon icon={icon_thisPC}>
        <div>About me!</div>
      </Icon>
    </div>
  
    <div class="icon">
      <Icon icon={icon_folderStar}>
        <div>Projects!</div>
      </Icon>
    </div>

    <div class="icon">
        <Icon icon={icon_folderBusiness} link={"/#/business"}>
          <div>Business</div>
        </Icon>
    </div>

    <div class="icon">
        <Icon icon={logo_curseGiver} link={"/#/cursegiver"}>
          <div>Curse Giver</div>
        </Icon>
    </div>
  
    <div class="windowBox">
      <Draggable left={1300} top={100} titleBarText={"Random ass window"}>
        <div class="window-body has-space content" style="height:auto; background-image:url{stars}">
            <center>
                <img src={butterfly_Welcome} alt="welcome">
                <p><strong style="color: purple">✨ Damn ✨</strong></p>
                <Counter/>
            </center>
        </div>
      </Draggable>
    </div>
  
    <div class="windowBox">
      <Draggable left={500} top={400} titleBarText={"My projects"} windowWidth={830}>
        <div class="window-body has-space content" style="height:420px;">
          <center>
            <p>Some of my <strong style="color:blueviolet">✨ Projects ✨</strong></p>
          </center>
          <RepoCard repoUrl={"IgorHelinski/PineLinks"} cardWidth={400}/>
          <RepoCard repoUrl={"IgorHelinski/Depozyto"} cardWidth={400}/>
          <RepoCard repoUrl={"IgorHelinski/PortfolioWebsite"} cardWidth={400}/>
          <RepoCard repoUrl={"IgorHelinski/MyImageOperations"} cardWidth={400}/>
          <RepoCard repoUrl={"IgorHelinski/TechnicalRacing"} cardWidth={400}/>
          <RepoCard repoUrl={"IgorHelinski/ShopUiSystem-Unity"} cardWidth={400}/>
        </div>
      </Draggable>
    </div>
  
    <div class="windowBox">
      <Draggable left={200} top={50} titleBarText={"About me!"}>
        <div class="window-body has-space content" style="max-height:auto;">
          <center>
            <p>Hi, im Igor and i like programming and game development! </p>
            <p>... btw that's a really<strong style="color: purple"> ✨ cool ✨ </strong>cat</p>
            <img src={brumhilde} alt="funny cat">
          </center>
        </div>
      </Draggable>
    </div>
  
</body>
  
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

    @media only screen and (max-width:700px) {
        body{
            background-size: cover;
            overflow-y:hidden;
        }
    }
  </style>