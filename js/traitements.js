/**
 * Created by Aristide Ciriaque on 12/11/2015.
 */
$(document).ready(function(){


    //Chargement du script des messages
    $.getScript('js/constantes.js');

    /**
     * Validation des données
     */

     // On s'assure que l'utilisateur saisi un nombre de parasite valide
    $(".isnumber").keypress(function(event){

        var returnValue = false;

        var charCode = (window.Event) ? event.which : event.keyCode;

        if (((charCode >= 48) && (charCode <= 57)) || (charCode == 8) ||(charCode == 13)||  (charCode == 0)){
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
    afficher_date_heure("#date_heure");
});


// Méthode permettant de calculer la densité parasitaire
function calculer() {

   if (check_input_data()) { // Si les valeurs champs sont supérieur é 0 alors on effectue le calcule
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

function check_input_data(){


    //******************** Début contrôle des champs vides ************************ //
    //****************** check in input fields aren't empty ******************** //
    //////////////////////////////////////////////////////////////////////////////

    // Si l'utilisateur n'a pas saisi le nombre de parasites et
    // le nombre de globules blancs et le nombre de globules blancs / µL de sang
    if( $("input#nbreParasite").val()=="" && $("input#nbreGlobuleBlanc").val()=="" && $("input#nbreGloBlancSang").val()=="" ){

        // On affiche les messages d'erreurs
        $("#infoNbreParasite").html(enm_messages.VIDE_NBRE_PARASITE).css("display","block");
        $("#infoNbreGlobuleBlanc").html(enm_messages.VIDE_NBRE_GLOB_BLANC).css("display","block");
        $("#infoNbreGloBlancSang").html(enm_messages.VIDE_NBRE_GLOB_BLANC_SANG).css("display","block");

        return false;
    }

    // Si l'utilisateur n'a pas saisi le nombre de parasites et
    // le nombre de globules blancs
    if( $("input#nbreParasite").val() =="" && $("input#nbreGlobuleBlanc").val() =="" ) {

        // On affiche les messages d'erreurs
        $("#infoNbreParasite").html(enm_messages.VIDE_NBRE_PARASITE).css("display", "block");
        $("#infoNbreGlobuleBlanc").html(enm_messages.VIDE_NBRE_GLOB_BLANC).css("display", "block");

        return false;
    }

    // Si l'utilisateur n'a pas saisi le nombre de parasites et
    // le nombre de globules blancs / µL de sang
    if( $("input#nbreParasite").val() =="" && $("input#nbreGloBlancSang").val() =="" ){

        // On affiche les messages d'erreurs
        $("#infoNbreParasite").html(enm_messages.VIDE_NBRE_PARASITE).css("display","block");
        $("#infoNbreGloBlancSang").html(enm_messages.VIDE_NBRE_GLOB_BLANC_SANG).css("display","block");

        return false;
    }

    // Si l'utilisateur n'a pas saisi le nombre de globule blanc et
    // le nombre de globules blancs / µL de sang
    if( $("input#nbreGlobuleBlanc").val() == "" && $("input#nbreGloBlancSang").val() =="" ){

        // On affiche les messages d'erreurs
        $("#infoNbreGlobuleBlanc").html(enm_messages.VIDE_NBRE_GLOB_BLANC).css("display","block");
        $("#infoNbreGloBlancSang").html(enm_messages.VIDE_NBRE_GLOB_BLANC_SANG).css("display","block");

        return false;
    }


    // Si l'utilisateur n'a pas saisi le nombre de parasites
    if( $("input#nbreParasite").val()=="" ) {

        // On affiche le message d'erreur
        $("#infoNbreParasite").html(enm_messages.VIDE_NBRE_PARASITE).css("display", "block");

        return false;
    }

    // Si l'utilisateur n'a pas saisi le nombre de globules blancs
    if($("input#nbreGlobuleBlanc").val() == "" ) {

        // On affiche le message d'erreur
        $("#infoNbreGlobuleBlanc").html(enm_messages.VIDE_NBRE_GLOB_BLANC).css("display", "block");

        return false;
    }

    // Si l'utilisateur n'a pas saisi le  nombre de globules blancs / µL de sang
    if( $("input#nbreGloBlancSang").val() =="" ){

        // On affiche le message d'erreur
        $("#infoNbreGloBlancSang").html(enm_messages.VIDE_NBRE_GLOB_BLANC_SANG).css("display","block");

        return false;
    }

    //******************* Fin contrôle des champs vides ************************ //


    // Si l'utilisateur a saisi que des nombres nuls
    if( $("input#nbreParasite").val() == 0 && $("input#nbreGlobuleBlanc").val() == 0 && $("input#nbreGloBlancSang").val() == 0 ){

        alert("0");

        // On affiche les messages d'erreurs
        $("#infoNbreParasite").html(enm_messages.NUL_NBRE_PARASITE).css("display","block");
        $("#infoNbreGlobuleBlanc").html(enm_messages.NUL_NBRE_GLOB_BLANC_SANG).css("display","block");
        $("#infoNbreGloBlancSang").html(enm_messages.NUL_NBRE_GLOB_BLANC_SANG).css("display","block");

        return false;
    }

    // Si le nombre de parasite et le nombre de globuls blancs sont nuls
    if( $("input#nbreParasite").val() == 0 && $("input#nbreGlobuleBlanc").val() ==0 ) {

        // On affiche les messages d'erreurs
        $("#infoNbreParasite").html(enm_messages.NUL_NBRE_PARASITE).css("display", "block");
        $("#infoNbreGlobuleBlanc").html(enm_messages.NUL_NBRE_GLOB_BLANC).css("display", "block");

        return false;
    }

    // Si le nombre de parasites et le nombre de globules blancs par microlitre de sang sont nuls
    if( $("input#nbreParasite").val() == 0 && $("input#nbreGloBlancSang").val() == 0 ){

        // On affiche les messages d'erreurs
        $("#infoNbreParasite").html(enm_messages.NUL_NBRE_PARASITE).css("display","block");
        $("#infoNbreGloBlancSang").html(enm_messages.NUL_NBRE_GLOB_BLANC_SANG).css("display","block");

        return false;
    }

    // Si le nombre globules blancs et le nombre de globuls blancs par microlitre de sang sont nuls
    if( $("input#nbreGlobuleBlanc").val() == 0 && $("input#nbreGloBlancSang").val() == 0 ){

        // On affiche les messages d'erreurs
        $("#infoNbreGlobuleBlanc").html(enm_messages.NUL_NBRE_GLOB_BLANC).css("display","block");
        $("#infoNbreGloBlancSang").html(enm_messages.NUL_NBRE_GLOB_BLANC_SANG).css("display","block");

        return false;
    }


    // Si le nombre de parasites est nul
    if( $("input#nbreParasite").val() == 0 ) {

        // On affiche le message d'erreur
        $("#infoNbreParasite").html(enm_messages.NUL_NBRE_PARASITE).css("display", "block");

        return false;
    }

    // Si le nombre de globuls blancs est nul
    if($("input#nbreGlobuleBlanc").val() == 0 ) {

        // On affiche le message d'erreur
        $("#infoNbreGlobuleBlanc").html(enm_messages.NUL_NBRE_GLOB_BLANC).css("display", "block");

        return false;
    }

    // Si le nombre de globuls blancs par microlitre de sang est nul
    if( $("input#nbreGloBlancSang").val() == 0 ){

        // On affiche le message d'erreur
        $("#infoNbreGloBlancSang").html(enm_messages.NUL_NBRE_GLOB_BLANC_SANG).css("display","block");

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