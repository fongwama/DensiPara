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
        $("#info_nb_wbc_200").css("display","none;").fadeOut(0);
        $("#info_nb_wbc_500").css("display","none;").fadeOut(0);
        $("#input_parasitemia").val("");
        $("#input_ref_id").val("");
        $("#input_tech_id").val("");
        $('input:checkbox').removeAttr('checked');
        // put focus on the first input field
        $("#input_nb_parasite").focus();
    });

    // refresh date and time
    print_date_time("#input_date_time");
    
    // prepare data for export
    // http://stackoverflow.com/questions/27398074/saving-a-data-from-html-form-to-text-file-with-jquery-javascript
    // http://jsfiddle.net/terryyounghk/kpegu/ 
    $(".export").on('click', function (event) {
        var sep_line = '\r\n';
        var sep_field = '\t';
        var csv_name = name_csv($("#input_ref_id").val());
        var csv = format_csv("DensiPara", "FCRM & Fongwama", sep_field, sep_line);
        // quality control data
        csv  += format_csv($("#label_date_time").html(), $("#input_date_time").val(), sep_field, sep_line);
        csv  += format_csv($("#label_ref_id").html(), $("#input_ref_id").val(), sep_field, sep_line);
        csv  += format_csv($("#label_tech_id").html(), $("#input_tech_id").val(), sep_field, sep_line);
        // parasitemia data
        csv  += format_csv($("#label_nb_parasite").html(), $("#input_nb_parasite").val(), sep_field, sep_line);
        csv  += format_csv($("#label_nb_wbc").html(), $("#input_nb_wbc").val(), sep_field, sep_line);
        csv  += format_csv($("#label_nb_wbc_blood").html(), $("#input_nb_wbc_blood").val(), sep_field, sep_line);
        csv  += format_csv($("#label_parasitemia").html(), $("#input_parasitemia").val(), sep_field, sep_line);
        // parasite species data
        $("input:checkbox:checked").each(function() {
            csv += format_csv($("#label_species").html(), $(this).val(), sep_field, sep_line);
        });
        // prepare data download
        if(window.navigator.msSaveOrOpenBlob && window.Blob) {
            // Internet Explorer does not support 'download' attribute
            // http://stackoverflow.com/questions/27257336/downloading-a-dynamic-csv-in-internet-explorer
            // this works for IE 10+
            var data_file = [csv];
            var data_blob = new Blob(data_file, {type: "text/csv;charset=utf-8;"});
            window.navigator.msSaveOrOpenBlob(data_blob, csv_name);
        } else {
            // for all other browsers
            //buil data uri
            csv_data = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
            // add download attribute
            $(this).attr({
                'download': csv_name,
                'href': csv_data,
                'target': '_blank'
            });
        }
    });
});


// calculate parasite density
function compute_parasitemia() {
    if(verify_input_data()) { // check inputs first
        var resultat = $("#input_nb_parasite").val() * $("#input_nb_wbc_blood").val() / $("#input_nb_wbc").val();
        $("#input_parasitemia").val(Math.round(resultat));
    }
    // hyperparasitemia
    if ( $("#input_parasitemia").val() > 250000 ) {
        $("#info_hyperparasitemia").css("display","block");
    }
    // update date and time
    print_date_time("#input_date_time");
}


// verify input fields
function verify_input_data() {
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
    } else if ( $("#input_nb_parasite").val() < 100 && $("#input_nb_wbc").val() < 500) {
        $("#info_nb_wbc_500").css("display","block");
    }
   
    // everything is fine
    return true;
}


// prepare data for csv export
function format_csv(name, value, sep_field, sep_line) {
    var line = '"' + name + '"' + sep_field;
    if( $.isNumeric( value ) ){
        line += value + sep_line;
    } else {
        line += '"' + value + '"' + sep_line;
    }
    return line;
}

// prepare filename for data export
function name_csv(sample_id) {
    var date = new Date;
    var name = "DensiPara_";
    name += date.getFullYear();
    name += prefix_zero(date.getMonth() + 1);
    name += prefix_zero(date.getDate());
    name += "_" + sample_id.replace(/[ #\/;,]/g, "_");
    name += ".tsv";
    return name;
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


