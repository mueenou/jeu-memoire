
  var app = {
    tableImages: [
        '0 -100px', '0 -200px',  '0 -300px', '0 -400px', '0 -500px', '0 -600px', '0 -700px', '0 -800px', '0 -900px', '0 -1000px', '0 -1100px', '0 -1200px', '0 -1300px', '0 -1400px', '0 -100px', '0 -200px', '0 -300px', '0 -400px', '0 -500px', '0 -600px', '0 -700px', '0 -800px', '0 -900px', '0 -1000px', '0 -1100px', '0 -1200px', '0 -1300px', '0 -1400px',
      ],
      indexTableImages: 0,
    init: function() {
      // On lance le compteur basique de 1 minute
      app.clock();
      // On commence la génération du plateau de carte en commençant par le mélange
      app.shuffle();
    },

    // Fonction compteur
    clock: function() {
      var counter = 0;
        setInterval(function() {
          counter++;
          console.log(counter);
          if (counter > 60) {
            alert('Vous avez perdu temps écoulé!');
            location.reload();
          }
          $('.red-box').animate({
            width: "+=10"
          })
        }, 1000);
    },

    // Mélange des images
    shuffle: function() {
      var random = 0;
      var temp = 0;
      for (i = 1; i < app.tableImages.length; i++) {
        random = Math.round(Math.random() * i);
        temp = app.tableImages[i];
        app.tableImages[i] = app.tableImages[random];
        app.tableImages[random] = temp;
      }
      // On fait appel à la fonction de génération et assignation des cartes
      app.assignCards();
      console.log('Shuffled Card Array: ' + app.tableImages);
    },
    assignCards: function() {
      // On fait appel à la fonction chargé de créer le plateau(un tableau)
      app.createTable();

      // On exécute la fonction showCard au "clique" de la carte caché ".cache"
      $('.cache').on('click', app.showCard);
    },

    // Fonction qui affiche l'image ".image" à l'intérieur de la carte
    showCard: function() {
        console.log('click');
        // On supprime le .cache cliquée pour ne pas superposé la face caché et l'image
        $(this).hide();
        // On affiche l'image
        $(this).next(".image").show();
        // On ajoute une classe ".selected" au clique, pour indiqué que cette image est séléctionnée
        $(this).next(".image").addClass("selected");
        // Puis on fait appel à la fonction qui permet de vérifier si les 2 images affichées
        // sont identiques ou pas
        app.checkMatch();
    },

    // Fonction qui vérifie si les 2 images affichées sont identiques
    checkMatch: function() {
      // Si la longueur de l'objet .selected est égale à 2(donc 2 images affichées)
      if ($('.selected').length === 2) {
        // On compare la valeur des data de la première(.first) et de la 2ème(.last)
        // image
        if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
          // Si OUI, pour chaque images séléctionnée(.selected) on retire la classe "unmatched"
          $('.selected').each(function() {
            $(this).show().removeClass('unmatched');
          });
          // Ici on n'oublie pas d'enlever la classe ".selected" pour pouvoir les
          // réafficher plus tard si nous avons pas encore trouvé
          $('.selected').each(function() {
            $(this).removeClass('selected');
          });

          // On fait appel à la fonction permettant de vérifier si nous avons
          // trouvé tous les images identiques ou pas
          // au quel cas on gagnerai la partie
          app.checkWin();
        } else {
          // Si NON, on désactive le fait de pouvoir cliquer sur d'autres
          // images cachées et on affiche les images séléctionnéelse
          // le tout pendant 1 seconde
          $('.cache').off('click', app.showCard);
          setTimeout(function() {
            $('.selected').each(function() {
              $(this).hide().removeClass('selected');
              $(this).prev('.cache').show().removeClass('selected');
            });
            // On n'oublie pas de réactiver le clique sur les images
            $('.cache').on('click', app.showCard);
          }, 1000);
        }
      }
    },

    // Fonction permettant de vérifier si nous avons gagné,
    // c'est-à-dire, trouvé tous les images identiques
    checkWin: function() {
      // Si tous les images on perdu leurs classe "unmatched"
      // Cela signifie que tous les images sont révélé et sont bel et bien
      // matché (identiques)
      if ($('.unmatched').length === 0) {
        // On alerte le joueur qu'il a gagné et on rafraichit la page
        alert("Tu as gagné!");
        location.reload();
      }
    },
    // Fonction qui créer le tableau contenant toutes les cases
    createTable: function() {
      app.table = $("<table>");
      $('#box-container').append(app.table);
      // on créer 4 lignes et pour chaque lignes on fait appel à la
      // fonction createLine qui permet de créer le contenu de chaque lignes;
      // des colonnes
      for (var line = 0; line < 4; line++) {
        app.createLine();
      }
    },

    createLine: function() {
      var tr = $('<tr>');
      for (var column = 0; column < 7; column++) {
        // On crée un <td>
        var td = $('<td>');
        td.addClass('carte');
        td.append("<div class='cache'>");
        td.append("<div class='image unmatched'>")
        td.children('.image').css("background-position", app.tableImages[app.indexTableImages]);
        td.children('.image').attr('data-card-value', app.tableImages[app.indexTableImages]);
        app.indexTableImages++;
        tr.append( td );
      }
    app.table.append( tr );
    },
  };
  $(app.init);
