<script>
	import ModalDetails from '$components/ModalDetails.svelte';
</script>

<section>
	<div class="content">
		<h1>Le phytoplancton</h1>
	</div>
	<div class="container">
		<ModalDetails
			title="Le phytoplancton"
			text="Le saviez vous ? Nos poumons sont super importants : <br />
					Ils nous aident à respirer en absorbant l’oxygène et en rejetant le dioxyde de carbone.<br
					/>
					Eh bien, l’océan fait un peu pareil ! Grâce au phytoplancton, ces toutes petites plantes dans
					l’eau, <br />
					il produit plus de la moitié de l’oxygène qu’on respire. Incroyable, non ? <br />
					Mais attention, tout comme nos poumons peuvent être abîmés par la pollution de l’air,<br
					/>
					l’océan est fragilisé par les déchets et trop de CO2. <br />
					Alors, en protégeant les océans, on prend soin de ce qui nous permet de respirer !"
			images={[]}
		>
			<img
				src="/home/interactive/phytoplancton.png"
				alt="Phytoplankton"
				class="Phytoplancton"
				width="150"
			/>
		</ModalDetails>
	</div>
	<img class="Phytos" src="/home/interactive/phytoplanctons.png" alt="Phytos" width="300" />
</section>

<style>
	section {
		height: 100svh;
		background-image: url('/home/fond-phytoplancton.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		position: relative;
	}

	.container {
		top: 19rem;
		left: 10rem;
		position: absolute;
	}

	.Phytoplancton {
		display: block;
	}

	.Phytos {
		position: absolute;
		right: 5rem;
		top: 15rem;
	}

	.content {
		padding-left: 2rem;
		padding-right: 2rem;

		max-width: 1440px;
		margin: 0 auto;
	}

	h1 {
		padding-top: 4rem;
		max-width: 25ch;
		font-size: 3rem;
		line-height: 1;
		color: var(--color-on-background);
	}
</style>
