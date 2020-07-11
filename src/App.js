import './App.css';
import React, { Component } from 'react';
import QuoteCard from './Components/QuoteCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: {},
    }
  }  

  componentDidMount() {
    this.fetchData()
  }
  
  fetchData = () => {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=8')
    .then(res => res.json())
    .then(data => this.setState({ 
      data, 
    }))
  }

  render() {
    return(
     <div>
       <button type='button'>Simpson's Quote</button>
       <QuoteCard quote={data.quoteSimpson} />
     </div>
    )
  }
}

export default App;
