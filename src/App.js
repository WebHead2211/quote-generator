import { useEffect, useState } from "react";
import Card from "./components/Card";
import ron from "./images/ron.png";
import Footer from "./components/Footer";

export default function App() {
  const [quotes, setQuotes] = useState([]);

  async function getQuote() {
    const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      const newQuote = data[0];
      quotes.forEach(quote => {
        if(quote == newQuote) {
          return;
        }
      })
      setQuotes((prevQuotes) => {
        return [...prevQuotes, newQuote];
      });
      window.scrollTo(0, document.body.scrollHeight);
    } catch (error) {
      console.error(error.message);
    }
  }
 
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  }, [quotes]);

  return (
    <>
      <div className="main-container">
        <img src={ron} alt="Ron Swanson" className="ron-img" />
        <h1>Ron Swanson Quotes</h1>
        <button className="btn" onClick={getQuote}>Generate Quote</button>
        <div className="card-container">
          {quotes.map((quote, index) => (
            <Card quote={quote} color={index} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

