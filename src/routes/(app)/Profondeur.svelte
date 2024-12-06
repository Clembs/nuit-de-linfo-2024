<section>
	<div class="content">
		<h1>Les Profondeurs : je sais pas</h1>
	</div>
	<div class="container">
		<img src="rocks.png" alt="Rock" class="Rock" />
		<div class="overlay">
			<div class="text">
				<p>Tu vois, l’océan et notre corps se ressemblent tellement ! C’est comme si la planète entière était un grand organisme vivant. Les courants marins fonctionnent comme notre sang, les récifs coralliens comme notre système immunitaire, et le phytoplancton, ces petits héros invisibles, sont les poumons de la Terre.
					Finalement, l’océan, c’est comme le cerveau de la planète : il régule tout, du climat aux cycles de l’eau. Alors, tout comme on prend soin de notre corps, on doit absolument protéger l’océan. Parce que préserver l’océan, c’est préserver notre avenir et celui de toute la planète. Merci de m’avoir suivi , j’espère que tu voudras, tout comme moi,  prendre soin de ce monde merveilleux !
				</p>
			</div>
		</div>
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
      top: 20rem;
      left: 10rem;
      position: relative;
  }

  .Rock {
      display: block;
  }

  .overlay {
      position: absolute;
      top: -15rem;
      left: 18rem;
      height: 28rem;
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
