function listeDePersonnes() {

	this.noms = [
		"Bob",
		"Guy",
		"Jean",
		"Joe",
		"Roger",
		"Hortense",
		"Saddam",
		"Kenny",
		"Cartman",
		"Jean-Guy",
		"J-Wolf",
		"Vahid",
		"Un gars",
		"Niclepro",
		"Benny",
		"Maxoune",
		"Raoul",
		"Simon",
		"Alex",
		"Alexis",
		"André",
		"Theodric"
	];

	this.personnesEnLigne = [ ];
	
	this.nbPersonnes = function() {
		return this.personnesEnLigne.length;
	}
	
	this.ajouterPersonne = function(nbPersonneAAjouter) {
		for (var i = 0; i < nbPersonneAAjouter; i++)
			this.personnesEnLigne.push( this.noms[ Math.floor( Math.random() * this.noms.length ) ] );
	}
	
	this.enleverPersonne = function(NbPersonneAEnlever) {
		for (var i = 0; i < NbPersonneAEnlever; i++)
			this.personnesEnLigne.shift();
	}
	
	this.reinitialiserPersonnes = function() {
		this.personnesEnLigne = [ ];
	}
	
	this.nomPersonne = function(index) {
		if (index < 0 || index > this.nbPersonnes())
			return "";
		return this.personnesEnLigne[index];
	}
	
	this.initialiser = function(nbPersonnes) {
		this.personnesEnLigne = [ ];
		this.ajouterPersonne(nbPersonnes);
	}

}