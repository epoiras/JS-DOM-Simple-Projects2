//array with objects and quotes
let quotes = [
    {name:'Dr. SEUSS', quote:'Friendship is another word for love.'}, 
    {name:'Tennessee Williams', quote:'The only way to have a friend is to be one.'}, 
    {name:'John Newton', quote:'A friend is what the heart needs all the time.'},
    {name:'Dr. SEUSS', quote:'The greatest gift of life is friendship, and I have received it.'}, 
    {name:'Tom McNeal', quote:'Distance means so little, when someone means so much.'},    
    {name:'Diana Cortes', quote:'Life is partly what we make it, and partly what it is made by the friends we choose.'},
    {name:'Dr. SEUSS', quote:'To the world you may be just one person, but to one person you may be the world'}
];
let quoteButton=document.getElementById("quoteButton");
let quoteAuthor=document.getElementById("quoteAuthor");
let quote=document.getElementById("quote");
quoteButton.addEventListener('click', displayQuote);
function displayQuote(){
 let random=Math.floor(Math.random()*quotes.length);
  quoteAuthor.innerHTML=quotes[random].name;
  quote.innerHTML=quotes[random].quote;
}
