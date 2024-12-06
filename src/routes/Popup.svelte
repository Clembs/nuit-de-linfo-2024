<script lang="ts">
	import { type PopupContents } from '$lib/PopupContents';
	import type { Snippet } from 'svelte';

	let {
		images,
		title,
		children: graphic,
		text
	}: PopupContents & {
		children: Snippet;
	} = $props();

	let isVisible = $state(false);
	let dialog: HTMLDialogElement;

	function togglePopup() {
		isVisible = !isVisible;
		if (isVisible) {
			dialog.showModal();
		} else {
			dialog.close();
		}
	}

	function onclick() {
		togglePopup();
	}
</script>

<button class="image-with-modal" {onclick}>
	{@render graphic()}
</button>

<dialog class="image-modal" bind:this={dialog}>
	<button class="btn-close" {onclick} aria-label="Ferme la pop-up">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="#000000"
			><path
				d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
			/></svg
		>
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
			<p>{text}</p>
		</div>
	</div>
</dialog>

<style>
	.image-with-modal {
		cursor: zoom-in;
		border: 0;
		padding: 0;
		background-color: transparent;
	}

	.modal-div {
		display: flex;
		flex-direction: row;
		list-style: none;
		gap: 1rem;
	}

	.image-modal {
		border: 0;
		padding: 1rem;
		border-radius: 2rem;
		font: initial;
		font-family: var(--font-modern);
		box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.3);
		position: relative;
		max-width: 80%;
		list-style: none;

		.btn-close {
			position: absolute;
			right: 1rem;
			top: 1rem;
			border-radius: 99px;
			background-color: transparent;
			border: none;
			cursor: pointer;
		}

		.images-container {
			display: flex;
			flex-direction: column;
			/* flex-wrap: wrap; */
			list-style: none;
			margin: 0;
			padding: 0;
			flex-shrink: 0;
			height: 100vh;

			li {
				height: 100%;
			}
		}

		img {
			max-width: 100%;
			height: auto;
			/* max-width: 50%; */
			object-fit: contain;

			@media (max-width: 900px) {
				max-width: 100%;
				position: sticky;
				top: 0;
				left: 0;
				z-index: 1;
			}
		}

		&::backdrop {
			background-color: rgba(0, 0, 0, 0.75);
			backdrop-filter: blur(5px);
		}
	}
</style>
