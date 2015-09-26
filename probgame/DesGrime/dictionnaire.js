////////////
// Classe Dict
// Permet d'obtenir les chaines d'affichage en anglais et en francais
// Prend la langue en paramètre
////////////
function Dict(langue) {
	this.langue = langue
	//Création du dictionnaire multi-niveau
	//Le premier niveau correspond à la clée associée au text à afficher
	//le second niveau correspond aux traductions possible du text
	//Eg. text["Victoire"]["EN"] --> Victories
	//Eg. text["Victoire"]["FR"] --> Victoire
	//this.text[""]		= {"FR":"", "EN":""};
	this.text = [];
	this.text["ENTETE"]			= {"FR":"<img src='Titre.png' id='titre'><br />" , "EN":"<img src='Titre-en.png' id='titre'><br />"};
	this.text["TYPE_PARTIE"]	= {"FR":"&Agrave; quel type de partie voulez vous jouer?", "EN":"Select game type"};
	this.text["3D2J"]			= {"FR":"Ensemble &agrave; 3 d&eacute; 1 d&eacute; par joueur 2 joueurs", "EN":"One dice from three - 2 players"};
	this.text["2X_3D2J"]		= {"FR":"Ensemble &agrave; 3 d&eacute; 2 d&eacute; par joueur 2 joueurs", "EN":"Two dice from three  - 2 players"};
	this.text["5D2J"]			= {"FR":"Ensemble &agrave; 5 d&eacute; 1 d&eacute; par joueur 2 joueurs", "EN":"One dice from five  - 2 players "};
	this.text["2X_5D2J"]		= {"FR":"Ensemble &agrave; 5 d&eacute; 2 d&eacute; par joueur 2 joueurs", "EN":"Two dice from five - 2 players "};
	this.text["5D3J"]			= {"FR":"Ensemble &agrave; 5 d&eacute; 1 d&eacute; par joueur 3 joueurs", "EN":"One dice from Five  - 3 players "};
	this.text["2X_5D3J"]		= {"FR":"Ensemble &agrave; 5 d&eacute; 2 d&eacute; par joueur 3 joueurs", "EN":"Two dice from five - 3 players"};
	this.text["CHOIX_DEE"]		= {"FR":"Chaque joueur doit choisir son d&eacute; !", "EN":"Each player chooses his dice !"};
	this.text["J1"]				= {"FR":"Joueur 1: ", "EN":"Player 1: "};
	this.text["J2"]				= {"FR":"Joueur 2: ", "EN":"Player 2: "};
	this.text["J3"]				= {"FR":"Joueur 3: ", "EN":"Player 3: "};
	this.text["MEME_DEE"]		= {"FR":"Les joueurs ne peuvent utiliser le m\u00EAme d\u00E9. ", "EN":"Players must use different dice"};
	this.text["JOUER_PARTIE"]	= {"FR":"Jouons la partie!", "EN":"Let's Play!"};
	this.text["LANCER_DEE"]		= {"FR":"Lancer les d&eacute;s!", "EN":"Roll the dice"};
	this.text["VICTOIRE"]		= {"FR":" Victoires", "EN":" Victories"};
	this.text["GAGNANT_EST"]	= {"FR":"Le gagnant de ce tour est le joueur  ", "EN":"This round was won by player "};
	this.text["AVEC"]			= {"FR":" avec ", "EN":" with  "};
	this.text["PERDANT"]		= {"FR":"! Le perdant avait  ", "EN":"! The loser rolled "};
	this.text["J1_TIRE"]		= {"FR":"Joueur 1 a tir&eacute ", "EN":"Player 1 rolled"};
	this.text["J2_TIRE"]		= {"FR":"Joueur 2 a tir&eacute ", "EN":"Player 2 rolled"};
	this.text["J3_TIRE"]		= {"FR":"Joueur 3 a tir&eacute ", "EN":"Player 3 rolled"};
	this.text["J1_GAGNE"] 		= {"FR":"Le joueur 1 a gagn\u00E9!\nVous pouvez tout de m\u00EAme continuer \u00E0 jouer. ", "EN":"Player 1 won!\nYou can still keep playing"};
	this.text["J2_GAGNE"] 		= {"FR":"Le joueur 2 a gagn\u00E9!\nVous pouvez tout de m\u00EAme continuer \u00E0 jouer. ", "EN":"Player 2 won!\nYou can still keep playing"};
	this.text["J3_GAGNE"] 		= {"FR":"Le joueur 3 a gagn\u00E9!\nVous pouvez tout de m\u00EAme continuer \u00E0 jouer. ", "EN":"Player 3 won!\nYou can still keep playing"};
	this.text["C_ROUGE"] 		= {"FR":"Rouge", "EN":"Red"};
	this.text["C_JAUNE"] 		= {"FR":"Jaune", "EN":"Yellow"};
	this.text["C_VERT"] 		= {"FR":"Vert Olive", "EN":"Olive Green"};
	this.text["C_BLEU"] 		= {"FR":"Bleu", "EN":"Blue"};
	this.text["C_VIOLET"]		= {"FR":"Violet", "EN":"Purple"};
	this.text["ET"]				= {"FR":" et ", "EN":" and "};
	this.text["COMBIEN_TOURS"]  = {"FR": " Combien de tours pour gagner  ", "EN": " How many turns to win " };
	this.text["TOURS_NAN"]		= {"FR": " Le nombre de tours doit etre un nombre.  ", "EN": " The number of turns needs to be a number. " }; 
}
//Dict::getText(cle)
Dict.prototype.getText	= function(cle)
{
	return this.text[cle][this.langue];
}

//Dict::setLangue(langue)
Dict.prototype.setLangue = function(langue)
{
	this.langue = langue;
}