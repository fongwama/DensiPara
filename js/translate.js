var translation = {
    "fr" : {
        "menu_home"               : "Accueil",
        "menu_about"              : "À propos",
        "menu_help"               : "Aide",
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
        "label_ref_id"            : "Référence de l'échantillon",
        "label_date_time"         : "Date et heure",
        "about_description"       : "est une application de calcul de la densité parasitaire pour le diagnostic du paludisme.",
        "about_fcrm"              : "Coordination scientifique et technique : Fondation Congolaise pour la Recherche Médicale (FCRM).",
        "about_fongwama"          : "Développement : FCRM et Fongwama, la plateforme congolaise de développement libre.",
        "about_sponsors"          : "Ce projet est soutenu par nos partenaires : ",
        "about_license"           : "Cette application est un logiciel libre diffusé sous la licence ",
        "help_description"        : "La densité parasitaire est une estimation du nombre de parasites par microlitre de sang chez un individu infecté. C’est un paramètre important pour déterminer la force de l’infection plasmodiale. Elle est utilisée par les médecins pour affiner leur diagnostic et adapter leur traitement. Cette application est à destination des techniciens de laboratoire qui diagnostiquent le paludisme par microscopie (goutte épaisse et frottis sanguin).",
        "help_user"               : "L’utilisateur fournit comme paramètres d'entrée le nombre de parasites et le nombre de globules blancs comptés par microscopie. Une valeur par défaut est utilisée pour le nombre de globules blancs par µL de sang. Cette valeur peut être modifiée. Le bouton 'Calculer' permet d'effectuer le calcul. Le bouton 'Réinitialiser' efface tous les champs."
    },
    "en" : {
        "menu_home"               : "Home",
        "menu_about"              : "About",
        "menu_help"               : "Help",
        "label_nb_parasite"       : "Number of parasites",
        "info_nb_parasite"        : "Please enter the number of parasites.",
        "label_nb_wbc"            : "Number of white blood cells",
        "info_nb_wbc"             : "Please enter the number of white blood cells.",
        "info_nb_wbc_null"        : "Number of white blood cells cannot be null.", 
        "label_nb_wbc_blood"      : "Nombre of white blood cells / µL of blood",
        "info_nb_wbc_blood"       : "Please enter the number of white blood cells / µL of blood.", 
        "button_compute"          : "Compute",
        "button_reset"            : "Reset",
        "label_parasitemia"       : "Parasite density",
        "label_parasitemia_unit"  : "parasites / µL of blood",
        "label_ref_id"            : "Sample id",
        "label_date_time"         : "Date and time", 
        "about_description"       : "is an application to compute parasite density for malaria diagnosis.",
        "about_fcrm"              : "Scientific et technical management: Fondation Congolaise pour la Recherche Médicale (FCRM).",
        "about_fongwama"          : "Development: FCRM and Fongwama, the congolese plateforme for open source development",
        "about_sponsors"          : "This project is supported by our sponsors:",
        "about_license"           : "This application is an open source software under the license",
        "help_description"        : "Parasite density is an estimation of the number of parasites per microliter of blood in an infected individual. It's an important factor to determine the strength of the plasmodial infection. It helps physicians to diagnose malaria and to adapt the treatment. This application is a tool for laboratory technicians who diagnose malaria by microscopy (thick or thin blood smear).",
        "help_user"               : "The user provides as input parameters the number of parasites and the number of white blood cells measured by miscrocopy. A default value is used for the number of white blood cells per µL of blood. This value can be modified. The button 'Compute' is used to perform the calculation of parasite density. The button 'Reset' is used to clean all the inputs and the obtained parasite density."
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
