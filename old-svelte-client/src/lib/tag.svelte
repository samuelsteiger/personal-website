<script>
const tag_color = "blueviolet";
const tag_text = "Sample Tag"
</script>

<style>
    p {
        width: fit-content;
        height: fit-content;
        border-radius: 5%;
        border-width: 1px;
        border-style: solid;
    }
</style>

<div class="text-center text-xs">
    <p style = "color: {tag_color}; border-color: {tag_color};" class = "py-1 px-1">
        {tag_text}
    </p>
</div>