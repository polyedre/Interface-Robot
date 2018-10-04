# Interface pour visualiser l'état d'un robot

## Le principe

L'association Eirbot, de l'école d'ingénieur ENSEIRB-MATMECA, participe chaque année à la **[Coupe de France de Robotique](https://www.coupederobotique.fr/edition-2019/le-concours/thematique/)**.
Le projet est donc la construction d'un robot qui doit effectuer une série de tâches qui vont lui rapporter plus ou moins de points.

Afin de faciliter la construction du robot, le projet **Interface Robot** consiste écrire une page web qui va résumer de façon graphique l'état des différents paramètres du robot (état des roues, états des différents capteurs...).

La liaison entre le robot et l'ordinateur se fait par bluetooth. Dans l'idée, un script python récupère les informations du robot et les enregistre au format JSON dans un fichier.

La page web récupère ensuite le fichier JSON à intervalle régulier (toute les secondes à peu près) pour afficher les donnée sur la page.

## Le problème actuel

Je n'arrive pas à charger le fichier JSON pour exploiter ensuite son contenu.

## Liste des choses à faire

 - La partie Web :
   - Une interface graphique propre
   - Différents éléments graphiques en fonction du type de donnée
   - Actualiser régulièrement le chargement du fichier JSON et l'utiliser pour modifier les données contenues dans le code html
 
 
 - La partie communication avec le Robot
   - Créer un faux robot capable de communiquer en bluetooth
   - Écrire le script python en utilisant le module pybluez