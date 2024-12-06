<script lang="ts">
	import { page } from "$app/stores";

	$: type = $page.url.searchParams.get("type");
	$: target = $page.url.searchParams.get("target");

	export let name: string = "";
	export let text: string = "";
	export let tags: string[] = [];
	export let more: string = "";
	export let imgSrc: string = "";

	const typeData: Record<
		string,
		{ name: string; text: string; more: string; imgSrc: string; tags: string[] }
	> = {
		eau: {
			name: "Les océans : gardiens de la vie et de l'équilibre climatique",
			text: "La préservation de l’écosystème marin est essentielle pour maintenir l’équilibre écologique de la planète. Les océans couvrent plus de 70 % de la surface terrestre et abritent une biodiversité exceptionnelle. Ils jouent un rôle clé dans la régulation du climat en absorbant le dioxyde de carbone et en produisant une grande partie de l’oxygène que nous respirons. Cependant, cet écosystème est menacé par des activités humaines telles que la surpêche, la pollution plastique, les marées noires, et l’acidification des océans due au réchauffement climatique. Ces menaces entraînent la dégradation des récifs coralliens, la disparition de nombreuses espèces marines, et la perturbation des chaînes alimentaires. Pour préserver cet environnement vital, des mesures sont nécessaires, comme la création d’aires marines protégées, la réduction des émissions de carbone, et la lutte contre les déchets plastiques. Il est aussi crucial de promouvoir une pêche durable et de sensibiliser les populations à l’importance des océans. Protéger l’écosystème marin, c’est garantir la santé de la planète et de ses habitants.",
			more: "https://www.wwf.fr/champs-daction/ocean",
			imgSrc: "../../ocean.jpg",
			tags: ["Océan", "Biodiversité marine"],
			
		},
		
		plante: {
			name: "Les forêts : un trésor vital menacé",
			text: "La déforestation est la destruction ou l'élimination massive de forêts, principalement due aux activités humaines. Elle constitue une menace majeure pour l’environnement et les écosystèmes. Chaque année, des millions d’hectares de forêts disparaissent dans le monde, en particulier dans des régions comme l'Amazonie, l'Asie du Sud-Est et l'Afrique subsaharienne. Les causes principales de la déforestation incluent l’agriculture intensive, l’élevage, l’exploitation forestière illégale, et l’urbanisation. Les terres déboisées servent souvent à la culture de produits comme le soja, l’huile de palme ou encore l’élevage de bétail. Ses impacts sont nombreux : elle entraîne la perte de biodiversité, en mettant en danger des milliers d’espèces animales et végétales. Elle aggrave aussi le réchauffement climatique, car les arbres, en stockant le dioxyde de carbone, jouent un rôle crucial dans la régulation des gaz à effet de serre. En outre, la déforestation affecte les populations locales, notamment les communautés autochtones, qui dépendent des forêts pour leur subsistance. Des initiatives comme la reforestation, l’adoption de pratiques agricoles durables et la lutte contre l’exploitation illégale sont essentielles pour y remédier. Protéger les forêts est une priorité pour préserver notre planète et les générations futures.",
			more: "https://foret.ign.fr/",
			imgSrc: "../../foret.jpeg",
			tags: ["Forêts", "Déforestation"],
		},

		electricite: {
			name: "La transition énergétique : un défi crucial pour un avenir durable",
			text: "La transition énergétique représente un défi majeur pour concilier les besoins croissants en énergie et la préservation de l’environnement. En abandonnant progressivement les combustibles fossiles, responsables de la majeure partie des émissions de gaz à effet de serre, elle cherche à limiter les impacts du changement climatique. Ce changement exige des investissements massifs dans les infrastructures, comme les parcs solaires ou éoliens, tout en préservant les écosystèmes. Par exemple, les éoliennes, bien que bénéfiques pour réduire la pollution, peuvent perturber la faune aviaire, tandis que les barrages modifient les écosystèmes aquatiques. De plus, l’extraction de minerais comme le lithium ou le cobalt, indispensables aux technologies vertes, soulève des enjeux écologiques et sociaux. La transition énergétique impose aussi une transformation des modes de consommation, en incitant à économiser l’énergie et à adopter des solutions durables. Elle exige une coopération mondiale pour garantir que cette évolution profite à la planète tout en répondant aux besoins des populations humaines.",
			more: "https://www.wwf.fr/champs-daction/climat-energie/transition-energetique",
			imgSrc: "../../energie.jpg",
			tags: ["Energie", "Transition énergétique"],
		},

		feu: {
			name: "Incendies de forêts : une menace pour la nature et la biodiversité",
			text: "Les incendies de forêt représentent une menace majeure pour les écosystèmes et la faune. Ils détruisent des habitats entiers, mettant en péril la survie de nombreuses espèces animales et végétales. En quelques heures, des hectares de forêts peuvent être réduits en cendres, entraînant une perte irréversible de biodiversité. Ces feux, souvent causés par des activités humaines (défrichements, mégots mal éteints) ou aggravés par le réchauffement climatique, perturbent l'équilibre écologique. Les animaux, incapables de fuir à temps, peuvent être tués ou déplacés, ce qui fragilise les chaînes alimentaires. Les sols, appauvris par les flammes, perdent leur capacité à se régénérer, favorisant l’érosion. Les incendies émettent également de grandes quantités de gaz à effet de serre, amplifiant le changement climatique. Pour limiter ces impacts, il est crucial de prévenir les feux par des campagnes de sensibilisation, un entretien des zones boisées, et une gestion efficace des forêts. Protéger les écosystèmes des incendies, c’est préserver la richesse de notre planète.",
			more: "https://www.cnpf.fr/gestion-durable-des-forets/multifonctionnalite/incendies-et-feux-de-forets",
			imgSrc: "../../feux.jpeg",
			tags: ["Incendies", "Biodiversité"],
		},

		default: {
			name: "Inconnu",
			text: "Type non reconnu. Veuillez vérifier votre URL.",
			more: "",
			imgSrc: "https://placehold.co/600x400?text=Erreur",
			tags: [],
		},
	};

	$: currentData = typeData[type ?? "default"];
	$: text = currentData.text;
	$: more = currentData.more;
	$: imgSrc = currentData.imgSrc;
	$: tags = currentData.tags;
</script>

<div class="container">
	<div class="card">
		<img src={imgSrc} alt={name} />
		<div class="content">
			{#if tags.length > 0}
				<div class="tags">
					{#each tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			{/if}

			<div class="name">{currentData.name}</div>

			<p>{text}</p>

			<div class="buttons">
				{#if target}
					<a href={target} target="_blank" rel="noopener noreferrer">
						<button>Accéder au site</button>
					</a>
				{/if}
				{#if more}
					<a href={more} target="_blank" rel="noopener noreferrer">
						<button>En savoir plus</button>
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 600px;
		margin: 0 auto;
		margin-top: 20vh;
	}

	.card {
		background: white;
		border: 1px solid #bacdd8;
		padding: 16px;
		border-radius: 12px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	}

	img {
		width: 100%;
		border-radius: 12px;
		height: 400px;
		object-fit: cover;
	}

	.name {
		font-size: 24px;
		font-weight: 600;
		margin-top: 16px;
		color: #333;
	}

	.tags {
		margin-bottom: 16px;
	}

	.tag {
		display: inline-block;
		padding: 4px 8px;
		margin-right: 8px;
		border: 1px solid #e5eaed;
		border-radius: 50px;
		font-size: 12px;
		font-weight: 600;
		color: #788697;
	}

	p {
		font-size: 14px;
		color: #7f8c9b;
		line-height: 1.6;
	}

	.buttons {
		display: flex;
		justify-content: space-between;
		margin-top: 16px;
	}

	a {
		text-decoration: none;
	}

	button {
		border: none;
		padding: 12px 24px;
		border-radius: 50px;
		font-weight: 600;
		color: #0077ff;
		background-color: #e0efff;
		cursor: pointer;
	}

	button:focus,
	button:hover {
		background-color: #0077ff;
		color: #e0efff;
	}
</style>
