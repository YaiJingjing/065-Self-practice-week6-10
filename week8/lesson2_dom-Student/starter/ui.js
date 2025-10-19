
import { addQuote, getAllQuotes } from './quote.js'

addQuote('Stay hungry, stay foolish.', 'Steve Jobs');
addQuote('test2.', 'me');
let quotes = getAllQuotes()
const quoteList = document.getElementById("quote-list")
function renderQuotes() {
 quoteList.innerHTML = ''
 const quotes = getAllQuotes();
    quotes.forEach(quote => {
        const p = document.createElement('p');
        p.textContent = `"${quote.content}" — ${quote.author}`;
        quoteList.appendChild(p);
    });
}

renderQuotes()