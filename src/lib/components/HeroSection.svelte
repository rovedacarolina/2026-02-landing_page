<script>
	const { title, subtitle, image, specs } = $props();
</script>

<section class="hero">
	<div class="hero-content">
		<h1 class="hero-title">{title}</h1>

		<p class="hero-subtitle">{subtitle}</p>

		{#if image}
			<div class="hero-image">
				<img src={image} alt={title} />
			</div>
		{/if}

		{#if specs}
			<div class="specs">
				{#each specs as spec}
					<div class="spec-item">
						<span class="spec-value">{spec.value}</span>
						<span class="spec-label">{spec.label}</span>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.hero {
		padding-block: var(--size-10);
		padding-inline: var(--size-10);
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		gap: var(--size-7);
		align-items: center;
	}

	.hero-title {
		font-size: var(--size-10);
		font-weight: 500;
		color: var(--color-ink);
		text-align: center;
		margin: 0;
		max-width: 15ch;
		font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	}

	.hero-subtitle {
		font-size: var(--size-6);
		color: var(--color-ink-secondary);
		text-align: center;
		margin: 0;
		max-width: 50ch;
		line-height: var(--size-6);
	}

	.hero-image {
		aspect-ratio: 600 / 178;
		width: 100%;
		max-width: 600px;
		border-radius: var(--size-4);
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.specs {
		display: flex;
		gap: var(--size-7);
		justify-content: center;
		width: 100%;
	}

	.spec-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-1);
	}

	.spec-value {
		font-size: var(--size-5);
		font-weight: 900;
		color: var(--color-ink-secondary);
		font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	}

	.spec-label {
		font-size: var(--size-3);
		color: var(--color-ink-secondary);
	}
</style>
