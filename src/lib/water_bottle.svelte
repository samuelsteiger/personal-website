<script>
    import Headshot from "$lib/headshot.svelte";
	import Bio from "$lib/bio.svelte";
	import ProjectBanner from "$lib/project_banner.svelte";
	import SkillSheet from "$lib/skill_sheet.svelte";
</script>

<style>
    .lid {
        background-color: black;
        width: 100%;
        height: 10vh;
    }


    .lid p {
        color: white;
        font-size: 25px;
    }

    .bottle {
        background-color: #00A366;
        width: 100%;
        min-height: 90vh;
    }
    
</style>

<div class="lid grid grid-cols-3 gap-1 justify-evenly justify-items-center place-items-center">
    <div><p>About Me</p></div>
    <div><p>Projects</p></div>
    <div><p>Blog</p> </div>
</div>

<div class="bottle">
    <Headshot/>
    <Bio/>
</div>