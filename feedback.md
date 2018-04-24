# Feedback du prof

## Etape 1 : On installe

### Enoncé

- Création du header en HTML
- Création du plateau (conteneur des cartes) en HTML
- Création des 28 `.carte` avec une boucle
- CSS des cartes en 100 x 100 pixels
- Création de 2 enfants `.cache` et `.image` dans chaque `.carte`

### Notions

- [x] Syntaxe HTML (header et plateau)
- [x] Boucle `for` de création des 28 `.carte`
- [x] Utilisation de `document.createElement()` ou `$('<div>')` pour créer les cartes
- [x] Styliser les `.carte` à l'aide de la classe CSS
- [x] Utilisation de `appendChild` ou `append` pour ajouter les `.cache` et `.image` dans `.carte`

### Commentaires

- Nickel :thumbsup:





## Etape 2 : On retourne

### Enoncé

- Gérer l'évènement du `click` sur une carte
- Afficher `.image` et masquer `.cache`
- Mettre un effet de `hover` sur les cartes

### Notions

- [x] Utiliser `.addEventListener()` ou `.on()` pour gérer le clique sur une carte
- [x] Gérer l'affichage de `.image` et `.cache` avec les méthodes `.show()` et `.hide()` ou bien en vanilla avec `element.style.display = 'none';` par exemple.
- [x] Syntaxe CSS pour le `hover`

### Commentaires

- RAS :ok_hand:



## Etape 3 : La face visible

### Enoncé

- Utiliser les fichier `cards.png` pour afficher les images des fruits
- Définir la position de chaque image avec `background-position`
- Mélanger les cartes sur le plateau

### Notions

- [x] Gérer l'affichage des cartes avec la méthode du _sprite_ en CSS
- [x] Utilisation du `background-position` pour afficher chaque image sur `.carte`
- [x] Mélanger les cartes avec un `Math.random()`

### Commentaires

- Nickel :thumbsup:





## Etape 4 : Une paire ?

### Enoncé

- Gestion des paires
- Interval de 1 seconde après avoir retourné 2 mauvaises cartes

### Notions

- [x] Enregistrer la première carte retournée et la comparer à la deuxième
- [x] Masquer les mauvaises paires en interchangeant `.image` et `.cache`
- [x] Sauvegarder le fait qu'on trouve une paire
- [x] Gestion du timer qui empêche de retourner d'autres cartes pendant 1 secondes

### Commentaires

- Jolie travail sur cette partie :thumbsup:





## Etape 5 : Veni, Vidi, Vici

### Enoncé

- A chaque paire trouvée, on regarde si on a gagné ou pas
- Afficher un message de félicitations en cas de voctoire

### Notions

- [x] Garder en mémoire la nombre de paires trouvées (avec un `app.cardMatch = 0` par exemple)
- [x] Si toutes les paires ont été trouvées (`app.cardMatch === 14`), afficher un message `alert` de victoire

### Commentaires

- Attention, quand on retourne la dernière carte, ça ne nous laisse pas le temps de la voir avant l'affichage du message de victoire ;)
- Sinon RAS :ok_hand:






## Etape 6 : Compte à rebours

### Enoncé

- Afficher une barre de progression de 60 secondes
- Chaque seconde, mettre à jour la barre de progression
- Si 60 secondes s'écoulent sans avoir gagné la partie, afficher un message d'échec
- Recharger la page en cas d'échec

### Notions

- [x] Utiliser une `div` dont le `width` va de 0 à 100%
- [x] Créer un interval d'une seconde qui met à jour le `width` de la `div` de progression
- [x] Si 60 secondes d'écoulées, afficher un message d'échec
- [x] Recharger la page avec un `window.location.reload()` ou une redirection

### Commentaires

- Bien codé, bravo :clap:




## Général

- Qualité du code
  - [x] Indentation et lisibilité du code
  - [x] Présence de commentaires dans le code

### Commentaires

- Excellente évaluation, bravo :clap:
