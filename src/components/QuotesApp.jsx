import React, { useState } from 'react'

const QuotesApp = () => {
const [quote, setQuote] = useState({
    text: "Ask not what your country can do for you but what you can do for your country.",
    author: "John Kennedy"
});
const [showFavorites, setShowFavorites] = useState(false);
const [favorites, setFavorites] = useState([]);
const fetchQuote = async () => {
    const url = "https://api.quotable.io/random";
    const res = await fetch(url);
    const data = await res.json();
    setQuote({
        text: data.content,
        author: data.author
    })
}
const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
}
const addToFavorites = () => {
    const isAlreadyInFavorites =
        favorites.some((fav) => fav.text === quote.text &&
                        fav.author === quote.author);
    if(!isAlreadyInFavorites)
        setFavorites([...favorites, quote]);
}
  return (
    <div className='container'>
        <div className="quotes-app">
            <div className="app-heading">Quote.</div>
            <i className="bx bxs-heart fav-icon" onClick={handleShowFavorites}></i>
            <div className="quote">
                <i className="bx bxs-quote-alt-left left-quote"></i>
                <p className="quote-text">{quote.text}</p>
                <p className='quote-author'>{quote.author}</p>
                <i className="bx bxs-quote-alt-right right-quote"></i>
            </div>
            <div className="circles">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="circle-4"></div>
            </div>
            <div className="buttons">
                <button className="btn btn-new" onClick={fetchQuote}>New Quote</button>
                <button className="btn btn-fav" onClick={addToFavorites}>Add to Favorites</button>
            </div>
            { showFavorites && ( <div className="favorites">
                <button className="btn-close">
                    <i className="bx bx-x" onClick={handleShowFavorites}></i>
                </button>
                {favorites.map((favQuote, index) => (
                    <div className="fav-quote" key={{index}}>
                        <div className="fav-quote-delete">
                            <i className="bx bx-x-circle" onClick={() => {
                                const updatedFavorites = favorites.filter((fav, i) => index !== i);
                                setFavorites(updatedFavorites);
                            }}></i>
                        </div>
                    <div className="fav-quote-content">
                        <div className="fav-quote-text">{favQuote.text}</div>
                        <div className="fav-quote-author">{favQuote.author}</div>
                    </div>
                </div>
                ))}
            </div>
            )}
        </div>
    </div>
  )
}

export default QuotesApp
