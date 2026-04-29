<script lang="ts">
	import Icon from "./Icon.svelte";

	interface ProjectData {
		title: string;
		year: string;
		thumbnail: string;
		link?: string;
	}

	const { data: project } = $props<{ data: ProjectData }>();
</script>

{#if project.link}
	<a href={project.link} target="_blank">
		{@render card(project)}
	</a>
{:else}
	{@render card(project)}
{/if}

{#snippet card(projectData: ProjectData)}
	<article>
		<div class="thumbnail">
			{#if projectData.link}
				<div class="veil"></div>
			{/if}
			<img src={projectData.thumbnail} alt={projectData.title} />
		</div>

		<header>
			<hgroup>
				<h3>{projectData.title}</h3>
				<span>/ {projectData.year}</span>
			</hgroup>

			{#if projectData.link}
				<div class="arrow">
					<Icon name="arrow-up-right" />
				</div>
			{/if}
		</header>
	</article>
{/snippet}

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);

		&:hover {
			.veil {
				opacity: 1;
			}

			.arrow {
				transform: translateY(0);
			}
		}
	}

	.thumbnail {
		position: relative;
		aspect-ratio: 16/10;
		overflow: hidden;

		.veil {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: var(--color-link);
			mix-blend-mode: soft-light;

			transition: opacity 0.75s var(--ease-out-quart);
			opacity: 0;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-4);

		overflow: clip;
	}

	hgroup {
		display: flex;
		align-items: center;
		gap: var(--size-2);

		span {
			color: var(--color-ink-secondary);
		}
	}

	.arrow {
		transition: transform 0.75s var(--ease-out-quart);
		transform: translateY(100%);
	}
</style>
