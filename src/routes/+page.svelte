<script>
	import Hero from '$lib/components/Hero.svelte';
	import Navigation from '$lib/components/Header.svelte';

	import '../styles/global.css';
	import Phytoplancton from '$lib/components/Phytoplancton.svelte';
</script>

<Navigation />

<main>
	<Hero />
	<Phytoplancton />
</main>
