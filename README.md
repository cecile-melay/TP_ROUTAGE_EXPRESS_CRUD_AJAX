# TP_ROUTAGE_EXPRESS_CRUD_AJAX & TP3

## A Consignes du TP Routage Express Crud Ajax

-terminer la pagination standard & avec vue

-peupler le tableau par les restaurants (il faudra poster les restaurant dans Public)

## B Consignes du TP3

10) Ajouter dans App.vue un <p>Ceci est un test<p>. Que fait le CSS de User.vue ? Ajouter l'attribut "scoped" à la balise <style> de User.vue, que se passe-t-il ?

//

FECUMUH 

Page de documentation de vue-cli: https://github.com/vuejs/vue-cli

Page générale sur VueJS: https://github.com/vuejs

1) INSTALLER Vue-cli: exécuter "npm install -g vue-cli", si vous êtes sous Linux ou Mac OS, il se peut que vous deviez faire "sudo npm install -g vue-cli" (essayez d'abord sans le sudo). Idem, sous windows il se peut que vous deviez avoir ouvert le terminal DOS en mode "administrateur".

2) Créez un répertoire pour le TP

3) Avec la ligne de commande, allez dans ce répertoire ("cd ....");

4) On va maintenant créer une application VueJS avec le mode "webpack-simple" (cf la page de doc: https://github.com/vuejs/vue-cli), on peut en effet créer plusieurs types de projets avec vue-cli.

La commande à exécuter est "vue init webpack-simple nom_de_votre_app", je suggère quelques chose comme nom qui ressemble à "my-app-vue-cli1" par exemple. Vous exécuterez donc la commande : "vue init webpack-simple "my-app-vue-cli1"

Vous devrez alors répondre à un petit questionnaire, en général vous faites "enter", répondez "non" si on vous demande d'utiliser "SAAS" (un pré-processeur CSS comme LESS).

Cela va créer un sous-répertoire my-app-vue-cli qui contiendra tout ce qu'il faut pour démarrer :

- Une application exemple, un environnement de développement, etc.

5) Aller dans le répertoire de l'application et faites "npm install" pour installer les dépendances (de l'environnement de développement, et du framework)

6) Exécutez l'application de test avec "npm run dev". Si jamais vous avez une page qui affiche "ERR EMPTY RESPONSE", il se peut que vous deviez changer le port du serveur de dev. Allez dans le fichier webpack.config.js et ajoutez une ligne "port:3000" par exemple, dans la config du devserver. Voici ce que j'ai dans ma config:

 devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    port:3000			
  },

7) Etudier le code du fichier main.js, index.js et App.vue

8) Créer un composant User.vue qui affiche le nom d'un utilisateur, le mettre en GLOBAL component

9) Créer un composant Info.vue qui affiche des infos supplémentaires sous forme de <p>, et qui soit LOCAL à User.vue

10) Ajouter dans App.vue un <p>Ceci est un test<p>. Que fait le CSS de User.vue ? Ajouter l'attribut "scoped" à la balise <style> de User.vue, que se passe-t-il ?

11) En étant sûr d'être dans le répertoire du projet faites "npm install -save vue-router" pour installer le module de routage de vueJS.
