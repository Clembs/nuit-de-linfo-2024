<script>
	import ModalDetails from '$components/ModalDetails.svelte';
</script>

<section>
	<div class="content">
		<h1>Les Coraux: je sais pas</h1>
	</div>
	<div class="container">
		<ModalDetails
			title="Les coraux"
			text="Tu sais, dans notre corps, c’est le système immunitaire qui nous protège contre les maladies et nous garde en bonne santé. Eh bien, pour l’océan, ce rôle est joué par les récifs coralliens. Ces endroits sont pleins de vie, comme de vraies petites villes sous-marines ! Ils abritent plein d’espèces et protègent aussi les côtes contre les tempêtes et l’érosion.
				Le polluer avec tous ces sacs plastique ça revient à rendre l'océan  vulnérable, un peu comme un corps sans défense face aux maladies. Alors, en préservant les récifs coralliens, on aide l’océan à rester fort et en bonne santé. C’est super important !"
			images={[]}
		>
			<img src="corail.png" alt="Corail" class="Corail" />
		</ModalDetails>
	</div>
</section>

<style>
	section {
		height: 100svh;
		background-image: url('/home/fond-coraux.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.container {
		top: 12rem;
		left: 7rem;
		position: relative;
	}

	.Corail {
		display: block;
	}

	.overlay {
		position: absolute;
		top: 1rem;
		left: 20rem;
		height: 19rem;
		width: 40rem;
		opacity: 0;
		transition: 0.5s ease;
		background: linear-gradient(90deg, rgba(59, 59, 59, 0.85) 0%, rgba(36, 57, 99, 0.85) 100%);
		border-radius: 0.5rem;
	}

	.container:hover .overlay {
		opacity: 1;
	}

	.text {
		color: white;
		font-size: 1.3rem;
		position: absolute;
		top: 5%;
		left: 5%;
		right: 5%;
	}

	.content {
		padding-left: 2rem;
		padding-right: 2rem;

		max-width: 1440px;
		margin: 0 auto;
	}

	.text {
		color: white;
		font-size: 1.3rem;
		position: absolute;
		top: 5%;
		left: 5%;
		right: 5%;
	}

	h1 {
		padding-top: 4rem;

		max-width: 896px;

		font-size: 3rem;
		line-height: 1;

		color: white;
	}
</style>
