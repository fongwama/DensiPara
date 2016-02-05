/**
 * Created by Aristide Ndielé on 12/11/2015.
 */
$(document).ready(function(){
    // default value for the number of white blood cell / microlitre of blood
    $('#input_nb_wbc_blood').val(8000);

    // action to compute parasitemia
    $("#button_compute").click(function(){
        compute_parasitemia();
    });

    // hide error messages once enter input field
    $("#input_nb_parasite").keyup(function(){
        $("#info_nb_parasite").css("display","none;").fadeOut(500);
    });
    $("#input_nb_wbc").keyup(function(){
        $("#info_nb_wbc").css("display","none;").fadeOut(500);
        $("#info_nb_wbc_null").css("display","none;").fadeOut(500);
        $("#info_nb_wbc_200").css("display","none;").fadeOut(500);
        $("#info_nb_wbc_500").css("display","none;").fadeOut(500);
    });
    $("#input_nb_wbc_blood").keyup(function(){
        $("#info_nb_wbc_blood").css("display","none;").fadeOut(500);
    });

    // reset form
    $("#button_reset").click(function() {
        // clean all input fields but input_nb_wbc_blood (default value)
        $("#input_nb_parasite").val("");
        $("#input_nb_wbc").val("");
        $("#input_parasitemia").val("");
        $("#input_ref_id").val("");
        $("#input_tech_id").val("");
        $('input:checkbox').removeAttr('checked');
        // put focus on the first input field
        $("#input_nb_parasite").focus();
    });


    // refresh date and time
    print_date_time("#input_date_time");
});


// calculate parasite density
function compute_parasitemia() {
    if(verify_input_data()) { // check inputs first
        var resultat = $("#input_nb_parasite").val() * $("#input_nb_wbc_blood").val() / $("#input_nb_wbc").val();
        $("#input_parasitemia").val(Math.round(resultat));
    }
    // update date and time
    print_date_time("#input_date_time");
}


function verify_input_data() {
    // verify input fields

    // error messages
    
    // number of parasites
    if ( !$.isNumeric( $("#input_nb_parasite").val() ) ){
        // clean data and focus on input
        $("#input_nb_parasite").val("");
        $("#input_nb_parasite").focus();
        // display error message
        $("#info_nb_parasite").css("display","block");
        return false;
    }

    // number of white blood cells
    if ( !$.isNumeric( $("#input_nb_wbc").val() ) ){
        // clean data and focus on input
        $("#input_nb_wbc").val("");
        $("#input_nb_wbc").focus();
        // display error message
        $("#info_nb_wbc").css("display","block");
        return false;
    // must be not null
    }else if ( $("#input_nb_wbc").val() == 0 ) {
        // clean data and focus on input
        $("#input_nb_wbc").val("");
        $("#input_nb_wbc").focus();
        // display error message
        $("#info_nb_wbc_null").css("display","block");
        return false;
    }

    // number of white blood cells / µL of blood
    if ( !$.isNumeric( $("#input_nb_wbc_blood").val() ) ){
        // clean data and focus on input
        $("#input_nb_wbc_blood").val("");
        $("#input_nb_wbc_blood").focus();
        // display error message
        $("#info_nb_wbc_blood").css("display","block");
        return false;
    }

    // warning messages
    // number of white blood cells
    if ( $("#input_nb_wbc").val() < 200 ) {
        $("#info_nb_wbc_200").css("display","block");
    } else if ( $("#input_nb_parasite").val() < 10 && $("#input_nb_wbc").val() < 500) {
        $("#info_nb_wbc_500").css("display","block");
    }
    
    // everything is fine
    return true;
}


// function to prefix zero if number < 10
function prefix_zero(number) {
    if(number<10){
        number = "0"+number;
    }
    return number;
}


// function to build date and time
function print_date_time(id) {
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
    // get minutes
    m = date.getMinutes();
    // format ouput
    output= prefix_zero(day)+'/'+prefix_zero(month)+'/'+year+' '+prefix_zero(h)+':'+prefix_zero(m);
    // print date and time
    $(id).val(output);
    return true; 
}


