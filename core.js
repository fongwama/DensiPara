/*
	@author Beylhond
	@version 1.0
	@date 20/10/2015 15:11:00

	@description script du traitement de l'application DensitePara web.
 */

	//création de l'objet densité para
	densite = {resultat:0,nbreParasite:0,nbreGlobuleBlanc:0,nbreGloBlancSang:0};

	//récupération des composants graphique respectifs pour assurer la liason

	densite.nbreParasite = document.getElementById('nbreParasite');
	densite.nbreGlobuleBlanc  = document.getElementById('nbreGlobuleBlanc');
	densite.nbreGloBlancSang = document.getElementById('nbreGloBlancSang');
	densite.resultat = document.getElementById('densite');

	//fixer la valeur par défaut du nombre de globules blancs par microlitre de sang
	densite.nbreGloBlancSang.value = 8000;

	//déclaration des classes d'erreurs
	var  classErreur = 'box-style classErreur';
	var  classCorrecte = 'classCorrecte '+box-style;

	/*
		calcule de la densité parasitaire.
	 	formule

	 	densite = (nbreParasite * nbreGlobuleBlanc) / nbreGloBlancSang);
 	*/

	function calculer() 
	{
		var resultat = (densite.nbreParasite.value * densite.nbreGloBlancSang.value) / densite.nbreGlobuleBlanc.value;
		
		densite.resultat.textContent = Math.round(resultat);
 	}

	/*
		réinitialiser les champs de saisies

		@param arguments : liste des id des composants à vider.
	*/

	function reset (arguments)
	{
		for (var i = 0; i < arguments.length; i++)
		{
			document.getElementById(arguments[i]).value = "";
		}

		densite.resultat.textContent = "Densité";
	}

	/*
		obligier l'utilisateur à saisir un chiffre
	*/

	function controleur()
	{
		densite.nbreParasite.className = classErreur;
 	}