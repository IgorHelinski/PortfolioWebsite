<script>
  import '../css/home.css'
  import { onMount } from 'svelte';

  let y = 0;
  let aboutme = "fadeout";
  let projects = "fadeout-projects";
  let depozyto = "fadeout";
  let technical_racing = "fadeout";
  let esp32 = "fadeout";
  let myimageoperations = "fadeout";

  function toTop(){
    if(y == 0)
     return;

    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });
  }

  y = 0;    

  $: if (y) {
    if(y >= 200){
      aboutme = "fadein";
    }else{
      aboutme = "fadeout";
    }

    if(y >= 400){
      projects = "fadein";
    }else{
      projects = "fadeout";
    }

    if(y >= 500){
      depozyto = "fadein";
    }else{
      depozyto = "fadeout";
    }

    if(y >= 600){
      technical_racing = "fadein";
    }else{
      technical_racing = "fadeout";
    }

    if(y >= 1300){
      esp32 = "fadein";
    }else{
      esp32 = "fadeout";
    }

      if(y >= 1400){
      myimageoperations = "fadein";
    }else{
      myimageoperations = "fadeout";
    }
  }
  
  onMount(async () => {
    //console.log("ayuo");
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });
	});
</script>

<svelte:window bind:scrollY={y} on:load={toTop}/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="page-wrapper" on:scroll={() => {alert("scrolled")}}>
  <section id="nav">
    <div id="nav-bar">
      <h2>IH</h2>
      <button id="scroll-more">More</button>
      <button id="scroll-social-media">Social Media</button>
      <a href="#/business/"><button class="more">Business</button></a>
      <a href="#/cursegiver/"><button class="more">Curse Giver Project</button></a>
      <div id="spacer">&nbsp;</div>
      <a href="https://github.com/IgorHelinski" target=”_blank”><button class="social">Github</button></a>
      <a href="https://twitter.com/Zirael65" target=”_blank”><button class="social">Twitter</button></a>
      <a href="https://404dev.itch.io" target=”_blank”><button class="social">Itch.io</button></a>
      <a href="https://www.youtube.com/channel/UC17TM7Ttarn57Oz1zmENppw" target=”_blank”><button class="social">Youtube</button></a>
    </div>
    <div id="nav-box"></div>
    <div id="nav-title">Igor Heliński Portfolio</div>
  </section>

  <div style="background-color: red;"></div>

  <section id="title">
    <h1>Welcome to my <span>awesome</span> website</h1>
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
      <div id="img">
        <img src="" alt="me">
      </div>
    </div>

    <div id="projects" class="{projects}">
      <h2>Some of my projects:</h2>
    </div>

    <div id="depozyto" class="{depozyto}">
      <h3>
        Depozyto : <br>
        This is a banking website i've made with my friend at our one month internship.
        It's made in .NET and has an SQL database
      </h3>
      <div id="img">
        <img src="" alt="depozyto1" width="30"  height="20">
      </div>
    </div>

    <div id="technical-racing" class="{technical_racing}">
      <h3>
        Technical Racing : <br>
        This is an unfinished game of mine about racing with technicals made in Unity
        <br>
        It has car suspencion phisics and integration with steamworks. Matchmaking is handled by steam so you can invite players from your friends list. 
      </h3>
      <div id="img">
        <img src="" alt="technical-racing1">
      </div>
    </div>

    <div id="esp32" class="{esp32}">
      <h3>
        ESP32 camera IoT projects: <br>
        I've been playing around with the ESP32 camera chip and i learned a lot about C headers and how thoes boards work. 
        I made a litte program that takes photo every couple of seconds and you can put it together to ger a really nice timelapse
        <br>
        Im still working on a function to take photos remotley with a PHP website.
        <img src="" alt="">
      </h3>
    </div>

    <div id="my-image-operations" class="{myimageoperations}">
      <h3>
        My Image Operations : <br>
        That's a cmd application made with C# that takes a photo and does something with it.
        <br>
        I used a Floyd-Steinbergs alghoritm to get this nice dithered effect
        <img src="" alt="technical-racing1">
      </h3>
    </div>
  </section>

  <section id="footer"></section>
</div>




