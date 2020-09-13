
let produit = 'camera'
const url ='http://localhost:3000/api/cameras';

// Création de la requete//
let requete = new XMLHttpRequest();
requete.open('GET', url); //parametre
requete.responseType ='json'; //On attend le JSON//
requete.send(); // on envoye la requete

// On execute cette fucntion quand on recoit la reponse
requete.onload = function () {  

    if(requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200){
            let reponse = requete.response; // On stocke la reponse
           reponse.forEach(prod => {
              displayProduct(prod);
           });
             
        }
    }else alert('un probleme est intervenu veuillez actualiser la page');
}

function displayProduct(prod){
    document.getElementById('content').innerHTML +=' <div class="card">'+
    '<a href="produit.html"><img src="'+prod.imageUrl+'" class="card-img-top" alt="image camera 1"></a>'+
    '<div class="card-body">'+
      '<h5 class="card-title">'+prod.name+'</h5>'+
      '<p class="card-text">'+prod.description+'</p>'+
     ' <p class="card-price">'+prod.price+' euro</p>'+
      '<a href="#" class="btn btn-primary">Voir produit</a>'+
    '</div>'+
  '</div>';
}


