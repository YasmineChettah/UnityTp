# UnityTp


# Documentation du Projet Unity

## **Prérequis à installer**
**Repos git avec les elements unity ** 
https://github.com/YasmineChettah/TheRosettaMystery

### **SQLite sur unity**
   - **Bibliothèque SQLite pour Unity** : Utilisation de `Mono.Data.Sqlite` pour la connexion à la base de données SQLite.
   - **Téléchargement** : Vous pouvez inclure le package SQLite de Unity en utilisant les `NuGet` ou en ajoutant la DLL appropriée manuellement. Si vous souhaitez utiliser un autre gestionnaire de paquet, voici quelques ressources :
     - [SQLite for Unity (GitHub)](https://github.com/artyom-mirzoyan/sqlite-unity)
   - **Installation** :
     - Si vous utilisez un gestionnaire de paquet (par exemple, NuGet), installez `System.Data.SQLite` ou un autre package compatible.
     - Si vous souhaitez l'intégrer manuellement, téléchargez les fichiers nécessaires à partir de l'URL ci-dessus et placez-les dans le répertoire `Plugins` de votre projet Unity.

### **Serveur WebSocket en JavaScript**
   - **Node.js** : Environnement d'exécution JavaScript pour le serveur WebSocket.
   - **WebSocket Sharp (C#)** : Utilisé côté Unity pour gérer la communication WebSocket avec le serveur.
   - **Installation du serveur WebSocket** :
     - Téléchargez et installez **Node.js** : [Télécharger Node.js](https://nodejs.org/)
     - Une fois Node.js installé, créez un projet Node.js :
       ```
       mkdir websocket-server
       cd websocket-server
       npm init -y
       ```
     - Installez la bibliothèque **ws** pour WebSocket en exécutant :
       ```
       npm install ws
       ```

   - **Code serveur WebSocket** (exemple en JavaScript) :
    dans le dépot git

   - **Lancer le serveur** :
     Exécutez le serveur en utilisant la commande suivante dans le terminal :
     ```
     node server.js
     ```

### **WebSocketSharp pour Unity**
   - **WebSocketSharp** : Utilisé côté Unity pour établir une connexion avec le serveur WebSocket en JavaScript.
   - **Installation** :
     - Téléchargez le package WebSocketSharp depuis [GitHub](https://github.com/sta/websocket-sharp) ou via NuGet.
     - Ajoutez la DLL du package dans le dossier `Plugins` de votre projet Unity.

---

## **Configuration de la Base de Données SQLite**

 **Créer la base de données SQLite** :
   - Lors de la première exécution de votre application, la base de données SQLite sera automatiquement créée.
   - Le fichier de base de données sera stocké dans le dossier `Application.persistentDataPath`.

  **Accès à la base de données depuis Unity** :
   Utilisation des commandes SQLite en C# pour effectuer des opérations sur la base de données. 

** Structure du modèle relationnel SQLite de la base de données SGBD : ** 
Table users :

id : Identifiant unique de l'utilisateur, clé primaire.
username : Nom d'utilisateur, qui est unique.
password : Mot de passe de l'utilisateur.

Table stats :

id : Identifiant unique, clé primaire.
username : Nom d'utilisateur, clé étrangère référencée depuis la table users.
score : Score de l'utilisateur, valeur par défaut 0.
level : Niveau de l'utilisateur, valeur par défaut 1.
Cette table lie directement un utilisateur à ses statistiques de jeu.

Table Items

Table comments :

id : Identifiant unique pour chaque commentaire, clé primaire.
username : Nom d'utilisateur, clé étrangère référencée depuis la table users.
comment : Texte du commentaire.
timestamp : Date et heure de création du commentaire.
Cette table permet de gérer les commentaires des utilisateurs et d'y associer un utilisateur spécifique.

Relations dans le modèle relationnel :
La table stats est liée à la table users via la clé étrangère username. Cela signifie qu'une entrée dans la table stats est associée à un utilisateur spécifique.
La table comments est également liée à la table users via la clé étrangère username.

---

## **Conclusion**
Ce projet intègre Unity avec une base de données SQLite et un serveur WebSocket en JavaScript pour fournir une solution de commentaires en temps réel. Il permet aux utilisateurs de se connecter, d'envoyer des commentaires et de les enregistrer dans une base de données locale, le tout en temps réel via WebSocket.
