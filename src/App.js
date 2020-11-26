
import React from 'react';
import './App.css';
import Conference from './Components/Conference';


class App extends React.Component {
  state={
    paid:[],
    
  }
  componentDidMount = async ()=> {
    const confName=this.state.confName;
    const url="https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";
    const req=await fetch(url);
    const res=await req.json();
    this.setState({paid:res.paid}) 
    console.log(this.state.paid)
    
  }
  
  
  render() {
    return (
      <div className="App">
        
              <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <input type="text" placeholder="Search.."/>
              </div>  
            <header className="App-header">
              <h1 className="App-title">Conference Details</h1>
              
            </header>
            <Conference paid={this.state.paid}/>
            
            
            <footer className="App-header">
              <h1 className="App-title">Thankyou</h1>
            </footer>
      </div>
    );
  }
}

export default App;