import React from 'react';

const QuoteCard = (props) => {
  console.log(props.data)

  return(
    <>
      <div>Quote: quoteSimpson={props.quote} </div>
      <div>Character: </div>
      <div>Image: </div>
    </>
  )
}

export default QuoteCard;