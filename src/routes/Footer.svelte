<script lang="ts">
	import { flip } from 'svelte/animate';

	let {} = $props();

	type membre = {
		Nom: string;
		lienGit: string;
        lienImg: string;
	};

    const membres: membre[] = [
        {
            Nom: 'Clement',
            lienGit: 'https://github.com/Clembs/',
            lienImg: 'https://avatars.githubusercontent.com/u/67973777?v=4'
        },
        {
            Nom: 'Nino',
            lienGit: 'https://github.com/Zerlaxv1',
            lienImg: 'https://avatars.githubusercontent.com/u/62764982?v=4'
        },
        {
            Nom: 'Valentin',
            lienGit: 'https://github.com/Paktoutseul',
            lienImg: 'https://avatars.githubusercontent.com/u/190738117?v=4'
        },
        {
            Nom: 'Adam',
            lienGit: 'https://github.com/Garou1111',
            lienImg: 'https://avatars.githubusercontent.com/u/141950984?v=4'
        },
        {
            Nom: 'Mateo',
            lienGit: 'https://github.com/Zeynnz',
            lienImg: 'https://avatars.githubusercontent.com/u/98015715?v=4'
        },
        {
            Nom: 'Benoît',
            lienGit: 'https://github.com/dwakk',
            lienImg: 'https://avatars.githubusercontent.com/u/111376922?v=4'
        },
        {
            Nom: 'Lapatate82',
            lienGit: 'https://github.com/Lapatate82',
            lienImg: 'https://avatars.githubusercontent.com/u/153225082?v=4'
        },
        {
            Nom: 'Dapoce',
            lienGit: 'https://github.com/Dapoce',
            lienImg: 'https://avatars.githubusercontent.com/u/104147056?v=4'
        },
        {
            Nom: 'Eliot',
            lienGit: 'https://github.com/Eliitt',
            lienImg: 'https://avatars.githubusercontent.com/u/77792451?v=4'
        },
        {
            Nom: 'Gerald',
            lienGit: 'https://github.com/gerald-lbn',
            lienImg: 'https://avatars.githubusercontent.com/u/36128190?v=4'
        }
    ];

</script>

<footer>
	<div class="footer">
		<div class="gauche">
			<p>Projet réalisé par :</p>
			<li class="list-membres">
                {#each membres as membre}
                    <a href={membre.lienGit} class="membre">
                        <img src={membre.lienImg} alt={membre.Nom} width="40" height="40" />
                        <p>{membre.Nom}</p>
                    </a>
                {/each}
			</li>
		</div>
		<div class="millieu"></div>
		<div class="droite">
			<a href="https://www.nuitdelinfo.com/inscription/defis/174" class="sujet">sujet</a>
			<a href="https://github.com/Clembs/nuit-de-linfo-2024" class="code-source">Code Source</a>
		</div>
	</div>

	<style>
		.footer {
			display: flex;
			flex-direction: row;
			background-color: #ffffff;
			color: white;
			text-align: left;
			padding: 1rem;
		}

		.list-membres {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			justify-content: center;
			list-style-type: none;
			padding: 0;
		}

		.membre {
			margin: 0 1rem;
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		.droite {
			flex: 1;
		}

        .gauche,
		.millieu {
			flex: 2;
		}

		.droite {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-end;
		}

		.sujet {
			color: #000000;
			text-decoration: none;
			margin: 1rem;
		}

		.code-source {
			color: #000000;
			text-decoration: none;
			margin: 1rem;
		}

        a > img {
            border-radius: 50%;
            padding: 0.2rem;
        }
	</style>
</footer>
