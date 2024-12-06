<script>
    let URL = '';
    let scoops = '';
    let base64Image = '';

    async function generateQRCode() {

        const response = await fetch('/pokemon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ URL, pokemon: scoops })
        });

        if (response.ok) {
            const data = await response.json();
            base64Image = data.base64;
        } else {
            console.error('Erreur lors de la génération du QR code');
        }
    }
</script>

<h1>QR Code Pokemon</h1>

<form on:submit={generateQRCode}>
    <p>Entrer son URL ici :</p>
    <p><input name="URL" bind:value={URL} /></p>

    <p>
        {#each ["herbizarre", "boguerisse", "rotiflam", "luxray", "voltorbe", "lokhlass"] as pokemon}
            <label>
                <input
                    type="radio"
                    name="pokemon"
                    value={pokemon}
                    bind:group={scoops}
                />
                {pokemon}
                <img 
                    src={`./${pokemon}.png`} 
                    alt={pokemon} 
                    width="100" 
                    height="100"
                    style="display: inline-block; margin-left: 10px;"
                />
            </label>
        {/each}
    </p>

    <button disabled={!URL || !scoops} type="submit">
        Générer le QR Code
    </button>
</form>

{#if base64Image}
    <h2>QR Code généré :</h2>
    <img src={`data:image/png;base64,${base64Image}`} alt="QR Code" width="200" />
{/if}
