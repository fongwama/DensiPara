/**
 * Created by Aristide Ciriaque on 12/11/2015.
 */
$(document).ready(function(){
    /**
     * Validation des données
     */

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
    afficher_date_heure("#date_heure");
});


// Méthode permettant de calculer la densité parasitaire
function calculer() {
    if(check_input_data()) { // Si l'utilisateur à tout renseigner, alors
        var resultat = $("#nbreParasite").val() * $("#nbreGloBlancSang").val() / $("#nbreGlobuleBlanc").val();
        $("#densite").val(Math.round(resultat));
    }
    afficher_date_heure("#date_heure");
}


/*
 réinitialiser les champs de saisies
 @param arguments : liste des id des composants é vider.
 */
function reset ()
{
    $("#nbreParasite").val("");
    $("#nbreGlobuleBlanc").val("");
    $("#densite").val("");
    $("#numeroReference").val("");

}


function check_input_data() {
    // check in input fields are nummbers
    //
    // nombre de parasites
    if ( !$.isNumeric( $("input#nbreParasite").val() ) ){
        // clean data and focus on input
        $("input#nbreParasite").val("");
        $("input#nbreParasite").focus();
        // print error message
        $("#infoNbreParasite").html("Veuillez saisir le nombre de parasites.");
        $("#infoNbreParasite").css("display","block");
        return false;
    }
    // nombre de globules blancs
    // doit impérativement être différent de 0
    if ( !$.isNumeric( $("input#nbreGlobuleBlanc").val() ) ){
        // clean data and focus on input
        $("input#nbreGlobuleBlanc").val("");
        $("input#nbreGlobuleBlanc").focus();
        // print error message
        $("#infoNbreGlobuleBlanc").html("Veuillez saisir le nombre de globules blancs.");
        $("#infoNbreGlobuleBlanc").css("display","block");
        return false;
        // nombre de globules blancs
        // doit impérativement être différent de 0
    }else if ( $("input#nbreGlobuleBlanc").val() == 0 ) {
        // clean data and focus on input
        $("input#nbreGlobuleBlanc").val("");
        $("input#nbreGlobuleBlanc").focus();
        // print error message
        $("#infoNbreGlobuleBlanc").html("Le nombre de globules blancs ne doit pas être nul.");
        $("#infoNbreGlobuleBlanc").css("display","block");
        return false
    }
    // nombre de globules blancs / µL de sang
    if ( !$.isNumeric( $("input#nbreGloBlancSang").val() ) ){
        // clean data and focus on input
        $("input#nbreGloBlancSang").val("");
        $("input#nbreGloBlancSang").focus();
        // print error message
        $("#infoNbreGloBlancSang").html("Veuiller saisir le nombre de globules blancs / µL de sang.");
        $("#infoNbreGloBlancSang").css("display","block");

        return false;
    }
    // si tout c'est bien passé
    return true;

}


// Fonction permettant d'afficher la date et l'heure en temps réel
function afficher_date_heure(id)
{
    // Création d'une instance de date
    date = new Date;

    // Récupération de l'année
    annee = date.getFullYear();

    // Récupération du mois
    mois = date.getMonth() + 1;

    // Récupération de la date du jour
    j = date.getDate();

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

    // Formatage du résultat
    resultat = j+'/'+mois+'/'+annee+' '+h+':'+m;

    // On affiche la date et l'heure
    $(id).val(resultat);

    return true; // rtourne vraie
}
