# DepanneTout

## Brief

### Contexte du projet

Une association d'animation de voisinage, vous demande de réaliser une plateforme de réservation afin que chaque utilisateur puisse :

* proposer un service
* réserver un ou plusieurs services.
* rechercher un service par mot clés sur le nom.

L'hautentification est gérée à l'aide de JWT. Un utilisateur ne peux pas réserver son propre service.

A l'inscription, l'utilisateur doit obligatoirement fournir:

* un nom d'utilisateur
* un email
* un mot de passe
* une confirmation de mot de passe
* son adresse postale

Un service doit comporter les informations suivantes:

* Le nom de l'utilisateur qui propose le service
* Le nom du service proposé
* Le tarif proposé
* La ville
* L'horaire de début et de fin

**BONUS**: Afficher la durée du service en plus des horaires.

**BONUS 2**: Créer l'interface utilisateur à l'aide de React.

### Modalités pédagogiques

Vous réaliserez ce projet en binôme

### Critères de performance

* Le mot de passe est hasché ..................................................... OK
* L'utilisation de JWT est fonctionelle .......................................... OK
* Les verbes HTTP sont correctement utilisés ..................................... OK
* Il est possible de publier un service .......................................... OK
* Il est possible d'éditer un service par l'utilisateur qui l'a créer ............ En Cours
* Il est possible de supprimer un service par l'utilisateur qui l'a créer ........ A faire
* Il est possible de rechercher un service par nom ............................... OK
* Il est possible de réserver un service d'un autre utilisateur .................. OK
* Une fois réservé, le service n'est plus proposé en recherche ................... OK
* Le code est indenté et documenté ............................................... A faire

### Modalités d'évaluation

Évaluation avec le formateur
NOTE: N'hésitez pas à aborder vos difficultés à chaud lors du rendu sur Simplonline, afin que nous les abordions lors de la revue de code.

### Livrables

Depot github avec commits réguliers