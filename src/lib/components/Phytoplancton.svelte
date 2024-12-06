<section>
	<div class="container">
		<img src="phytoplancton.png" alt="Phytoplankton" class="Phytoplancton" />
		<div class="overlay">
			<div class="text">
				Poumons et oxygénation vs phytoplancton et production d'oxygène :<br />
				Les poumons permettent l'oxygénation du corps humain, tandis que les océans (via le phytoplancton)
				<br />
				produisent une grande partie de l'oxygène que nous respirons
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
		background-image: url('/underwater.jpg');
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
		top: 5rem;
		left: 7rem;
		height: 13rem;
		width: 30rem;
		opacity: 0;
		transition: 0.5s ease;
		background: linear-gradient(90deg, #3b3b3b 0%, #243963 100%);
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
		top: 20rem;
	}
</style>
