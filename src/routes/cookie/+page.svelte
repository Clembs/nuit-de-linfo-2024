<script lang="ts">
	let m = $state({ x: 0, y: 0 });
    let count = $state(0);
    let incrPied = $state(1);
    let incrMain = $state(0);
    let incrTete = $state(0);
    let incrJambe = $state(0);
    let x = $state(0);
    let y = $state(0);
    let texteRareOMG = $state(0);

    let elapsed = $state(0);
    let interval=$state(1000);

    $effect(()=> {
        const id = setInterval(()=> {
            elapsed += 1;
        },interval);
        if (incrPied%20 === 0){
            heritageReset();
        }
        if (incrMain === 15){
            heritageReset();
        }
        if (incrTete === 10){
            heritageReset();
        }
        if (incrJambe === 5){
            heritageReset();
        }
        return () => {
            clearInterval(id);
        };
        
    });

	// @ts-ignore
	function onpointermove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

    function incrementPied() {
        if (elapsed > 10) {
            incrPied += 1;
            elapsed = elapsed + 1.2 * incrPied;
            elapsed -=10;
            alert("Vous avez acheté un pied");
        } else {
            alert("Vous ne pouvez pas acheté un pied");
        }
    }

    function incrementMain() {
        if (elapsed > 100) {
            incrMain += 1;
            elapsed = elapsed + 2 * incrMain;
            elapsed -=100;
            alert("Vous avez acheté une main");
        } else {
            alert("Vous ne pouvez pas acheté un Main");
        }
    }

    function incrementTete() {
        if (elapsed > 1000) {
            incrTete += 1;
            elapsed = 0;
            alert("Vous avez acheté un tete");
        } else {
            alert("Vous ne pouvez pas acheté un tete");
        }
    }

    function incrementJambe() {
        if (elapsed > 10000) {
            incrJambe += 1;
            elapsed = elapsed + 4 * incrMain;
            elapsed -=10000;
            alert("Vous avez acheté un jambe");
        } else {
            alert("Vous ne pouvez pas acheté une jambe");
        }
    }

    function incrementBras() {
        if (elapsed > 100000) {
            elapsed -=100000000;
            alert("Vous avez acheté un bras");
        } else {
            alert("Vous ne pouvez pas acheté un bras");
        }
    }

    
    function heritageReset() {
        elapsed = 0;
        incrMain=0;
        incrTete=0;
        incrJambe=0;
        alert("Remise à zéro bien effectué");
    }

    function bougerOeuf() {
        texteRareOMG = Math.random()*100;
        
        elapsed+=1+incrPied+incrMain+incrTete+incrJambe+0;
        x = Math.random()*1920;
        while (x<340) {
            x = Math.random()*1880;
        }
        y = Math.random()*1900;
        while (y<10) {
            y = Math.random()*1900;
        }
        if (texteRareOMG < 2) {
            alert(alert(alert(alert("Un texte rare est apparu"))));
        } else {
            alert("L'oeuf a bougé");
        }
    }
    
</script>


<div id=corpsCookie>
    <p id='compteurOeuf'> Oeuf : {elapsed}{incrPied}{incrMain}{incrTete}{incrJambe}0</p>
    <button id="pied" onclick={incrementPied}><img src='/cookiePied.png' alt="Pied" /></button>
    <p id=texte1> Pied      prix = 10 </p>
    <button  id="main" onclick={incrementMain}><img src='/main.png' alt="Main"/></button>
    <p id=texte2> Main      prix = 100 </p>
    <button id="heritage" onclick={heritageReset}><img src='/h.png' alt="Heritage" /></button>
    <p id=texte3> Heritage </p>
    <button id="tete" onclick={incrementTete}><img src='/cookieTete.png'alt="Tete" /></button>
    <p id=texte4> Tête      prix=1000 </p>
    <button id="jambe" onclick={incrementJambe}><img src='/jambe.png' alt="Jambe" /></button>
    <p id=texte5> Jambe     prix=10000</p>
    <button id="bras" onclick={incrementBras}><img src='/bras.png' alt="Bras" /></button>
    <p id=texte6> Bras      prix=100000 </p>

    <button id="oeuf" onclick={bougerOeuf}
        style="--x: {x}px; --y: {y}px"
    >
        <img src='/oeuf.png' alt="Oeuf de tortue" /> 
    </button>

</div>

<style>
    
    #corpsCookie{
        position:relative;
        margin-top:-5px;
        margin-left:-10px;
        z-index : 1;
        width:1900px;
        height:1950px;
        background-image: url('/cookieFond.png');
    }

    #compteurOeuf {
        z-index : 3;
        position : absolute;
        left : 400px;
        font-size : 50px;
    }
    
    #texte1 {
        z-index : 2;
        position : absolute;
        top : 20px;
        left : 150px;
        font-size :20px;
    }

    #texte2 {
        z-index : 2;
        position : absolute;
        top : 165px;
        left : 150px;
        font-size :20px;
    }

    #texte3 {
        z-index : 2;
        position : absolute;
        top : 295px;
        left : 150px;
        font-size :20px;
    }

    #texte4 {
        z-index : 2;
        position : absolute;
        top : 425px;
        left : 150px;
        font-size :20px;
    }

    #texte5 {
        z-index : 2;
        position : absolute;
        top : 555px;
        left : 150px;
        font-size :20px;
    }

    #texte6 {
        z-index : 2;
        position : absolute;
        top : 685px;
        left : 150px;
        font-size :20px;
    }

    #pied{
        z-index : 2;
        position : absolute;
        top : 25px;
        left : 50px;
    }

    #main {
        z-index : 2;
        position : absolute;
        top : 170px;
        left : 50px;
    }

    #heritage{
        z-index : 2;
        position : absolute;
        top : 300px;
        left : 50px;
    }

    #tete{
        z-index : 2;
        position : absolute;
        top : 430px;
        left : 50px;
    }

    #jambe {
        z-index : 2;
        position : absolute;
        top : 560px;
        left : 50px;
    }

    #bras {
        z-index : 2;
        position : absolute;
        top : 690px;
        left : 50px;
    }

    #oeuf {
        position : absolute;
        top : var(--x);
        left : var(--y);
    }

	div {
		width: 100%;
		height: 100%;
		padding: 1rem;
	}
</style>
