<script>
    export let left = 10;
    export let top = 10;
    let moving = false;

    function Start(){
        console.log("true");
        moving = true;
    }

    function Stop(){
        moving = false;
    }

    function Move(e){
        if(moving){
            left += e.movementX;
            top += e.movementY;
        }
    }
</script>

<svelte:window on:mouseup={Stop} on:mousemove={Move}/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section on:mousedown={Start}
     class="draggable" 
     style="
     left: {left}px; 
     top: {top}px;
     ">
     <div class="win7" style="width:480px;">
        <div class="window glass active">
          <div class="title-bar">
            <div class="title-bar-text" >Me</div>
            <div class="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <slot class="no-drag"></slot>
        </div>
      </div>
</section>

<style>
    .draggable{
        user-select: none;
        position: absolute;
        cursor: move;
    }
</style>