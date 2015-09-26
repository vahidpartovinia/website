/**
 * @author Jules Thuillier
 */
// Set up!
var a_canvas = document.getElementById("game_canvas");
var context = a_canvas.getContext("2d");

var x_min = 0;
var x_max = 700;
var y_min = 0;
var y_max = 700;

var lines = 10;

var needleLength = 0.5;
var needlePerThrow = 10;
var numberOfThrow = 10;

var drawDuration = 5;

var needleCounter = 0;
var onLineCounter = 0;
var throwCounter = 0;


// ONLY FOR DEBUG
function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}


/*
 * Dessine toutes les lignes verticales
 * param number : le nombre de lignes a dessiner
 */
function drawLines(number){
	log("bla");
	lines = number;
	clearCanvas();
	var pas = (x_max - x_min)/(number - 1);
	for (i = 0; i < number; i++) { 

		drawLine(i*pas);
	}
}

/*
 * Dessine une ligne verticale a la postion x donnée en parametre
 * param position : position selon x de la ligne a tracer
 */
function drawLine(position){
	context.beginPath();
	context.moveTo(position, y_min);
    context.lineTo(position, y_max);
    context.lineWidth = 2;
    context.strokeStyle = '#000000';
    context.stroke();
}

/*
 * Nettois le canvas (affichage)
 * Enlève toutes les aiguilles et lignes dessinées
 */
function clearCanvas(){
	context.clearRect( x_min , y_min , x_max , y_max );
}

/*
 * Genere un nombre aleatoire pour la position X de l'aiguille
 */
function randomX(){
	return Math.random() * (x_max - x_min);
}


/*
 * Genere un nombre aleatoire pour la position Y de l'aiguille
 */
function randomY(){
	return Math.random() * (y_max - y_min);
}

/*
 * Genere un nombre aleatoire pour l'angle de l'aiguille
 */
function randomAngle(){
	return Math.random() * 360;	
}


/*
 * Verifie si l'aiguille coupe une ligne grâce au modulo
 */ 
function isOnLine(x1, x2){
	
	if(x1 < 0 || x2 < 0){
		return true;
	}
	
	linesSpace = (x_max-x_min)/(lines-1);
	
	if (x1 < x2){
		val = (x2%linesSpace) - (x1%linesSpace);

		if (val < 0)
			return true;
		else
			return false;
	}
	
	// Si la direction de l'aguille est inversée (angle > 180 degres)
	else if (x2 < x1){
		val = (x2%linesSpace) - (x1%linesSpace);
		if (val > 0)
			return true;
		else
			return false;
	}
	
	// Si l'aiguille verticale
	else {
		if (x1%linesSpace == 0)
			return true;
	}
	
}


/*
 * Calcule les coordonnées de chaque extremité de l'aiguille en fonction d'une extremité et de l'angle
 * param x1 : coordonnee X d'une extremité
 * param y1 : coordonnee Y de la même extremité
 * param theta : angle de l'aiguille
 */
function calculateCoordinatesNeedle(x1,y1,theta) {
	
		needleLengthPx = ((x_max - x_min) / (lines -1))* needleLength;
		
        x2 = x1 + needleLengthPx * Math.cos(theta);
        y2 = y1 + needleLengthPx * Math.sin(theta);
	
	var coordinates = new Array(4);
    coordinates['x1'] = x1;
    coordinates['y1'] = y1;
    coordinates['x2'] = x2;
    coordinates['y2'] = y2;
    
    return coordinates;
      }

/*
 * Dessine une aiguille sur le canvas
 * La couleur est rouge si l'aiguille coupe une ligne
 * Elle est verte sinon
 */
function drawNeedle(){
	x = randomX();
	y = randomY();
	angle = randomAngle();
	needleCounter++;
	
	var coordinates = calculateCoordinatesNeedle(x,y, angle);
	 
	context.beginPath();
	context.moveTo(coordinates['x1'], coordinates['y1']);
    context.lineTo(coordinates['x2'], coordinates['y2']);
    
    context.lineWidth = 2;
    
    if(isOnLine(coordinates['x1'],coordinates['x2'])){
    	context.strokeStyle = 'rgba(255,0,0,0.5)';
    	onLineCounter++;
    }
	else{
    	context.strokeStyle = 'rgba(0,255,0,0.5)';
    }
    
    context.stroke();
	
}

/*
 * Dessines plusieurs aiguilles
 * param nombre : le nombre d'aiguilles a dessiner
 */
function drawNeedles(nombre){
	for (i = 0; i < nombre; i++) { 
		drawNeedle();
	}
}

/*
 * Transforme une taille en pourcent en une taille comprise entre 0 et 1
 * Met a jour la variable needleLength
 * Fonction appelée lorsque le slider est bougé
 * param length : taille en pourcent
 */
function changeNeedleSize(length){
	needleLength = length/100;
	playing = false;
}

/*
 * Met a jour la variable needleNumber
 * Fonction appelée lorsque le slider est bougé
 */
function changeNeedleNumber(number){
	needlePerThrow = number;
	playing = false;
}

/*
 * Met a jour la variable drawDuration
 * Fonction appelée lorsque le slider est bougé
 */
function changeDuration(duration){
	drawDuration = duration;
	playing = false;
}

/*
 * Met a jour la variable lines
 * Fonction appelée lorsque le slider est bougé
 */
function changeLineNumber(number){
	lines = number;
	playing = false;
}

/*
 * Met a jour la variable numberOfThrow
 * Fonction appelée lorsque le slider est bougé
 */
function changeThrowNumber(number){
	numberOfThrow = number;
	playing = false;
}