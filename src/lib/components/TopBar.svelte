<script>
	import Link from "$lib/components/Link.svelte";
	import Icon from "$lib/components/Icon.svelte";
</script>

<div class="top-bar">
	<p class="logo">PORSCHE</p>

	<div class="nav">
		<Link title="About" ref="#" />
		<button class="cart-btn" aria-label="Shopping cart">
			<Icon name="shopping-cart" />
		</button>
	</div>
</div>

<style>
	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: var(--size-6);
		padding-inline: var(--size-10);

		background-color: var(--color-canvas);
		border-bottom: 1px solid var(--color-surface);
	}

	.logo {
		font-size: var(--size-7);
		font-weight: 500;
		color: var(--color-ink);
		margin: 0;
		font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	}

	.nav {
		display: flex;
		gap: var(--size-7);
		align-items: center;
	}

	.cart-btn {
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-ink);
		padding: 0;
		transition: opacity 0.25s var(--ease-out-quart);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cart-btn:hover {
		opacity: 0.7;
	}
</style>
