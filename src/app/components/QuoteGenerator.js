import React, { useEffect, useState } from 'react';
import { QUOTES } from '../shared/QUOTES';


function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    let quoteSize = QUOTES.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTES[randomIndex];
    setQuote(randomQuoteData.quote);
    setAuthor(randomQuoteData.author);
  }

  return (
    <>
      <div class="header">
        <h1>Dougs Random "Funny" Quote Machine</h1></div>

      <wrapper id="quote-box">
        <div id="text" class="text" >{quote}</div>
        <div id="author" class="author">{author}</div>
      </wrapper>
      <div>
        <button class="quote-button" id="new-quote" title="Get Another" onClick={getQuote}>New Quote</button>
      </div>
      <div class="button-one">
        <a href="https://twitter.com/intent/tweet" class="twit-button" id="tweet-quote" title="Click To Tweet">Tweet
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div>
        <p>Project was completed by Doug Altermatt</p>
      </div>
    </>
  );
}

export default QuoteGenerator;