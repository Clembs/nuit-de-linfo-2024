<script>
	import ModalDetails from '$components/ModalDetails.svelte';
</script>

<section>
	<div class="content">
		<h1>Les profondeurs</h1>
	</div>
	<div class="container">
		<ModalDetails
			title="Les profondeurs"
			text="Tu vois, l’océan et notre corps se ressemblent tellement ! C’est comme si la planète
            entière était un grand organisme vivant. Les courants marins fonctionnent comme notre
            sang, les récifs coralliens comme notre système immunitaire, et le phytoplancton, ces
            petits héros invisibles, sont les poumons de la Terre. Finalement, l’océan, c’est comme le
            cerveau de la planète : il régule tout, du climat aux cycles de l’eau. Alors, tout comme
            on prend soin de notre corps, on doit absolument protéger l’océan. Parce que préserver
            l’océan, c’est préserver notre avenir et celui de toute la planète. Merci de m’avoir suivi
            , j’espère que tu voudras, tout comme moi, prendre soin de ce monde merveilleux !"
			images={[]}
		>
			<img
				src="/home/interactive/poisson_triangle.png"
				alt="Poisson triangulaire"
				class="Rock"
				width="80"
			/>
		</ModalDetails>
	</div>
</section>

<style>
	section {
		height: 100svh;
		background-image: url('/home/fond-profondeurs.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.container {
		top: 20rem;
		left: 10rem;
		position: relative;
	}

	.Rock {
		display: block;
	}

	.content {
		padding-left: 2rem;
		padding-right: 2rem;

		max-width: 1440px;
		margin: 0 auto;
	}

	h1 {
		padding-top: 4rem;

		max-width: 896px;

		font-size: 3rem;
		line-height: 1;

		color: white;
	}
</style>
