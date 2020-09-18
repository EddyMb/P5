//requette  avec ID du produit//
let id = (new URL(document.location)).searchParams.get('given_id');

const url ='http://localhost:3000/api/cameras/'+id;

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
            displayCart(reponse);
            
             
        }
    }else
     alert('un probleme est intervenu, veuillez actualiser la page');
}


function displayCart(prod){
  document.getElementById('content').innerHTML += '<div class="col-md-6">'+
  '<a href="produit.html"><img src="'+prod.imageUrl+ '" class="card-img-top" alt="image camera 1"></a>'+
  '</div>'+
  '<div class="col-md-6">'+ 
   '<h3 class="name">'+prod.name+'</h3>'+
   '<p class="card-text">'+prod._id+'</p>'+
   '<p class="price">'+prod.price+' euro</p>'+
   '<p class="description">'+prod.description+'</p>'+
   '<div class="gamboustou">';
   if(prod.lenses.length >0){
    document.getElementById('content').innerHTML +='<select class="custom-select custom-select-lg mb-3"><option value="" disabled selected>Personnalisation</option></select>';
    prod.lenses.forEach((element, index)=> {
      document.querySelector('.custom-select').innerHTML +='<option value="'+index+'">'+element+'</option>';
    });
   
    
   }
     
     document.getElementById('content').innerHTML += '<label for="q">Quantité: </label>'+
     '<select id="qt" name="q">'+
      '<option value="1">1</option>'+
      '<option value="2">2</option>'+
      '<option value="3">3</option>'+
      '<option value="4">4</option>'+
      '<option value="5">5</option>'+
       '</select>'+
       '</div>'+
      '<a href="" class="btn btn-primary">Voir panier</a>';

}


















// Post
/*
requete.open('POST', url);
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
requete.responseType = 'json';
requete.send('prenom=John');
*/

