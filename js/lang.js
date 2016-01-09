var translation = {
    "fr" : {
        "label_nb_parasite"       : "Nombre de parasites",
        "info_nb_parasite"        : "Veuillez saisir le nombre de parasites.",
        "label_nb_wbc"            : "Nombre de globules blancs",
        "info_nb_wbc"             : "Veuillez saisir le nombre de globules blancs.",
        "info_nb_wbc_null"        : "Le nombre de globules blancs ne doit pas être nul.", 
        "label_nb_wbc_blood"      : "Nombre de globules blancs / µL de sang",
        "info_nb_wbc_blood"       : "Veuiller saisir le nombre de globules blancs / µL de sang.", 
        "button_compute"          : "Calculer",
        "button_reset"            : "Réinitialiser",
        "label_parasitemia"       : "Densité parasitaire",
        "label_parasitemia_unit"  : "parasites / µL de sang",
        "label_ref_id"            : "Numéro de référence",
        "label_date_time"         : "Date et heure" 
    },
    "en" : {
        "label_nb_parasite"       : "Number of parasites",
        "info_nb_parasite"        : "Please enter the number of parasites.",
        "label_nb_wbc"            : "Number of white blood cells",
        "info_nb_wbc"             : "Please enter the number of white blood cells.",
        "info_nb_wbc_null"        : "Number of white blood cells cannot be null.", 
        "label_nb_wbc_blood"      : "Nombre of white blood cells / µL of blood",
        "info_nb_wbc_blood"       : "Please enter the number of white blood cells / µL of blood.", 
        "button_compute"          : "Compute",
        "button_reset"            : "Reset",
        "label_parasitemia"       : "Parasitemia",
        "label_parasitemia_unit"  : "parasites / µL of blood",
        "label_ref_id"            : "Reference id",
        "label_date_time"         : "Date and time" 
    }
}

function translate(lang) {
    if (lang == "en") {
        $.each( translation.en, function(key, value) {
            $("#" + key).html(value);
        });
    };
    if (lang == "fr") {
        $.each( translation.fr, function(key, value) {
            $("#" + key).html(value);
        });
    };
  return true;
}


$( "#lang-en" ).click(function() {
translate('en');
});

$( "#lang-fr" ).click(function() {
translate('fr');
});

// detect local language used by navigator 
// english by default
var user_lang = (navigator.language || navigator.userLanguage).split('-')[0];
if( user_lang == "fr" ) {
    translate('fr');
} else {
    translate('en');
}

