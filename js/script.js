$(document).ready(function() {
  var images = ['close-up-of-motherboard.jpg', 'photography-product-download.jpg', 'programmer-focused-on-code.jpg'];
  var couleurs = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6'];

  var imageChoisi = images[Math.floor(Math.random() * images.length)];
  var couleurChoisi = couleurs[Math.floor(Math.random() * couleurs.length)];

  $('.login-image-ab').css('background-image', 'url(img/' + imageChoisi + ')');
  $('#bodyIndex').css('background-color', couleurChoisi);
});


$(document).on("click", "#signUp", function(e) {

  var message=
  '<form>'+
  '<div class="form-group">'+
  '<label">Adresse Mail</label>'+
  '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adresse mail">'+
  '<small id="emailHelp" class="form-text text-muted">Promis je garde ça pour moi.</small>'+
  '</div>'+
  '<br>'+
  '<div class="row justify-content-center">'+
  '<label>Mot De Passe</label>'+
  '<br>'+
  '<input type="password" class="form-control col-5" id="exampleInputPassword1" placeholder="Mot de Passe">' +
  '<label for="inputPassword" class="sr-only">Vérification Mot de Passe</label>'+
  '<input type="password" id="inputPasswordVerif" class="form-control col-5" placeholder="Vérification Mot de Passe" required>'+
  '</div>' +
  '</form>';


  bootbox.dialog({
    title: "S'enregistrer",
    message: message,
    size: 'large',
    buttons: {
        cancel: {
            label: "Annuler",
            className: 'btn btn-light',
            callback: function(){
                console.log('Custom cancel clicked');
            }
        },
        ok: {
            label: "Valider",
            className: 'btn-success',
            callback: function(){
                console.log('Custom OK clicked');
            }
        }
    }
  });

});
