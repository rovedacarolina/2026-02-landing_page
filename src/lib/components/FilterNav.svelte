<script>
	let { items = [], onSelect } = $props();
	let selected = $state(items[0]?.id);
</script>

<nav class="filter-nav">
	<div class="filters">
		{#each items as item}
			<button
				class="filter-btn"
				class:active={selected === item.id}
				onclick={() => {
					selected = item.id;
					onSelect?.(item.id);
				}}
			>
				{item.label}
			</button>
		{/each}
	</div>
</nav>

<style>
	.filter-nav {
		padding-block: var(--size-7);
		padding-inline: var(--size-10);
		border-bottom: 1px solid var(--color-surface);
	}

	.filters {
		display: flex;
		gap: var(--size-5);
		justify-content: center;
	}

	.filter-btn {
		padding-block: var(--size-2);
		padding-inline: var(--size-4);
		border-radius: 999px;
		border: none;
		background-color: transparent;
		color: var(--color-ink);
		font-size: var(--size-5);
		cursor: pointer;
		transition: background-color 0.25s var(--ease-out-quart);
	}

	.filter-btn:hover {
		background-color: var(--color-filter--hover);
	}

	.filter-btn.active {
		background-color: var(--color-filter--selected);
		color: var(--color-ink);
		font-weight: 500;
	}
</style>
