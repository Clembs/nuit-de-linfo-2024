<script>
	import ModalDetails from '$components/ModalDetails.svelte';
</script>

<section>
	<div class="content">
		<h1>Les courants</h1>
	</div>
	<div class="container">
		<ModalDetails
			title="Les courants"
			text="Dans notre corps, c’est le sang qui circule dans nos veines et nos artères pour transporter tout ce dont on a besoin, comme l’oxygène et les nutriments. L’océan fait pareil avec ses courants marins, comme le Gulf Stream ! Ces courants déplacent des nutriments, régulent le climat et transportent la chaleur à travers la planète.
					Mais attention, si nos veines sont bloquées, notre corps ne peut plus fonctionner correctement. Pour l’océan, c’est pareil : la pollution peut perturber ces courants essentiels. C’est pour ça qu’il faut protéger l’océan, pour qu’il reste en bonne santé et que tout continue de bien tourner !"
			images={[]}
		>
			<img src="/home/interactive/tortue.png" alt="Tortue" class="Poisson" width="400" />
		</ModalDetails>
	</div>
</section>

<style>
	section {
		height: 100svh;
		background-image: url('/home/fond-courant.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.container {
		top: 4rem;
		left: 3rem;
		position: relative;
	}

	.Poisson {
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
