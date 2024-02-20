<script>
	import Headshot from "$lib/headshot.svelte";
	import Bio from "$lib/bio.svelte";
	import ProjectBanner from "$lib/project_banner.svelte";
	import Skill from "$lib/skill.svelte"
	import SkillSheet from "$lib/skill_sheet.svelte";
</script>

<style lang="postcss">
	:global(html) {
		background-color: #00A366;
		}

</style>

<Headshot/>
<Bio/>
<SkillSheet/>
<ProjectBanner/>

