import React from 'react';
import './App.css';


const App = () => {
  const [gameState, setGameState] = React.useState([]);
  const [playerId, setPlayerId] = React.useState(0);
  const [winner, setWinner] = React.useState(null);
  const[display,setDisplay]= React.useState(1)

  const reset = () => {
    

  };
  function getplay(position){
    if(playerId==1){
      setPlayerId(2);
      setGameState(state => [...state, 2])
    }
    else if(playerId==0){
      setPlayerId(1);
      setGameState(state => [...state, 1])
    }
    else{
    setPlayerId(1);
    setGameState(state => [...state, 1])
    }
    const url = '/api/play?playerId='+playerId+'&position='+position;
    
    fetch(url)
    .then((res)=>{
    if(res.data==1){
      
      return(setWinner('1'));
    }
    else if(res.data==2){
      return(setWinner('2'));
    }
    else
    {
      return(setWinner(''))
    }
    }
    )

  }


  return (
    <div className="App">
      <button id="reset" onClick={reset}>Reset</button>
      {winner}
      <h3 id="winner">Winner is {winner}</h3>
      <div id="box-0"  onClick={()=>getplay(1)}>{gameState[0]}</div>
      <div id="box-1" onClick={()=>getplay(1)}>{gameState[1]}</div>
      <div id="box-2" onClick={()=>getplay(2)}>{gameState[2]}</div><br/>
      <div id="box-3" onClick={()=>getplay(3)}>{gameState[3]}</div>
      <div id="box-4" onClick={()=>getplay(4)}>{gameState[4]}</div>
      <div  id="box-5" onClick={()=>getplay(5)}>{gameState[5]}</div>
      <div  id="box-6" onClick={()=>getplay(6)}>{gameState[6]}</div>
      <div id="box-7" onClick={()=>getplay(7)}>{gameState[7]}</div>
      <div id="box-8" onClick={()=>getplay(8)}>{gameState[8]}</div>
      
    </div>
  );
  }

export default App;