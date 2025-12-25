const api_url = "https://dummyjson.com/quotes/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " --- by" + author.innerHTML, "Tweet WIndow", "width=600, height=300");
}