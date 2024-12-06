<section>
	<div class="content">
		<h1>Les Courants: je sais pas</h1>
	</div>
	<div class="container">
		<img src="poisson1.png" alt="Fish" class="Poisson" />
		<div class="overlay">
			<div class="text">
				<p>Dans notre corps, c’est le sang qui circule dans nos veines et nos artères pour transporter tout ce dont on a besoin, comme l’oxygène et les nutriments. L’océan fait pareil avec ses courants marins, comme le Gulf Stream ! Ces courants déplacent des nutriments, régulent le climat et transportent la chaleur à travers la planète.
					Mais attention, si nos veines sont bloquées, notre corps ne peut plus fonctionner correctement. Pour l’océan, c’est pareil : la pollution peut perturber ces courants essentiels. C’est pour ça qu’il faut protéger l’océan, pour qu’il reste en bonne santé et que tout continue de bien tourner !
				</p>

			</div>
		</div>
	</div>
</section>

<style>
	section {
		height: 100svh;
		background-image: url('/fond_tortue.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

  .container {
      top: 4rem;
      left: 60rem;
      position: relative;
  }

  .Poisson {
      display: block;
  }

  .overlay {
      position: absolute;
      top: 1rem;
      left: -35rem;
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

      color:white;
  }
</style>
