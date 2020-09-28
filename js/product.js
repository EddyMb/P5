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
            let products = reponse;
            
            
             
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
     
     document.getElementById('content').innerHTML += '<label for="tentacles">Quantité:</label>'+

     '<input type="number" id="tentacles" name="tentacles" min="0" max="50">';
     
     
     document.getElementById('content').innerHTML +='<a href="" class="add-cart btn-primary">Ajouter au panier</a>';
     let carts = document.querySelector('.add-cart');
     carts.addEventListener('click', (e) => {
      cartNumbers();
      
     })

     function onLoadCartNumbers(){
      let productNumbers = localStorage.getItem('cartNumbers');
      if(productNumbers){
        document.querySelector('span').textContent = productNumbers;
      }
     }
    function cartNumbers(){
      let productNumbers = localStorage.getItem('cartNumbers');
    
      productNumbers = parseInt(productNumbers);
      console.log(productNumbers); // null

      if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1); // on ajoute plus un par rapport aux panier qu'il avait deja//
        document.querySelector('span').textContent = productNumbers +1;
      } else // si localstotage est vide on lui ajoute
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('span').textContent = 1;
    }
     
    onLoadCartNumbers();
     
    
}



