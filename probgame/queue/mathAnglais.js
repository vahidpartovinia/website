function mathOvermind() {
	
	// Theorique
	this.rho = 0;
	this.pourcentRempli = 0;
	this.stable = false;
	this.tempsMoyenTotal = 0;
	this.tempsMoyenEnFile = 0;
	this.tempsMoyenEnServeur = 0;
	this.tempsMoyenArrivee = 0;
	
	this.poissonEntree = [];
	this.poissonSortie = [];
	
	// Statistique
	this.tempsMoyenReelEnFile = 0;
	this.tempsMoyenReelEnServeur = 0;
	this.tempsMoyenReelTotal = 0;
	this.tempsMoyenReelArrivee = 0;
	
	this.nbClientsTotalEntre = 0;
	this.nbClientsServis = 0;
	
	this.tempsTotal = 0;
	
	this.randomNumber = 0;
	
	this.reinitialiserMath = function() {
		this.tempsMoyenTotal = 0;
		this.tempsMoyenEnFile = 0;
		this.tempsMoyenEnServeur = 0;
		this.tempsMoyenArrivee = 0;
		this.nbClientsTotalEntre = 0;
		this.nbClientsServis = 0;
		this.tempsTotal = 0;
	}

	this.updateStatistiques = function() {
		// Partie statistique
		// TODO
	}
	
	this.updateTheorie = function() {
		// Partie theorique
		
		// Reinitialiser les valeurs de poisson pour 1 a 15
		this.poissonEntree = [];
		for (var i = 0; i <= 15; i++)
			this.poissonEntree[i] = ((i == 0) ? 0 : this.poissonEntree[i - 1]) + this.poisson(lambda, intervalle, i + 1);
			
		this.poissonSortie = [];
		for (var i = 0; i <= 15; i++)
			this.poissonSortie[i] = ((i == 0) ? 0 : this.poissonSortie[i - 1]) + this.poisson(mu, intervalle, i + 1);
		
		this.rho = lambda/mu;
		//this.pourcentRempli = liste.nbPersonnes() / 50;
		this.stable = (this.rho < 1);
		this.tempsMoyenTotal = 1 / (mu - lambda);
		this.tempsMoyenEnFile = this.rho / (mu - lambda);
		this.tempsMoyenEnServeur = 1 / mu;
		//this.tempsMoyenArrivee = 1 / lambda;
		
		this.drawTheorie();
	}	
	
	this.poisson = function(facteur, intervalle, iteration) {
		return (Math.pow((facteur * intervalle / 1000), iteration) / this.factorial(iteration)) * Math.exp(-lambda * (intervalle / 1000));
	}
	
	this.factorial = function (n) {
  		//if (n == 0 || n == 1)
    		//return 1;
  		//if (f[n] > 0)
    		//return f[n];
  		//return f[n] = this.factorial(n-1) * n;
  		
  		// Major optimisations of code because that last one was waaaay too long
  		switch (n) {
  			case 0:
  				return 1;
  			case 1:
  				return 1;
  			case 2:
  				return 2;
  			case 3:
  				return 6;
  			case 4:
  				return 24;
  			case 5:
  				return 120;
  			case 6:
  				return 720;
  			case 7:
  				return 5040;
  			case 8:
  				return 40320;
  			case 9:
  				return 362880;
  			case 10:
  				return 3628800;
  			case 11:
  				return 39916800;
  			case 12:
  				return 479001600;
  			case 13:
  				return 6227020800;
  			case 14:
  				return 87178291200;
  			case 15:
  				// Calculator won't return this value correctly, rawr
  				return 87178291200 * 15;
  		}
	} 
	
	this.drawTheorie = function() {
		document.getElementById("rho").innerHTML = this.rho.toString();
		document.getElementById("t_moy_service").innerHTML = this.tempsMoyenTotal.toString();
		document.getElementById("t_moy_file").innerHTML = this.tempsMoyenEnFile.toString();
		document.getElementById("t_moy_serveur").innerHTML = this.tempsMoyenEnServeur.toString();
		
		if (this.stable) { 
			document.getElementById("etat_stabilite").innerHTML = "Stable";
			document.getElementById("etat_stabilite").style.backgroundColor = "#008000";
		}
		else {
			document.getElementById("etat_stabilite").innerHTML = "Unstable";
			document.getElementById("etat_stabilite").style.backgroundColor = "#FF0000";
		}
	}	
	
	this.drawStatistiques = function() {
		// TODO: Avec les statistiques
	}

	this.hasHappened = function(event) {
		return this.randomNumber < event;
	}
	
	this.probEvent = function(facteur, interval) {
		return (facteur * (interval / 1000)) * Math.exp(-facteur * (interval/1000) );
	}

	this.tick = function(liste) {
		this.tickEntree(liste);
		this.tickSortie(liste);
			
		this.updateStatistiques();
		this.drawStatistiques();
	}
	
	this.tickEntree = function(liste) {
		this.randomNumber = Math.random();		
		
		for (var i = 0; i < this.poissonEntree.length; i++) {
			var nbPersonnesEntree = i + 1;
			var probEntree = this.poissonEntree[i];
			if (this.hasHappened(probEntree)) {
				this.nbClientsTotalEntre += nbPersonnesEntree;
				liste.ajouterPersonne(nbPersonnesEntree);
				//console.log("nb pers entree:" + this.nbClientsTotalEntre);
				break;
			}
		}
	}
	
	this.tickSortie = function(liste) {
		this.randomNumber = Math.random();
		//for (var i = this.poissonSortie.length - 1; i >= 0; i--) {
		for (var i = 0; i < this.poissonSortie.length; i++) {
			var nbPersonnesSorti = i + 1;
			var probSortie = this.poissonSortie[i];
			if (this.hasHappened(probSortie)) {
				if (nbPersonnesSorti > liste.nbPersonnes())
					nbPersonnesSorti = liste.nbPersonnes();
				this.nbClientsServis += nbPersonnesSorti;
				liste.enleverPersonne(nbPersonnesSorti);
				document.getElementById("nb_client_servis").innerHTML = this.nbClientsServis;
				//console.log("nb pers sorties:" + this.nbClientsServis);
				break;
			}
		}
	}
	
	
}