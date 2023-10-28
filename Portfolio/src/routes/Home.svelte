<script>
  import '../css/home.css'
  import { onMount } from 'svelte';

  const scrollIntoView = (node)=>{
    node.scrollIntoView()
  }

  let y = 0;
  let aboutme = "fadeout";
  let projects = "fadeout";

  function toTop(){
    console.log("aaaaaaaaaaaaa");
    document.body.scrollIntoView();
    scrollY = 0;
  }

  y = 0;

  $: if (y) {
    if(y >= 200){
      aboutme = "fadein";
      console.log("fadein");
    }else{
      aboutme = "fadeout";
    }

    if(y >= 400){
      projects = "fadein";
    }else{
      projects = "fadeout";
    }
  }

  onMount(async () => {
		//element.scrollIntoView();
    //y = 1;
	});
</script>

<svelte:window bind:scrollY={y} on:load={toTop}/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="page-wrapper" on:scroll={() => {alert("scrolled")}}>
  <section id="nav">
    <div id="nav-bar">
      <h2>Igor Heliński Portfolio</h2>
      <a href="#/business/"><button>Business</button></a>
      <a href="#/cursegiver/"><button>Curse Giver Project</button></a>
      <a href="#/windows7/"><button>Windows 7</button></a>
    </div>
    <div id="nav-box" class="material-symbols-outlined"></div>
  </section>

  <div use:scrollIntoView style="background-color: red;"></div>

  <section id="title">
    <h1>Welcome to my <span>awesome</span> website {y}</h1>
  </section>

  <section id="main">
    <div id="about-me" class="{aboutme}">
      <h2>Who am i?</h2>
      <h3>
        Im Igor, im from Poland and i love programming. 
        Im most familiar with languages like C# and C++ but i also do web dev like this website wich is made in svelte js.
        
        Mostly im into game development and im currently working on a game called "Curse Giver".
        I've been making games in Unity since 2020 and i want to do that for a living.

        Besides game dev i played around with some IoT projects and image processing stuff
        I also make silly videos on my Youtube channel.
      </h3>
      <img src="" alt="me">
    </div>

    <div id="projects" class="{projects}">
      <h2>Some of my projects:</h2>
    </div>

  </section>
  <section id="footer"></section>
</div>




