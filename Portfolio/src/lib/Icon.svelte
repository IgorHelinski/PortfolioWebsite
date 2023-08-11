<script>
    export let icon;
    export let width = 60;
    export let height = 60;
</script>

<div style="width={width}px;">
    <img src={icon} alt="icon" width="{width}px" height="{height}px" class="iconThing">
    <div class="caption" style="width:{width}px">
        <slot></slot>
    </div>
</div>

<style>
    .iconThing{
        user-select: none;
        will-change: filter;
        transition: filter 300ms;
    }

    .iconThing:hover{
        filter: drop-shadow(0 0 2em #00f7fff8);
    }
</style>