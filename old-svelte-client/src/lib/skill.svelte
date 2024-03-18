<script>
    const skill_name = "sample_skill"
    const skill_proficiency = 60
</script>

<style>
    .bar {
        background-color: red;
    }

    .bar-bg {
        background-color: white;
    }
</style>

<div>
    <p class="inline-block">{skill_name}</p>
    <div class="inline-block relative" style="width:100%">
        <div class="bar-bg rounded-full h-2 bottom-0 absolute" style="width:100%"/>
        <div class="bar rounded-full h-2 bottom-0 absolute" style="width:{skill_proficiency}%"/>
    </div>
</div>