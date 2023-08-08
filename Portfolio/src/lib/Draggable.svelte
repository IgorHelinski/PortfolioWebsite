<script>
    export let left = 30;
    export let top = 50;
    let moving = false;

    function Start(){
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
     style="left: {left}px; top: {top}px;">
    <slot></slot>
</section>

<style>
    .draggable{
        user-select: none;
        position: absolute;
        border: solid 1px gray;
        cursor: move;
    }
</style>