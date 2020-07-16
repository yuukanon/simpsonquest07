import React from 'react';

const QuoteCard = (props) => {
  console.log(props.quote[0])

  return(
    <div className="quote">
      <img src = {props.quote[0].image} />
      <div className="card">
        <div>Character: {props.quote[0].character} 
          <p>Quote:{props.quote[0].quote} </p>
        </div>
      </div>
    </div>
  )
}

export default QuoteCard;