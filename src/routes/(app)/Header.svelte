<header>
	<span>Bocean</span>
	<a href="/">Page principale</a>

	<nav>
		<b>Défis</b>

		<a href="/cookie">Cookie Clicker</a>
		<a href="/pokemon">Catch them All</a>
		<a href="/ellisa">Formulaire impossible</a>
		<a href="/captcha">Résoudre un captcha</a>
	</nav>
</header>

<style>
	header {
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0 2rem;

		margin-bottom: 2rem;

		font-size: 1.125rem;
		line-height: 1.5rem;

		nav {
			display: flex;
			align-items: center;
			gap: 1rem;

			a {
				color: inherit;
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	@media (max-width: 768px) {
		header {
			height: auto;
			padding: 2rem;
			align-items: flex-start;
			flex-direction: column;
			gap: 1rem;

			nav {
				flex-direction: column;
				gap: 0.5rem;
				align-items: flex-start;
			}
		}
	}
</style>
