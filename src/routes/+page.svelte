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
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--size-5);
		padding-block: var(--size-10);
		padding-inline: var(--size-10);
	}

	.project-card {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		cursor: pointer;
		transition: all 0.25s var(--ease-out-quart);
	}

	.project-card:hover {
		transform: translateY(-4px);
	}

	.card-thumbnail {
		position: relative;
		aspect-ratio: 664 / 400;
		overflow: hidden;
		border-radius: var(--size-4);
	}

	.card-thumbnail img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.veil {
		position: absolute;
		inset: 0;
		background-color: var(--color-link);
		mix-blend-mode: soft-light;
		opacity: 0;
		transition: opacity 0.75s var(--ease-out-quart);
	}

	.project-card:hover .veil {
		opacity: 1;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-4);
	}

	.card-title {
		display: flex;
		align-items: center;
		gap: var(--size-2);
	}

<<<<<<< HEAD
	.filters {
		display: flex;
		align-items: center;
		gap: var(--size-5);
	}

	.project-card:hover .card-arrow {
		transform: translateY(0);
	}
=======
	.projects {
		padding-block: var(--size-7);
>>>>>>> parent of f51b0cc (add filters)

	.card-arrow svg {
		width: 100%;
		height: 100%;
	}
</style>
