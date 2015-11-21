	//création de l'objet densité para
	densite = {densite:0,nbreParasite:0,nbreGlobuleBlanc:0,nbreGloBlancSang:0};

	/*
	 	Méthode permettant de calculer la densité parasitaire. Elle prend en paramètre un objet densité
	  	@param densite
	  	@return
	*/

	function calculer(nbreParasite,nbreGlobuleBlanc,nbreGloBlancSang) 
	{
		densite.nbreParasite = nbreParasite;
		densite.nbreGlobuleBlanc = nbreGlobuleBlanc;
		densite.nbreGloBlancSang = nbreGloBlancSang;

 		/**
 			Retourner la densité parasitaire
 		*/
 		//densite.densite = (densite.nbreParasite * densite.nbreGlobuleBlanc) / densite.nbreGloBlancSang);
				 
		 alert(densite.densite);
	}