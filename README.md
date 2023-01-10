<h1>Les objectifs du projet :</h1>

<p align='justify'>
Le projet se présente comme le développement d’un site web, que ce soit sa partie back-office avec le back-end ou bien l’interface utilisateur avec le front-end.
<p>
<p align='justify'>
Ce repertoire contient la partie front-end du projet. Après l'avoir cloné, pour le lancer en mode production il faut lancer les commandes suivantes :
</p>

```bash
npm install
```

pour installer les dépendances du projet, puis

```bash
ng build
```

<p align='justify'>
pour le compiler, et enfin copier le contenu du dossier dist/fr-administration-front sur un serveur web pour lancer l'application. Bien entendu, il faut un serveur web pour cela. On peut utiliser http-server pour le faire en local, en lançant la commande suivante :
</p>

```bash
npm install http-server -g
http-server dist/fr-administration-front
```

<p align='justify'>
Sinon on peut juste lancer le projet en mode développement avec la commande
</p>

```bash
ng serve --open
```

<p align='justify'>
Pour que le front-end puisse accéder aux données stockées dans la base de donnée (dont notament les mots de passe), il faut que le back-end soit lancé sur le port 3000 de localhost.
</p>

<p align='justify'>
Il faut ensuite ouvrir un navigateur et aller sur <a href='http://localhost:4200/'>http://localhost:4200/</a> pour voir accéder au site de notre application.
</p>

<p align='justify'>
Par défaut on arrive sur la page de login (chemin /login), on peut soit entrer des informations de connexion et cliquer sur "login" pour se connecter et accéder à son profil, soit cliquer sur "register" pour accéder à un nouveau menu, sur leqel il est possible d'entrer les informations pour créer un nouveau compte. Une fois le compte créé, une fenêtre pop-up nous indique notre identifiant, et nous sommes redirigé vers la page de login.
</p>

<p align='justify'>
Le login ne fonctionne bien evidement que si les identifiants de connexion sont corrects.
</p>

<p align='justify'>
Une fois connecté nous sommes donc redirigé vers la page du profil. Sur cette dernière nous pouvons voir nos informations, ainsi que les modifier, ou encore accéder au rester de notre site grâce aux boutons de la barre de navigation, ou enfin se déconnecter grâce au bouton en haut à gauche toujours présent.
</p>

<p align='justify'>
Sur la barre de navigation n'apparaissent que les boutons permettant de se rendre au menus sur lesquels ne nous sommes pas déjà, il n'y a que trois menus : le profil, la liste des utiisateurs et la liste des associations.
</p>

<p align='justify'>
La liste des utilisateur permet de voir les informations de bases de tous les utilisateurs (id, nom, prénom, age), ainsi que de supprimer les utilisateurs (sauf l'utilisateur connecté), d'accéder à une page d'information personnelle, ou de filtrer les utilisateurs en fonction de leur identifiant.
</p>

<p align='justify'>
La liste des associations propose l'équivalent pour les associations.
</p>

<p align='justify'>
Enfin les pages d'informations complémentairs pour les utilisateurs et les applications, permettent en plus de voir à quel association un utilisateur appartient, ou quel utilisateur est présent dans une association, ainsi que de se rendre à la page d'information de ces derniers.
</p>

<br>

---

<br>

# FrAdministrationFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
