import { createCanvas, loadImage } from 'canvas';
import QRCode from 'qrcode';
import fs from 'fs';

import {json} from '@sveltejs/kit'



import background from "./bg.jpg";
import boguerisse from "./boguerisse.png";
import herbizarre from "./herbizarre.png";
import lokhlass from "./lokhlass.png";
import luxray from "./luxray.png";
import rotiflam from "./rotiflam.png";
import salameche from "./salameche.png";
import tortank from "./tortank.png";
import voltorbe from "./voltorbe.png";
import { read } from '$app/server';


const pokemonTypes = new Map<string, string>([
	['herbizarre', 'plante'],
	['boguerisse', 'plante'],
	['salameche', 'feu'],
	['rotiflam', 'feu'],
	['luxray', 'electrique'],
	['voltorbe', 'electrique'],
	['tortank', 'eau'],
	['lokhlass', 'eau']
]);

const herbizarreco = {
	x: 150,
	y: 200,
	width: 150,
	height: 150
};

const tortankco = {
	x: 120,
	y: 170,
	width: 150,
	height: 150
};

const rotiflamco = {
	x: 130,
	y: 180,
	width: 200,
	height: 200
};

const voltorbeco = {
	x: 100,
	y: 100,
	width: 200,
	height: 200
};

const luxrayco = {
	x: 200,
	y: 120,
	width: 150,
	height: 150
};

const salamecheco = {
	x: 120,
	y: 150,
	width: 200,
	height: 200
};

const boguerisseco = {
	x: 150,
	y: 150,
	width: 150,
	height: 150
};

const lokhlassco = {
	x: 180,
	y: 250,
	width: 150,
	height: 150
};

export async function POST ({ request }){

        let file;

		const data = await request.json();
		console.log(data);
		const { URL, pokemon } = data;

		const type = pokemonTypes.get(pokemon);

		console.log(`URL: ${URL}, Pokemon: ${pokemon}, Type: ${type}`);

		let coordinates;

		switch (pokemon) {
			case 'herbizarre':
				coordinates = herbizarreco;
                file = herbizarre;
				break;
			case 'tortank':
				coordinates = tortankco;
                file = tortank;
				break;
			case 'rotiflam':
				coordinates = rotiflamco;
                file = rotiflam;
				break;
			case 'luxray':
				coordinates = luxrayco;
                file = luxray;
				break;
            case 'voltorbe':
                coordinates = voltorbeco;
                file = voltorbe;
                break;
			case 'salameche':
				coordinates = salamecheco;
                file = salameche;
				break;
			case 'boguerisse':
				coordinates = boguerisseco;
                file = boguerisse;
				break;
			case 'lokhlass':
				coordinates = lokhlassco;
                file = lokhlass;
				break;
			default:
				coordinates = herbizarreco;
                file = herbizarre;
				break;
		}
		const { x, y, width, height } = coordinates;
		const canvas = createCanvas(475, 475);
		const ctx = canvas.getContext('2d');

        const arrayBuffer = await read(background).arrayBuffer();

        
		const bg = await loadImage(Buffer.from(arrayBuffer));
		ctx.drawImage(bg, 0, 0, 475, 475);

        const pokemonBuffer = await read(file).arrayBuffer();
		const pkimg = await loadImage(Buffer.from(pokemonBuffer));
		ctx.drawImage(pkimg, 0, 0, 475, 475);

		await QRCode.toFile(
			'random.png',
			'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',
			{
				color: {
					dark: '#00000000',
					light: '#ffffff'
				},
				margin: 0,
				version: 40
			}
		);

		const img = await loadImage('random.png');
		ctx.drawImage(img, 0, 0, 475, 475);

		ctx.drawImage(pkimg, x, y, width, height, x, y, width, height);

		await QRCode.toFile('qr.png', `${request.url.split('/pokemon')[0]}/pokemon/qr?type=${type}&target=${URL}}`, {
			color: {
				dark: '#00000000',
				light: '#ffffff'
			},
			margin: 0,
			version: 10
		});

		const qrImg = await loadImage('qr.png');
		ctx.drawImage(qrImg, x, y, width, height);

		const base64 = canvas.toDataURL('image/png').split(',')[1];

		fs.rmSync('random.png');
		fs.rmSync('qr.png');

		return json({ base64 });

        
        
	}


