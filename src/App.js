import React from "react";
import axios from 'axios';
import './App.css';

class App extends React.Component{

  state={
    advise:''
  };

  //executes exactly after the render method
  componentDidMount(){
    this.fetchApi();
    // console.log('component did mount');
  }

  fetchApi= ()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
      const {advice}=response.data.slip;
      //since the advice variable has scope only in fetchApi function ans we want to access it in render method we set its global state to advice varaible
      this.setState({advice:advice});
      console.log(advice);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  render(){

    const {advice}=this.state;

    return(
      <div className="app">
        <div className="card1"><h1 className="cardh1">Get some Advise To Boost Your Day.</h1></div>
        <div className="card">
          <h1 className="heading">
            {advice}
          </h1>
          <button className="button" onClick={this.fetchApi}>
            <span>GIVE ME ADVISE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;