// JavaScript Document

// Section gestion des variables
// Déclaration variables
var nbInitial = 0;
var lambda = 0;
var mu = 1;
var temps = 0;
var intervalle = 0;

var tick = 0;

var simEnCours = false;
var simulationInterval = 0;

var liste = new listeDePersonnes();

var math = new mathOvermind();

// Fonctions d'actualisation des variables avec des changements de valeurs
function OnChangeValue() {
	setVariables();
	verifierVariables();
	math.updateTheorie();
}

function debutSimulation() {
	OnChangeValue();
	if (!simEnCours) {
		
		resetSimulation();		
		resetQueue();
		math.reinitialiserMath();
		
		simEnCours = true;
		
		liste.initialiser(nbInitial);
		simulationInterval = setInterval(simulationTick, intervalle);
		
		// Desactiver le bouton de start
		document.getElementById("start_btn").disabled = true;
		// Activer le sauter a la fin
		document.getElementById("end_btn").disabled = false;
	}
	else {
		reinitialiser();
		debutSimulation();
	}
}

function simulationTick() {
	dessinerTable();
	
	math.tick(liste);
	
	verifierFile();
	
	tick += 1 * (intervalle/1000);
	if (tick >= temps) {
		resetInterval();
		document.getElementById("start_btn").disabled = false;
		document.getElementById("end_btn").disabled = true;
		document.getElementById("etat_file").innerHTML = "Finished";
		document.getElementById("etat_file").style.backgroundColor = "#008000";
	}
}

function verifierFile() {
	if (liste.nbPersonnes() < 50)
	{
		document.getElementById("etat_file").innerHTML = "Executing";
		document.getElementById("etat_file").style.backgroundColor = "#008000";
	}
	else
	{
		document.getElementById("etat_file").innerHTML = "Overflow";
		document.getElementById("etat_file").style.backgroundColor = "#FF0000";
		dessinerTable();
		resetSimulation();
	}
}

function dessinerTable() {
	for(var i = 0; i < 50; i++)
		document.getElementById("table" + i.toString()).textContent = liste.nomPersonne(i);
}

function terminerSimulation() {
	clearInterval(simulationInterval);
	while (simEnCours)
		simulationTick();
}

function reinitialiser() {
	resetSimulation();
	resetQueue();
	
	document.getElementById("start_btn").disabled = false;
	document.getElementById("etat_file").innerHTML = "Ready";
	document.getElementById("etat_file").style.backgroundColor = "#008000";
	document.getElementById("nb_client_servis").innerHTML = "0";
}

function resetSimulation() {
	resetInterval();
	simEnCours = false;
}

function resetInterval() {
	if (simulationInterval != 0) {
		clearInterval(simulationInterval);
		simulationInterval = 0;
	}
	simEnCours = false;
	tick = 0;
}

function resetQueue() {
	liste.reinitialiserPersonnes();
	dessinerTable();
}

function setVariables() {
	if (!simEnCours) {
		nbInitial = parseInt(document.getElementById("x").value) ;
		lambda = parseFloat(document.getElementById("lambda").value);
		mu = parseFloat(document.getElementById("mu").value);
		temps = parseInt(document.getElementById("t").value);
		intervalle = parseFloat(document.getElementById("intervalle").value);
	}
}

function verifierVariables() {
	if (nbInitial > 50 || nbInitial < 0 || isNaN(nbInitial)) {
		nbInitial = 0;
		document.getElementById("x").value = nbInitial.toString();
	}
		
	if (lambda > 10 || lambda < 0 || isNaN(lambda)) {
		lambda = 1;
		document.getElementById("lambda").value = lambda.toString();
	}
	
	if (mu > 20 || mu < 1 || isNaN(mu)) {
		mu = 1;
		document.getElementById("mu").value = mu.toString();
	}
	
	if (temps > 60 || temps < 1 || isNaN(temps)) {
		temps = 1;
		document.getElementById("t").value = temps.toString();
	}
	if (intervalle > 5000 || intervalle < 1 || isNaN(intervalle)) {
		intervalle = 1000;
		document.getElementById("intervalle").value = intervalle.toString();	
	}
	if (intervalle < 50)
		document.getElementById("warning").textContent = "The simulation will be slowed down by the excessive number of iterations!";
	else
		document.getElementById("warning").textContent = "";
}

function getNextRandom(bottom, top) {
	var interval = top - bottom;
	return interval * Math.random() + bottom;
}