<script>
	import Coraux from './Coraux.svelte';
	import CourantEtreVivant from './CourantEtreVivant.svelte';
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Phytoplancton from './Phytoplancton.svelte';
	import Profondeur from './Profondeur.svelte';
</script>

<Header />
<main>
	<Hero />
	<Phytoplancton />
	<Coraux />
	<CourantEtreVivant />
	<Profondeur />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
