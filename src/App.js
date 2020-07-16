import './App.css';
import React, { Component } from 'react';
import QuoteCard from './Components/QuoteCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: null,
    }
  }  

  componentDidMount() {
    this.fetchData()
  }
  
  fetchData = () => {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(res => res.json())
    .then(data => this.setState({ 
      data, 
    }))
  }

  render() {
    // console.log(this.state)
    return(
     <div>
        {this.state.data && <QuoteCard quote={this.state.data} />}
        <button onClick={this.fetchData} type='button'>Simpson's Quote</button>
     </div>
    )
  }
}

export default App;
