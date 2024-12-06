<script lang="ts" module>
	type Image = {
		src: string;
		alt: string;
	};

	export type ModalContents = {
		images: Image[];
		title: string;
		text: string;
	};
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		images,
		title,
		children,
		text
	}: ModalContents & {
		children: Snippet;
	} = $props();

	let isVisible = $state(false);

	function toggleModal() {
		isVisible = !isVisible;
	}
</script>

<button class="image-with-modal" onclick={toggleModal}>
	{@render children()}
</button>

<div role="dialog" class="image-modal" class:open={isVisible}>
	<button
		class="btn-close"
		onclick={toggleModal}
		aria-label="Fermer les informations complémentaires"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="currentColor"
		>
			<path
				d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
			/>
		</svg>
	</button>
	<div class="modal-div">
		<ul class="images-container">
			{#each images as image}
				<li>
					<img src={image.src} alt={image.alt} />
				</li>
			{/each}
		</ul>
		<div class="text-container">
			<h2>{title}</h2>
			<p>{@html text}</p>
		</div>
	</div>
</div>

{#if isVisible}
	<div class="backdrop" inert={isVisible}></div>
{/if}

<style>
	.image-with-modal {
		cursor: zoom-in;
		border: 0;
		padding: 0;
		background-color: transparent;
	}

	.image-modal {
		border: 0;
		padding: 0;
		border-radius: 2rem;
		font: inherit;
		position: relative;
		max-width: 80%;
		list-style: none;
		background-color: var(--color-background);
		display: none;

		&.open {
			display: block;
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			z-index: 9;
		}

		.modal-div {
			display: flex;
			flex-direction: column;
			list-style: none;
		}

		.btn-close {
			position: absolute;
			right: 0.5rem;
			top: 0.5rem;
			border-radius: 99px;
			background-color: transparent;
			border: none;
			cursor: pointer;
			display: grid;
			padding: 0.5rem;
			z-index: 9;
			background-color: var(--color-surface);
			color: var(--color-on-surface);
		}

		.images-container {
			display: flex;
			list-style: none;
			margin: 0;
			padding: 0;
			overflow-x: auto;
			gap: 1rem;
			padding: 1rem;

			li {
				flex-shrink: 0;

				img {
					border-radius: 0.75rem;
				}
			}
		}

		.text-container {
			padding: 1rem;
			padding-top: 0;
		}
	}

	.backdrop {
		content: '';
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.75);
		backdrop-filter: blur(5px);
		z-index: 0;
		width: 100vw;
		height: 100vh;
	}
</style>
