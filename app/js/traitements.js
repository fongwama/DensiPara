/**
 * Created by Aristide Ciriaque on 12/11/2015.
 */
$(document).ready(function(){
    /**
     * Validation des données
     */

     // On s'assure que l'utilisateur saisi un nombre de parasite valide
    $("input").keypress(function(event){

        var returnValue = false;

        var charCode = (window.Event) ? event.which : event.keyCode;
        if (((charCode >= 48) && (charCode <= 57)) || // Tous les numériques
            (charCode == 8) ||     // Retour-Arriére (Backspace)
            (charCode == 13)||    // Retour chariot (touche entré)
            (charCode == 0)){

            returnValue = true;
        }
        return returnValue;
    });

    //fixer la valeur par défaut du nombre de globules blancs par microlitre de sang
    $('#nbreGloBlancSang').val(8000);

    // Méthode permettant de calculer la densité parasitaire
    $("#calculer").click(function(){
        calculer();
    });

    // Mask les erreurs suite à un appui sur le bouton
    $("#nbreParasite").keyup(function(){
        $("#infoNbreParasite").css("display","none;").fadeOut(500);
    });

    $("#nbreGlobuleBlanc").keyup(function(){
        $("#infoNbreGlobuleBlanc").css("display","none;").fadeOut(500);
    });

    $("#nbreGloBlancSang").keyup(function(){
        $("#infoNbreGloBlancSang").css("display","none;").fadeOut(500);
    });

    // Réinitialisation des champs
    $("#reinitialiser").click(function() {
        reset();
    });


    // Appel de la fonction d'affichage de l'heure
    date_heure("date_heure");
});


// Méthode permettant de calculer la densité parasitaire
function calculer() {
    if(nestPasVide()) { // Si l'utilisateur é tout renseigner, alors
        if (nestPasEgalAZero()) { // Si les valeurs champs sont supérieur é 0 alors on effectue le calcule
            var resultat = $("#nbreParasite").val() * $("#nbreGloBlancSang").val() / $("#nbreGlobuleBlanc").val();
            $("#densite").html(Math.round(resultat));
        }
    }
}


/*
 réinitialiser les champs de saisies
 @param arguments : liste des id des composants é vider.
 */
function reset ()
{
    $("#nbreParasite").val("");
    $("#nbreGlobuleBlanc").val("");
    $("#densite").html("");
    $("#numeroReference").val("");

}

// Procédure permettant d'afficher les messages d'erreurs
function afficherErreur(param){

    // On affiche le message d'erreur en fonction du paramètre
    if(param == 0){
        document.getElementById("infoNbreParasite").style.display = "block";
    }else if(param == 1){
        document.getElementById("infoNbreGlobuleBlanc").style.display = "block";
    }else if(param == 2){
        document.getElementById("infoNbreGloBlancSang").style.display = "block";
    }else{ // Si c'est un paramètre autre que 0, 1 ou 2 alors on affiche toutes les messages d'erreur
        document.getElementById("infoNbreParasite").style.display ="block";
        document.getElementById("infoNbreGlobuleBlanc").style.display ="block";
        document.getElementById("infoNbreGloBlancSang").style.display ="block";
    }
}


// Méthode permettant de vérifier si un champ n'est pas vide
function nestPasVide(){

    // Si le nombre de parasites, le ne nombre de globule blanc et le nombre de
    // globule  blanc par micro litre de sang ne sont pas renseigner
    if(document.getElementById("nbreParasite").value == "" &&
        document.getElementById("nbreGlobuleBlanc").value == "" &&
        document.getElementById("nbreGloBlancSang").value == ""){

        document.getElementById("infoNbreParasite").innerHTML = "Veuillez saisir le nombre de parasites !";
        document.getElementById("infoNbreGlobuleBlanc").innerHTML = "Veuillez saisir le nombre de globule blanc !";
        document.getElementById("infoNbreGloBlancSang").innerHTML = "Veuiller saisir le nombre de Globules blancs/µ de sang !";

        afficherErreur(4);

        return false;

        // Si le nombre de parasites et le nombre de globule n'est pas renseigner
    }else if(document.getElementById("nbreParasite").value == "" && document.getElementById("nbreGlobuleBlanc").value == ""){

        document.getElementById("infoNbreParasite").innerHTML = "Veuillez saisir le nombre de parasites !";
        document.getElementById("infoNbreGlobuleBlanc").innerHTML = "Veuillez saisir le nombre de globule blanc !";

        // On affiche le message d'erreur en fonction du paramètre
        afficherErreur(0);
        afficherErreur(1)

        return false;

        // Si le nombre de parasite n'est pas renseigner
    }else if(document.getElementById("nbreParasite").value == "") {

        document.getElementById("infoNbreParasite").innerHTML = "Veuillez saisir le nombre de parasites !";
        afficherErreur(0);

        return false;

        // Si le nombre de globule blanc n'est pas renseigner
    }else if(document.getElementById("nbreGlobuleBlanc").value == ""){

        document.getElementById("infoNbreGlobuleBlanc").innerHTML = "Veuillez saisir le nombre de globule blanc !";
        afficherErreur(1);

        return false;

        // Si le nombre de globule blanc par micro litre de sang n'est pas renseigner
    }else if( document.getElementById("nbreGloBlancSang").value == ""){

        document.getElementById("infoNbreGlobuleBlanc").innerHTML = "Veuiller saisir le nombre de Globules blancs/µ de sang !";
        afficherErreur(2);

        return false;

    }else{
        return true;
    }

}

// Cette méthode vérifie que l'utilisateur a saisie une valeur supérieur à s
function nestPasEgalAZero(){

    // Si le nombre de parasites, le nombre de globule et le nombre
    // de globule blanc par micro litre de sang est null alors on renvoie une exception
    if(document.getElementById("nbreParasite").value == 0 &&
       document.getElementById("nbreGlobuleBlanc").value == 0 &&
       document.getElementById("nbreGloBlancSang").value == 0){

        document.getElementById("infoNbreParasite").innerHTML = "Le nombre de parasites doit être supérieur à 0 !";
        document.getElementById("infoNbreGlobuleBlanc").innerHTML = "Le nombre de globule blanc doit être supérieur à 0 !";
        document.getElementById("infoNbreGloBlancSang").innerHTML = "Le nombre de Globules blancs/µ de sang être supérieur à 0 !";

        // On affiche le message d'erreur en fonction du paramètre
        afficherErreur(4);

        return false;

        // Si le nombre de parasites et le nombre de globules blanc est null
    }else if(document.getElementById("nbreParasite").value == 0 && document.getElementById("nbreGlobuleBlanc").value == 0){

        document.getElementById("infoNbreParasite").innerHTML = "Le nombre de parasites doit être supérieur à 0 !";
        document.getElementById("infoNbreGlobuleBlanc").innerHTML = "Le nombre de globule blanc doit être supérieur à 0 !";

        // On affiche le message d'erreur en fonction du paramètre
        afficherErreur(0);
        afficherErreur(1);

        return false;

        // Si le nombre de parasites est null
    }else if(document.getElementById("nbreParasite").value == 0) {

        document.getElementById("infoNbreParasite").innerHTML = "Le nombre de parasites doit être supérieur à 0 !";
        afficherErreur(0);

        return false;

        // Si le nombre de globule blanc est null
    }else if(document.getElementById("nbreGlobuleBlanc").value == 0){

        document.getElementById("infoNbreGlobuleBlanc").innerHTML = "Le nombre de globule blanc doit être supérieur à 0 !";
        afficherErreur(1);

        return false;

        // si le nombre de globule blanc par micro litre de sang est null
    }else if(document.getElementById("nbreGloBlancSang").value == 0){
        document.getElementById("infoNbreGloBlancSang").innerHTML = "Le nombre de Globules blancs/µ de sang être supérieur à 0 !";
        afficherErreur(2);

        return false;
    }else{
        return true;
    }

}


// Fonction permettant d'afficher la date et l'heure en temps réel
function date_heure(id)
{
    // Création d'une instance de date
    date = new Date;

    // Récupération de l'année
    annee = date.getFullYear();

    // Récupération du mois
    mois = date.getMonth();

    // Tableau contenant tous les mois de l'année
    listeMois = new Array('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12');

    // Récupération de la date du jour
    j = date.getDate();

    // On récupère le jour en cours
    jour = date.getDay();

    // Tableau des numéros des jours
    jours = new Array('01', '02', '03', '04', '05', '06', '07');

    // Récupération de l'heure en cours
    h = date.getHours();

    if(h<10){ // Si c'est une unité, on ajoute un 0 devant pour avoir une dizaines
        h = "0"+h;
    }

    // Récupération des minutes
    m = date.getMinutes();

    if(m<10) { //  // Si c'est une unité, on ajoute un 0 devant pour avoir une dizaines
        m = "0"+m;
    }

    // Récupération des secondes
    s = date.getSeconds();

    if(s<10) { // Si c'est une unité, on ajoute un 0 devant pour avoir une dizaines
        s = "0"+s;
    }

    // Formatage du résultat de la date et l'heure à afficher
    resultat = j+'/'+listeMois[mois]+'/'+annee+' '+h+':'+m+':'+s;

    // On affiche la date et l'heure grâce à la méthode innerHTML
    document.getElementById(id).innerHTML = resultat;

    /**
     * La méthode setTimeout() prend deux arguments: le nom de la méthode à exécuter,
     * et l'intervalle de temps(en millisecondes) à attendre avant de le
     * faire (en millisecondes) à attendre avant de le faire
     *
     * L'astuce, c'est de relancer la fonction date_heure à l'intérieur d'elle-même pour réaliser une boucle infinie
     * */
    setTimeout('date_heure("'+id+'");','1000');

    return true; // rtourne vraie
}