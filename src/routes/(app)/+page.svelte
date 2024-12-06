<main>
	<section id="1">
		<img src="images/1.png" alt="truc" />

		<img class="bulles" src="images/bulles.png" alt="Bulles" />
	</section>
	<section id="2"></section>
	<section id="3"></section>
	<section id="4"></section>
	<section id="5"></section>
	<section id="6"></section>
</main>

<style>
	main {
		position: relative;
	}

	section {
		height: 100svh;
	}

	section[id='1'] {
		height: 200svh;

		background: linear-gradient(#c0deec, #b6e2ed);
		position: relative;

		.bulles {
			overflow: hidden;
			position: sticky;
			top: 50%;
			width: 100%;
			z-index: 1;
		}
	}

	section[id='2'] {
		height: 200svh;

		background: linear-gradient(#b6e2ed, #24748f);
	}

	section[id='3'] {
		background: linear-gradient(#24748f, #1f5c7a);
	}

	section[id='4'] {
		background: linear-gradient(#1f5c7a, #153351);
	}

	section[id='5'] {
		background: linear-gradient(#153351, #0a0f29);
	}

	section[id='6'] {
		background: linear-gradient(#0a0f29, #000000);
	}
</style>
