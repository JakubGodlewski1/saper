import './App.css';
import {useCheckAround} from "./hooks/useCheckAround";
import {useEffect, useState} from "react";
import Board from "./components/Board";
import Popup from "./components/Popup";

function App() {
  const [checkAround] = useCheckAround()
  const [board, setBoard] = useState([])
  const [gameStatus, setGameStatus] = useState(null)


  useEffect(()=>{
    initializeGame()
  },[])


    //function that allows to update game status
  const updateGameStatus = (gameStatus) =>{
    setGameStatus(gameStatus)
  }


    //function that allows to update board
  const updateBoard = (updatedBoard)=>{
    setBoard(updatedBoard)
  }


  const initializeGame = () => {

    //create 10 mines - 10 random numbers between 0 and 99. Later we will place them into the board
    const mines = []
    while (mines.length < 10){
      let mine = Math.floor(Math.random()*100)
      if (!mines.includes(mine)){
        mines.push(mine)
      }
    }

    //create a board - 100 objects
    const board = []
    for (let i = 0; i < 100; i++) {
      board.push({
        id: i,
        clicked: false,
        flagged: false,
        mine: mines.includes(i),
        number: null
      })
    }

    //place appropriate number to every field. every number has to correspond to amount of mines that are around the field.
    let boardWithNumbers = board.map((element)=>{
      let numberOfMinesAround = 0;

      let elementsAround = checkAround(element.id,  board)
      elementsAround.forEach((element)=>{
        if (element.mine){
          numberOfMinesAround++
        }
      })
      if (!element.mine){
        return {...element, number: numberOfMinesAround}
      } else return element
    })

   setBoard(boardWithNumbers)
   return boardWithNumbers
  }



  return (
    <div className="App">
      {gameStatus && <Popup updateGameStatus={updateGameStatus} initializeGame={initializeGame} gameStatus={gameStatus}/>}
      {board.length > 0 && <Board initializeGame={initializeGame} updateGameStatus={updateGameStatus} updateBoard={updateBoard} board={board}/>}
    </div>
  );
}

export default App;
