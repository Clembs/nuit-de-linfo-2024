<section class="container">
	<div class="content">
		<h1>L'Océan et Nous: Un Corps, Une Planète à Préserver</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, odio eu suscipit
			scelerisque, libero ante mollissection.
		</p>

		<div class="actions">
			<a href="#">Dive in</a>
			<a href="#">Learn more</a>
		</div>
	</div>
</section>

<style>
	.container {
		background-color: lightblue;
		height: 100svh;
	}

	.content {
		padding-left: 2rem;
		padding-right: 2rem;

		max-width: 1440px;
		margin: 0 auto;
	}

	h1 {
		padding-top: 12rem;

		max-width: 896px;

		font-size: 3rem;
		line-height: 1;
	}

	p {
		margin-top: 0.5rem;
		max-width: 768px;

		font-size: 1.125rem;
		line-height: 1.5rem;

		color: var(--text-secondary);
	}

	.actions {
		margin-top: 1rem;
		display: flex;
		gap: 1rem;

		a {
			padding: 0.5rem 1rem;
			text-decoration: none;
			border-radius: 0.5rem;

			font-weight: 550;
			height: 2.5rem;

			display: flex;
			align-items: center;
			justify-content: center;

			border: 2px solid var(--border-primary);
		}

		a:first-child {
			background-color: #ffb22d;
			color: var(--text-primary);

			&:hover {
				background-color: #ff9f00;
			}
		}

		a:last-child {
			background-color: #ffffff;
			color: var(--text-primary);

			&:hover {
				background-color: #f5f5f5;
			}
		}
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
			padding-top: 6rem;
			max-width: 100%;
		}

		p {
			font-size: 1rem;
			max-width: 100%;
		}

		.actions {
			flex-direction: column;

			a {
				width: 100%;
			}
		}
	}
</style>
