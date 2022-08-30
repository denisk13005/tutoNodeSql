# Tuto Sql avec NodeJs

` npm i sqlite3 axios` installation des dépendances

On instancie les packages sqlite et axios
on crée un fichier db
On crée une bdd db grace a la méthode Database de sqlite et on la lie au fichier db créer précédement

### on crée une table users

On va lui indiquer les collones qui vont la composer, on renseignera l'ID comme clé primaire

### on va peupler notre bdd grâce a l'api random data

On y récupérera des valeurs qu'on attribura a notre bdd avec INSERT INTO

### on récupère les données ainsi créées depuis NOTRE bdd

Grace a SELECT \* FROM users et a db.all
