var globalquote = "";
var author = "";

async function getQuotes() {
    const url = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';
    try{ 
    const response = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
        if(response.status == 200){
            const myJson = await response.json();
            globalquote = myJson.quotes[0].text;
            author =  myJson.quotes[0].author; 
            document.getElementById("quote").innerHTML = globalquote; 
            document.getElementById("author").innerHTML = "- " + " " + author; 
        }
    }catch(error){
        alert(error);
    }
  }

function emptyquote(){
    let element = document.getElementById("quote"); 
    if(element.innerHTML == ""){
        element.innerHTML = "Get a Quote"
    }
}

function tweetQuote(){
    let tweeturl = `https://twitter.com/intent/tweet?text=${globalquote} - ${author}`;
    window.open(tweeturl, '_blank');
}

window.onload = (event) =>{
    emptyquote();
    getQuotes();
};