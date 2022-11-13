import { Component } from 'react';


import logo from './logo.svg';
import './App.css';

class App extends Component{
constructor(){
  super();
  this.state = {
    monsters: [
      {
        name:'Linda',
        id:'monid001'
      },
      {
        name:'Frank',
        id:'monid002'
      },
      {
        name:'Jacky',
        id:'monid003'
      },
      {
        name:'Andrei',
        id:'monid004'
      }
    ]
    
  }
}

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=>
            { 
              return <div key={monster.id}><h1>{monster.name}</h1></div>
            }
          )
        }
      </div>
    );
  }
}

  

export default App;
