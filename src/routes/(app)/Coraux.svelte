<script>
	import ModalDetails from '$components/ModalDetails.svelte';
</script>

<section>
	<div class="content">
		<h1>Les coraux</h1>
	</div>
	<div class="container">
		<ModalDetails
			title="Les coraux"
			text="Tu sais, dans notre corps, c’est le système immunitaire qui nous protège contre les maladies et nous garde en bonne santé. Eh bien, pour l’océan, ce rôle est joué par les récifs coralliens. Ces endroits sont pleins de vie, comme de vraies petites villes sous-marines ! Ils abritent plein d’espèces et protègent aussi les côtes contre les tempêtes et l’érosion.
				Le polluer avec tous ces sacs plastique ça revient à rendre l'océan  vulnérable, un peu comme un corps sans défense face aux maladies. Alors, en préservant les récifs coralliens, on aide l’océan à rester fort et en bonne santé. C’est super important !"
			images={[]}
		>
			<img src="/home/interactive/corail.png" alt="Corail" class="Corail" />
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
		position: relative;
		top: 14rem;
		left: 6rem;

		&:hover img {
			position: relative;

			&::before {
				content: '';
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				width: 100%;
				height: 100%;
				background-image: url('/home/interactive/bubbles-overlay.gif');
			}
		}
	}

	.Corail {
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
