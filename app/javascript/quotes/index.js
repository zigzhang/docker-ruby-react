import React from 'react'  
import ReactDOM from 'react-dom'  
import App from './components/App'


const quotes = document.querySelector('#quotes');
console.log('Query Selector #quotes:');
console.log(quotes);
ReactDOM.render(<App startingQuoteId={quotes.dataset.startingQuoteId} />, quotes);