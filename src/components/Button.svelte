<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

	let {
		type,
		variant = 'filled-light',
		href,
		disabled = false,
		inline = false,
		icon = false,
		children,
		onclick,
		...restProps
	}: (HTMLButtonAttributes | HTMLAnchorAttributes) & {
		type?: 'submit' | 'button';
		variant?: 'filled-light' | 'filled-dark';
		href?: string;
		disabled?: boolean;
		icon?: boolean;
		inline?: boolean;
		children: Snippet;
		onclick?: () => void;
	} = $props();
</script>

{#if href}
	<a
		class:inline
		class:icon
		class={variant}
		{href}
		aria-disabled={disabled}
		{...restProps as HTMLAnchorAttributes}
	>
		{@render children()}
	</a>
{:else}
	<button
		class:inline
		class:icon
		class={variant}
		{onclick}
		{type}
		{disabled}
		{...restProps as HTMLButtonAttributes}
	>
		{@render children()}
	</button>
{/if}

<style>
	a,
	button {
		display: flex;
		gap: 0.5rem;

		padding: 0.75rem 1.25rem;
		border-radius: 0.75rem;

		text-align: center;
		justify-content: center;
		width: 100%;
		height: max-content;

		font-weight: 500;
		cursor: pointer;
		text-decoration: none;
		user-select: none;

		&.icon {
			display: grid;
			place-items: center;
			padding: 0.75rem;
		}

		&.inline {
			display: inline-flex;
			width: max-content;
			flex-shrink: 0;
		}

		&.filled-light {
			background-color: var(--color-primary);
			color: var(--color-on-primary);

			&:hover {
				background-color: var(--color-primary-variant);
			}
		}

		&.filled-dark {
			background-color: var(--color-on-primary);
			color: var(--color-primary);

			&:hover {
				background-color: var(--color-surface);
			}
		}

		&:disabled,
		&[aria-disabled='true'] {
			opacity: 0.5;
			cursor: not-allowed;

			&:hover {
				opacity: 0.5;
			}
		}
	}
</style>
