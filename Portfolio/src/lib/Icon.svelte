<script>
    export let icon;
    export let width = 60;
    export let height = 60;
</script>

<section class="iconThing">
    <img src={icon} alt="icon" width="{width}px" height="{height}px">
    <div class="caption" style="width:{width}px">
        <slot></slot>
    </div>
</section>

<style>
    .iconThing{
        user-select: none;
    }
</style>