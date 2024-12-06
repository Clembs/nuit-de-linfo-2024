<h1>Génération de QR Code</h1>
<script>
	let URL = $state();
    let scoops = $state();
    function generate() {
    }
</script>
<p>Entrer son URL ici :</p>

<p><input bind:value={URL} /></p>

<p>{#each ["herbizarre", "tortank", "salamèche", "luxray"] as pokemon}
	<label>
		<input
			type="radio"
			name="pokemons"
			value={pokemon}
			bind:group={scoops}
		/>

		{pokemon}
        {#if pokemon == "herbizarre"}
            <img  src="./herbizarre.png" alt = "herbizarre" width="100" height="100"/>
        {:else if pokemon == "tortank"}
            <img  src="./tortank.jpg" alt = "tortank" width="100" height="100"/>
        {:else if pokemon == "salamèche"}
            <img  src="./salamèche.png" alt = "salamèche" width="80" height="100"/>
        {:else if pokemon == "luxray"}
            <img  src="./luxray.png" alt = "luxray" width="100" height="100"/>
        {/if}
	</label>
{/each}</p> 

<form onsubmit={generate}>
    <button disabled={!URL || !scoops} type="submit">
		Generate Pokemon QR Code
	</button>
</form>