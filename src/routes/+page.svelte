<script>
	import Hero from '$lib/components/Hero.svelte';
	import Navigation from '$lib/components/Header.svelte';

	import '../styles/global.css';
	import Phytoplancton from '$lib/components/Phytoplancton.svelte';
	import Coraux from '$lib/components/Coraux.svelte';
	import CourantEtreVivant from '$lib/components/CourantEtreVivant.svelte';
	import Profondeur from '$lib/components/Profondeur.svelte';
</script>

<Navigation />

<main>
	<Hero />
	<Phytoplancton />
	<Coraux />
	<CourantEtreVivant />
	<Profondeur />
</main>
