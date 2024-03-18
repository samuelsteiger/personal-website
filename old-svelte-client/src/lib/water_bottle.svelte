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
        min-height: 100vh;
        
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto auto;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "Nav Nav"
            "Bio Bio"
            "Employment Skills"
            "Projects Projects";
    }

    .Nav { grid-area: Nav; }

    .Bio { grid-area: Bio; }

    .Employment { grid-area: Employment; }

    .Skills { grid-area: Skills; }

    .Projects { grid-area: Projects; }

</style>

<div class="bottle">
    <div class="Nav lid grid grid-cols-3 gap-1 justify-evenly justify-items-center place-items-center">
        <div><p>About Me</p></div>
        <div><p>Projects</p></div>
        <div><p>Blog</p> </div>
    </div>
    <div class="Bio">
        <Headshot/>
        <Bio/>
    </div>
    <div class="Employment"></div>
    <div class="Skills">
        <SkillSheet/>
    </div>
    <div class="Projects">
        <ProjectBanner/>
        <ProjectBanner/>

    </div>
</div>