<script>
    export let icon;
    export let width = 60;
    export let height = 60;

    export let link = "#";
</script>

<a href="{link}">
    <button style="width={width}px;" class="iconThing">
        <img src={icon} alt="icon" width="{width}px" height="{height}px">
        <div class="caption" style="width:{width}px">
            <slot></slot>
        </div>
    </button>
</a>

<style>
    .iconThing {
        user-select: none;
        will-change: filter;
        transition: filter 300ms;
    }

    .iconThing:hover {
        filter: drop-shadow(0 0 2em #00f7fff8);
    }

    button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
</style>