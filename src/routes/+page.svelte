<script>
	import TopBar from "$lib/components/TopBar.svelte";
	import HeroSection from "$lib/components/HeroSection.svelte";
	import FilterNav from "$lib/components/FilterNav.svelte";
	import Project from "$lib/components/Project.svelte";
	import { porscheModels, heroData } from "$lib/data/porsche.js";

	let selectedModel = $state("carrera");

	let filteredModels = $derived.by(() => {
		const model = porscheModels.find((m) => m.id === selectedModel);
		return model?.models || [];
	});

	let filterItems = $derived(
		porscheModels.map((m) => ({
			id: m.id,
			label: m.label
		}))
	);

	function handleModelSelect(modelId) {
		selectedModel = modelId;
	}
</script>

<TopBar />

<HeroSection {...heroData} />

<FilterNav items={filterItems} onSelect={handleModelSelect} />

<section class="projects-grid">
	{#each filteredModels as model (model.id)}
		<article class="project-card">
			<div class="card-thumbnail">
				<div class="veil"></div>
				<img src={model.thumbnail} alt={model.title} />
			</div>

			<header class="card-header">
				<div class="card-title">
					<h3>{model.title}</h3>
					<span class="year">/ {model.year}</span>
				</div>

				<div class="card-arrow">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M7 17L17 7M17 7H10M17 7V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>
			</header>
		</article>
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

	.card-title h3 {
		font-size: var(--size-5);
		font-weight: 500;
		margin: 0;
		color: var(--color-ink);
	}

	.year {
		color: var(--color-ink-secondary);
		font-size: var(--size-5);
	}

	.card-arrow {
		width: var(--size-4);
		height: var(--size-4);
		color: var(--color-ink);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.75s var(--ease-out-quart);
		transform: translateY(100%);
	}

	.project-card:hover .card-arrow {
		transform: translateY(0);
	}

	.card-arrow svg {
		width: 100%;
		height: 100%;
	}
</style>
