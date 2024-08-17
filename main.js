const api_url = "https://api.quotable.io/random";
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

async function getData(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getData(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML + "____by" +author.innerHTML ,"tweet window" , "width=600" , "height=300");
}