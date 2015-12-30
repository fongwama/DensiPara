/**
 * Created by Aristide Ciriaque on 12/11/2015.
 */
$(document).ready(function(){
    // default value for the number of white blood cell / microlitre of blood
    $('#input_nb_wbc_blood').val(8000);

    // action to compute parasitemia
    $("#button_compute").click(function(){
        compute_parasitemia();
    });

    // hide error message once enter input field
    $("#input_nb_parasite").keyup(function(){
        $("#info_nb_parasite").css("display","none;").fadeOut(500);
    });
    $("#input_nb_wbc").keyup(function(){
        $("#info_nb_wbc").css("display","none;").fadeOut(500);
    });
    $("#input_nb_wbc_blood").keyup(function(){
        $("#info_nb_wbc_blood").css("display","none;").fadeOut(500);
    });

    // reset form
    $("#button_reset").click(function() {
        $("#input_nb_parasite").val("");
        $("#input_nb_wbc").val("");
        $("#input_parasitemia").val("");
        $("#input_ref_id").val("");
    });


    // Appel de la fonction d'affichage de l'heure
    print_date_time("#input_date_time");
});


// Méthode permettant de calculer la densité parasitaire
function compute_parasitemia() {
    if(check_input_data()) { // Si l'utilisateur à tout renseigner, alors
        var resultat = $("#input_nb_parasite").val() * $("#input_nb_wbc_blood").val() / $("#input_nb_wbc").val();
        $("#input_parasitemia").val(Math.round(resultat));
    }
    print_date_time("#input_date_time");
}


function check_input_data() {
    // check in input fields are nummbers
    //
    // nombre de parasites
    if ( !$.isNumeric( $("#input_nb_parasite").val() ) ){
            alert( $("#input_nb_parasite").val() );
        // clean data and focus on input
        $("#input_nb_parasite").val("");
        $("#input_nb_parasite").focus();
        // print error message
        $("#info_nb_parasite").html("Veuillez saisir le nombre de parasites.");
        $("#info_nb_parasite").css("display","block");
        return false;
    }
    // nombre de globules blancs
    // doit impérativement être différent de 0
    if ( !$.isNumeric( $("#input_nb_wbc").val() ) ){
        // clean data and focus on input
        $("#input_nb_wbc").val("");
        $("#input_nb_wbc").focus();
        // print error message
        $("#info_nb_wbc").html("Veuillez saisir le nombre de globules blancs.");
        $("#info_nb_wbc").css("display","block");
        return false;
        // nombre de globules blancs
        // doit impérativement être différent de 0
    }else if ( $("#input_nb_wbc").val() == 0 ) {
        // clean data and focus on input
        $("#input_nb_wbc").val("");
        $("#input_nb_wbc").focus();
        // print error message
        $("#info_nb_wbc").html("Le nombre de globules blancs ne doit pas être nul.");
        $("#info_nb_wbc").css("display","block");
        return false
    }
    // nombre de globules blancs / µL de sang
    if ( !$.isNumeric( $("#input_nb_wbc_blood").val() ) ){
        // clean data and focus on input
        $("#input_nb_wbc_blood").val("");
        $("#input_nb_wbc_blood").focus();
        // print error message
        $("#info_nb_wbc_blood").html("Veuiller saisir le nombre de globules blancs / µL de sang.");
        $("#info_nb_wbc_blood").css("display","block");
        return false;
    }
    // si tout c'est bien passé
    return true;

}


// function to build date and time
function print_date_time(id)
{
    // create new Date instance
    date = new Date;
    // get year
    year = date.getFullYear();
    // get month
    month = date.getMonth() + 1;
    // get day
    day = date.getDate();
    // get hours
    h = date.getHours();
    // add '0' if hours < 10
    if(h<10){
        h = "0"+h;
    }
    // get minutes
    m = date.getMinutes();
    // add '0' if minutes < 10
    if(m<10) {
        m = "0"+m;
    }
    // format ouput
    output= day+'/'+month+'/'+year+' '+h+':'+m;
    // print date and time
    $(id).val(output);
    return true; 
}
