<script>
	import Button from '$components/Button.svelte';
</script>

<section id="hero">
	<div class="content">
		<h1>L'océan et nous: un corps, une planète à préserver</h1>
		<p>
			Suivez-nous dans un voyage interactif pour découvrir comment l'océan et notre corps se
			ressemblent et pourquoi il est si important de le protéger. Cliquez sur les différents
			éléments pour en savoir plus.
		</p>

		<div class="actions">
			<Button inline href="#">Plonger dedans</Button>
		</div>
	</div>
</section>

<style>
	#hero {
		height: 100svh;
		background-image: url('/home/fond-ile.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;

		padding-left: 2rem;
		padding-right: 2rem;

		max-width: 1440px;
		margin: 0 auto;
	}

	h1 {
		font-size: 3rem;
		line-height: 1;
		max-width: 25ch;
		text-wrap: balance;
	}

	p {
		margin-top: 0.5rem;
		max-width: 768px;

		font-size: 1.125rem;
		line-height: 1.5rem;

		color: var(--text-secondary);
	}

	.actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
			max-width: 100%;
		}

		p {
			font-size: 1rem;
			max-width: 100%;
		}
	}
</style>
