const url = 'http://localhost:3000/api/cameras';

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType ='json';
requete.send();

requete.onload = function(){
    if(requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200){
            let reponse = requete.response;
            console.log(reponse);
        }else{
            alert('probleme survenu')
        }
    }
}