# DensiPara

Application de calcul de la densité parasitaire pour le diagnostic du paludisme. 

La densité parasitaire est une mesure de la quantité de parasites dans le sang. C’est un paramètre très important pour déterminer la force de l’infection plasmodiale. Elle est utilisée par les médecins pour affiner leur diagnostic et adapter leur traitement. Cette application est à destination des techniciens de laboratoire qui diagnostiquent le paludisme par microscopie (goutte épaisse et frottis sanguin).

## Version web

Utilisez DensiPara en ligne en cliquant sur le lient suivant : [fongwama.github.io/DensiPara](http://fongwama.github.io/DensiPara/)

## Version PC (et Mac aussi)

- Télécharger la dernière version de DensiPara en cliquant sur le lien suivant : [DensiPara-master.zip](https://github.com/fongwama/DensiPara/archive/master.zip)
- Décompressez le fichier `DensiPara-master.zip` que vous avez téléchargé (sous Windows, en cliquant droit sur le fichier puis en sélectionnant "Extraire tout..."). L'application sera dans le répertoire `Densipara-master`.
- Ouvrez le fichier `index.html` (ou `index` sous Windows) avec un navigateur internet récent (de préférence Mozilla Firefox ou Google Chrome).

## Version Android

DensiPara est disponible sur la bibliothèque d'applications Android Google Play Store : [ ![Google Play Badge](local/google-play-badge.png) ](https://play.google.com/store/apps/details?id=com.fcrm.densipara)

Le fichier apk est généré par l'outil [Build](https://build.phonegap.com/) de PhoneGap et peut être téléchargé [ici](https://build.phonegap.com/apps/1868589/share).


## Guide d'utilisation

### Rubrique Analyse goutte épaisse

L’utilisateur fournit comme paramètres d'entrée le nombre de parasites et le nombre de globules blancs comptés par microscopie. Une valeur par défaut est utilisée pour le nombre de globules blancs par µL de sang. Cette valeur peut être modifiée. Le bouton *Calculer* permet d'effectuer le calcul. Le bouton *Réinitialiser* efface tous les champs.

Dans les versions web et PC, les rubriques supplémentaires "Analyse frottis sanguin" et "Contrôle qualité" sont disponibles.

### Rubrique Analyse frottis sanguin

L'utilisateur renseigne les espèces des parasites identifiées par frottis sanguin.

### Rubrique Contrôle qualité

Dans le cadre d'une démarche du contrôle de la qualité, l'utilisateur renseigne les champs *Référence de l'échantillon* et *Nom du technicien*. 

Le champ *Date et heure* est mis à jour automatiquement par l'application.

Le bouton *Exporter les données* permet d'exporter et de sauvegarder les données de l'application sur le disque dur.



## Licence

Cette application est un logiciel libre diffusé sous la licence [GNU General Public License](LICENSE) (GPL).


