<script>
    import Tag from "$lib/tag.svelte";
</script>
    
<style>
    h1 {
        color: azure;
    }
</style>
    
<div class="relative" style="background-color: pink;">
    <img class="opacity-50 hover:opacity-60 min-w-full h-40"
    src="personal-website-banner.png" alt="Snippit of Code for this website"/>
    <div class="absolute top-1/4 right-1/2 text-xl">
        <h1>Sample Project</h1>
    </div>
    <div class="absolute bottom-1/4 right-1/2">
        <Tag/>
    </div>
    
</div>