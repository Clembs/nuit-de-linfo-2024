<script lang="ts">
	import type { PoissonSize } from './types';

	let {
		size
	}: {
		size: PoissonSize;
	} = $props();

	const poissonSizes = {
		small: {
			src: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.JjNw4YrjZxGvkDA4jz6sHwHaDS%26pid%3DApi&sp=1733439272T64b47b5ba75f46ce242ab2c1268113685dc4c7f4c56e35f2ba069b0439643136',
			height: 50
		},
		medium: {
			src: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimg-3.journaldesfemmes.fr%2FunDJuktPc77ZqtIdE3LDNv3SBWw%3D%2F910x607%2Fsmart%2F559fb1295f9242d6b353121bfca9f8dd%2Fccmcms-jdf%2F10661950.jpg&sp=1733439315T95c47ef8e3f0539d7e22f3f611b73c1b63b0f3867f2890d620dfbbc2c4e0f4c0',
			height: 100
		},
		large: {
			src: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bclCAAvInGrt5uDIj64nogHaEo%26pid%3DApi&sp=1733439295T6d6398b9accb200dcabb59bc342b690837bf9b25dd8f541360a4d44184be0628',
			height: 200
		}
	};
</script>

<img
	src={poissonSizes[size].src}
	alt="Un poisson de taille {size}"
	height={poissonSizes[size].height}
/>
