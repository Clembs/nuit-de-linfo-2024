<section>
	<div class="content">
		<h1>Le phytoplancton: je sais pas</h1>
	</div>
	<div class="container">
		<img src="phytoplancton.png" alt="Phytoplankton" class="Phytoplancton" />
		<div class="overlay">
			<div class="text">
				<p>Le saviez vous ? Nos poumons sont super importants : <br>
				Ils nous aident à respirer en absorbant l’oxygène et en rejetant le dioxyde de carbone.<br>
				Eh bien, l’océan fait un peu pareil ! Grâce au phytoplancton, ces toutes petites plantes dans l’eau, <br>
				il produit plus de la moitié de l’oxygène qu’on respire. Incroyable, non ? <br>
				Mais attention, tout comme nos poumons peuvent être abîmés par la pollution de l’air,<br>
				l’océan est fragilisé par les déchets et trop de CO2. <br>
				Alors, en protégeant les océans, on prend soin de ce qui nous permet de respirer !</p>
			</div>
		</div>
	</div>
	<div>
		<img class="Phytos" src="phytoplanctons.png" alt="Phytos" />
	</div>
</section>

<style>
	section {
		height: 100svh;
		background-image: url('/fond_haut.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	.container {
		top: 8rem;
		left: 10rem;
		position: relative;
	}

	.Phytoplancton {
		display: block;
	}

	.overlay {
		position: absolute;
		top: 4rem;
		left: 5rem;
		height: 26rem;
		width: 30rem;
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

	.Phytos {
		position: relative;
		left: 80rem;
		top: 16rem;
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

			color:white;
  }

</style>
