<script>
    import { activeTitleBar }  from '../stores';

    // offset
    export let left = 10;
    export let top = 10;
    //
    export let windowWidth = 480;
    export let titleBarText = "Default Text";
    let moving = false;
    let _activeTitleBar;

    activeTitleBar.subscribe((value) => {
		_activeTitleBar = value;
	});

    function StartDrag(){
        moving = true;
    }

    function StopDrag(){
        moving = false;
    }

    function Move(e){
        if(moving){
            left += e.movementX;
            top += e.movementY;
        }
    }

    function UpdateActive(){
        activeTitleBar.set(titleBarText);
    }

    function Hide(){

    }

    function Close(){

    }
</script>
<svelte:window on:mouseup={StopDrag} on:mousemove={Move}/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="draggable" style="left: {left}px; top: {top}px;" on:mousedown={UpdateActive}>
    <div class="win7" style="width:{windowWidth}px;">
        <div class="window glass {_activeTitleBar === titleBarText ? 'active onTop' : 'onBottom'}">
            <div class="title-bar" on:mousedown={StartDrag}>
            <div class="title-bar-text" >{titleBarText}</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize" on:click={Hide}></button>
                <button aria-label="Close" on:click={Close}></button>
            </div>
            </div>
            <slot> 
                <h1>Damn, no content here huh? 
                    Must have forgotten to add stuff to the slot,
                    dang it! ;D
                </h1>
            </slot>
        </div>
    </div>       
</section>

<style>
    .draggable{
        user-select: none;
        position: absolute;
        cursor: move;
    }

    .onTop{
        user-select: none;
    }

    .onBottom{
        user-select: none;
    }
</style>