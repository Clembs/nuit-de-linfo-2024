<script lang="ts">
	import { onMount } from 'svelte';
	import Poisson from './Poisson.svelte';
	import type { PoissonSize } from './types';

	type Banc = {
		size: PoissonSize;
	}[];

	let poissons: Banc[] = $state([[], []]);

	function generatePoisson(banc: Banc) {
		const seed = Math.random();
		let size: PoissonSize;
		if (seed < 0.3) {
			size = 'small';
		} else if (seed < 0.7) {
			size = 'medium';
		} else {
			size = 'large';
		}

		banc.push({
			size: size
		});
	}

	onMount(() => {
		setInterval(() => {
			poissons.forEach((banc) => {
				generatePoisson(banc);
			});
		}, 1000);
	});
</script>

<main>
	<div id="eau">
		<div id="pecheur-sur-radeau">
			<img
				id="pecheur"
				src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstatic9.depositphotos.com%2F1654714%2F1177%2Fi%2F950%2Fdepositphotos_11776857-stock-photo-fisherman-with-ruler.jpg&sp=1733437898T88b7a1a47ceea66dc31970f9d689234413c1e41158a57f191eb53901df3c5c3c"
				width="120"
				alt=""
			/>

			<img
				id="radeau"
				src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.aquaportail.com%2Fpictures1811%2Fradeau-bois.jpg&sp=1733437973Tc88625843c66790096b666b170f56753d617964e81503b8fdd86061f9aa18448"
				width="300"
				alt=""
			/>
		</div>

		<img
			src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fejvtrt3BqkxZ0iZmNVbIwHaE8%26pid%3DApi&sp=1733438137T3f3e62103fc3ebf9a53bf53e79c0ae15dc3d6a89da99c2bf18da1895edf3e721"
			alt=""
		/>

		<div id="poissons">
			{#each poissons as banc}
				<div class="banc">
					{#each banc as poisson}
						<Poisson size={poisson.size} />
					{/each}
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	#pecheur-sur-radeau {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		z-index: 9;
		top: -50%;
		transform: translateY(50%);

		#pecheur {
			position: absolute;
			top: 50px;
			left: 75px;
		}
	}

	#eau {
		position: absolute;
		bottom: 0;
		width: 100vw;
		height: 70vh;

		& > img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	#poissons {
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.banc {
			display: flex;
		}
	}
</style>
