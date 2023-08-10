<script>
    export let icon;
    export let width = 60;
    export let height = 60;
</script>

<section>
    <img src={icon} alt="icon" width="{width}px" height="{height}px" class="win7">
    <div class="caption" style="width:{width}px">
        <slot></slot>
    </div>
</section>