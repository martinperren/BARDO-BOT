const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const Client = require('node-rest-client').Client;
const Util = require('discord.js');
const music = require('discord.js-musicbot-addon');
var dia, flag;





client.on("ready", () => {
	console.log("Bot iniciado");

	client.user.setActivity(process.env.GAME, { type: 'LISTENING' })
		.then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
		.catch(console.error);

});




function hora() {
	var date = new Date().toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" });
	date = new Date(date);
	var hour = date.getHours();
	hour = parseInt(hour);
	hour = (hour < 10 ? "0" : "") + hour;
	var min = date.getMinutes();
	min = (min < 10 ? "0" : "") + min;
	return hour + ":" + min;
}
//


function dia() {
	date = new Date();
	var day = date.getDay()
	return day;
}


function horariosDeSfe(currentDay,flag) {
	var horarios = [];
	var resultado = [];



	switch (currentDay) {
		case 1: //lunes
			horarios = ["05:30", "06:45", "10:10", "12:00", "13:00", "14:00", "15:50", "18:00", "19:15", "21:05", "22:30"];
			if (flag)
			return horariosAux(horarios);
		else
		return horarios.join(' - ');
			break;
		case 2: //martes
			horarios = ["05:30", "06:45", "10:10", "12:00", "13:00", "14:00", "15:50", "18:00", "19:15", "21:05", "22:30"];
			if (flag)
			return horariosAux(horarios);
		else
		return horarios.join(' - ');
			break;
		case 3: //miercoles
			horarios = ["05:30", "06:45", "10:10", "12:00", "13:00", "14:00", "15:50", "18:00", "19:15", "21:05", "22:30"];
			if (flag)
			return horariosAux(horarios);
		else
		return horarios.join(' - ');
			break;
		case 4: //jueves
			horarios = ["05:30", "06:45", "10:10", "12:00", "13:00", "14:00", "15:50", "18:00", "19:15", "21:05", "22:30"];
			if (flag)
			return horariosAux(horarios);
		else
		return horarios.join(' - ');
			break;
		case 5: //viernes
			horarios = ["05:30", "06:45", "10:10", "12:00", "13:00", "14:00", "15:50", "18:00", "18:45", "19:45", "21:05", "22:30"];
			if (flag)
			return horariosAux(horarios);
		else
		return horarios.join(' - ');
			break;
		case 6: //sabado
			horarios = ["05:30", "10:10", "12:00", "14:00", "18:00", "19:15", "22:30"];
			if (flag)
			return horariosAux(horarios);
		else
		return horarios.join(' - ');
			break;
		case 0: //domingo
			horarios = ["08:30", "10:10", "13:30", "17:15", "20:30", "22:30", "23:45"];
			if (flag)
			return horariosAux(horarios);
		else
		return horarios.join(' - ');
			break;



	}

	return 0;

}




function horariosDeSCC(currentDay, flag) {
	var horarios = [];
	var resultado = [];



	switch (parseInt(dia())) {
		case 1: //lunes
			horarios = ["05:35", "06:13", "07:30", "09:00", "12:33", "14:23", "15:05", "15:55", "17:40", "19:45", "21:18"];
			if (flag)
				return horariosAux(horarios);
			else
			return horarios.join(' - ');
			break;
		case 2: //martes
			horarios = ["05:35", "06:13", "07:30", "09:00", "12:33", "14:23", "15:05", "15:55", "17:40", "19:45", "21:18"];
			if (flag)
				return horariosAux(horarios);
			else
			return horarios.join(' - ');
			break;
		case 3: //miercoles
			horarios = ["05:35", "06:13", "07:30", "09:00", "12:33", "14:23", "15:05", "15:55", "17:40", "19:45", "21:18"];
			if (flag)
				return horariosAux(horarios);
			else
			return horarios.join(' - ');
			break;
		case 4: //jueves
			horarios = ["05:35", "06:13", "07:30", "09:00", "12:33", "14:23", "15:05", "15:55", "17:40", "19:45", "21:18"];
			if (flag)
				return horariosAux(horarios);
			else
			return horarios.join(' - ');
			break;
		case 5: //viernes
			horarios = ["05:35", "06:13", "07:30", "09:00", "12:33", "14:23", "15:05", "15:55", "17:40", "19:45", "21:18", "22:45"];
			if (flag)
				return horariosAux(horarios);
			else
			return horarios.join(' - ');
			break;
		case 6: //sabado
			horarios = ["07:30", "09:00", "12:33", "14:23", "15:55", "19:45", "21:18"];
			if (flag)
				return horariosAux(horarios);
			else
			return horarios.join(' - ');
			break;
		case 0: //domingo
			horarios = ["06:45", "11:00", "15:15", "19:00", "20:50", "22:30"];
			if (flag)
				return horariosAux(horarios);
			else
			return horarios.join(' - ');
			break;



	}

	return 0;

}



function scrap() {




}


function horariosAux(array) {



	var proximos = [];
	var i;
	tam = array.length;
	for (i = 0; i < tam; i++) {
		if (array[i] > hora()) {
			proximos.push(array[i]);

		}
	}

	if (proximos.length == 0) {
		return "No hay proximas salidas para hoy.";

	} else {
		return proximos.join(' - ');;
	}
}



client.on("message", async message => {




	if (message.content.startsWith("!web")) {
		message.channel.send("www.elnortesa.com.ar");
		console.log("web");
	}



	if (message.content.startsWith("!norte")) {
		message.channel.send("``Comandos:``\n``!desc`` para ver las proximas salidas desde scc\n``!desf`` para ver las proximas salidas de sf \n``!horarios`` para ver horarios de otros dias");

	}



	if (message.content.startsWith("!desf")) {
		message.channel.send("``Proximas salidas desde SANTA FE:`` " + horariosDeSfe(parseInt(dia()), true));

	}


	if (message.content.startsWith("!desc")) {
		message.channel.send("``Proximas salidas desde SCC:`` " + horariosDeSCC(parseInt(dia()), true));

	}

	if (message.content.startsWith("!horarios")) {
		message.channel.send("``Ingresa !dia+LugarDeOrigen``. \nPor ejemplo para horarios el jueves saliendo desde Santa Fe usa: ``!juevessf``");

	}




	//HORARIOS DESDE SFE   

	if (message.content.startsWith("!lunessf")) {
		message.channel.send("``LUNES | SFE -> SCC:`` " + horariosDeSfe(1, false));
	}
	if (message.content.startsWith("!martessf")) {
		message.channel.send("``MARTES | SFE -> SCC:`` " + horariosDeSfe(2, false));
	}
	if (message.content.startsWith("!miercolessf")) {
		message.channel.send("``MIERCOLES | SFE -> SCC:`` " + horariosDeSfe(3, false));
	}
	if (message.content.startsWith("!juevessf")) {
		message.channel.send("``JUEVES | SFE -> SCC:`` " + horariosDeSfe(4, false));
	}
	if (message.content.startsWith("!viernessf")) {
		message.channel.send("``VIERNES | SFE -> SCC:`` " + horariosDeSfe(5, false));
	}
	if (message.content.startsWith("!sabadosf")) {
		message.channel.send("``SABADO | SFE -> SCC:`` " + horariosDeSfe(6, false));
	}
	if (message.content.startsWith("!domingosf")) {
		message.channel.send("``DOMINGO | SFE -> SCC:`` " + horariosDeSfe(7, false));
	}


	//HORARIOS DESDE SCC
	if (message.content.startsWith("!lunessc")) {
		message.channel.send("``LUNES | SCC -> SFE:`` " + horariosDeSCC(1, false));
	}
	if (message.content.startsWith("!martessc")) {
		message.channel.send("``MARTES | SCC -> SFE:`` " + horariosDeSCC(2, false));
	}
	if (message.content.startsWith("!miercolessc")) {
		message.channel.send("``MIERCOLES | SCC -> SFE:`` " + horariosDeSCC(3, false));
	}
	if (message.content.startsWith("!juevessc")) {
		message.channel.send("``JUEVES | SCC -> SFE:`` " + horariosDeSCC(4, false));
	}
	if (message.content.startsWith("!viernessc")) {
		message.channel.send("``VIERNES | SCC -> SFE:`` " + horariosDeSCC(5, false));
	}
	if (message.content.startsWith("!sabadosc")) {
		message.channel.send("``SABADO | SCC -> SFE:`` " + horariosDeSCC(6, false));
	}
	if (message.content.startsWith("!domingosc")) {
		message.channel.send("``DOMINGO | SCC -> SFE:`` " + horariosDeSCC(7, false));
	}



});





music.start(client, {
	youtubeKey: process.env.YOUTUBE,
	botPrefix: "!",
	botAdmins: ["211602677858172930"],
	bitRate: "120000" //default era 120000

});



//   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   




client.on("message", async message => {
	const args = message.content.slice(1).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const argsM = message.content.split(' ');



	if (message.content.includes("huevo")) {
		message.react("537716624296378399");
	}



});



client.login(process.env.BOT_TOKEN);
