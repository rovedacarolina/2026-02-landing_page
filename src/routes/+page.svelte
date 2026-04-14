<script>
	import Project from "$lib/components/Project.svelte";

	const { data } = $props();
</script>

<section class="safe-area hero">
	<h1>
		This archive collects the best outcomes of the Web Design Laboratory in
		Communication Design, Politecnico di Milano. The laboratory is directed by
		Umberto Tolino, Christian Mazzoleni, Francesco di Gioia and Tommaso Negri
		with love.
	</h1>
</section>

<section class="safe-area projects">
	{#each data.projects as project}
		<Project data={project.data} />
	{/each}
</section>

<style>
	.hero {
		padding-block: var(--size-11);

		h1 {
			font-size: var(--size-7);
			max-width: 35ch;
		}
	}

	.projects {
		padding-block: var(--size-7);

		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--size-5);
	}
</style>
