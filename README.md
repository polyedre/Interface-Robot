# Interface pour visualiser l'état d'un robot

## Le principe

L'association Eirbot, de l'école d'ingénieur ENSEIRB-MATMECA, participe chaque année à la **[Coupe de France de Robotique](https://www.coupederobotique.fr/edition-2019/le-concours/thematique/)**. Le projet est donc la construction d'un robot qui doit effectuer une série de tâches qui vont lui rapporter plus ou moins de points.

Afin de faciliter la construction du robot, le projet **Interface Robot** consiste écrire une page web qui va résumer de façon graphique l'état des différents paramètres du robot (état des roues, états des différents capteurs...).

La liaison entre le robot et l'ordinateur se fait par bluetooth. Dans l'idée, un script python récupère les informations du robot et les enregistre au format JSON dans un fichier.

La page web récupère ensuite un fichier JSON par l'envoie de requêtes au serveur python à intervalle régulier (toute les secondes à peu près) pour afficher les donnée sur la page.

### Communication entre le serveur python et le client

À l'initialisation de la communication, le serveur python est lancé. Il récupère via la liaison bluetooth les données issues du robot, attend de la part du client des requêtes GET quelconques. Le serveur python répond alors un fichier JSON contenant les informations parsées en provenance du robot.

Grâce à Vue.js, le contenu est alors actualisé en temps réel.

## Ce qui est fonctionnel

Il est d'ores et déjà possible d'établir une connexion entre les deux serveurs, et d'afficher via le template le fichier JSON transmis.

## Liste des choses à faire

 - La partie Web :
   - En utilisant du CSS et en modifiant le template, faire une interface plus propre : par exemple différents éléments graphiques en fonction du type de donnée.
   - Gérer l'envoi régulier de requêtes au serveur Python.

 - La partie communication avec le Robot :
   - Créer un faux robot capable de communiquer en bluetooth.
   - Gérer la communication avec le Robot.

## Liste des paramètres à afficher

 - Position
 - Angle
 - Vitesse
 - Accélération
 - Carte de la table avec la position
 - Codeurs (nombre de tours des roues)
 - Capteurs de proximité (avec valeur de seuil et changement de couleur en fonction)
