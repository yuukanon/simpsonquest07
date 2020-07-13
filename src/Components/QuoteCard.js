import React from 'react';

const QuoteCard = (props) => {
  console.log(props.quote[0])

  return(
    <>
      <div>Quote:{props.quote[0].quote} </div>
      <div>Character: </div>
      <div>Image: </div>
    </>
  )
}

export default QuoteCard;