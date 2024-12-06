<script>
	import { flip } from "svelte/animate";

	let {} = $props();
</script>

<footer>
	<div class="footer">
        <div class="gauche">
            <p>Projet réalisé par :</p>
            <li class="list-membres">
                <a href="https://github.com/Clembs/" class="membre">
                    <img
                        src="https://avatars.githubusercontent.com/u/67973777?v=4"
                        alt="Clement"
                        width="40"
                        height="40"
                    />
                    <p>Clement</p>
                </a>
                <a href="https://github.com/Zerlaxv1" class="membre">
                    <img
                        src="https://avatars.githubusercontent.com/u/62764982?v=4"
                        alt="Nino"
                        width="40"
                        height="40"
                    />
                    <p>Nino</p>
                </a>
            </li>
        </div>
        <div class="millieu">

        </div>
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
			display: flex;
            flex-direction: column;
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

        .gauche, .droite {
            flex: 1;
        }

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
	</style>
</footer>
