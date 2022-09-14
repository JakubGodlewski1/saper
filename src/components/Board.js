import "./Board.css"
import {useCheckAround} from "../hooks/useCheckAround";

const Board = ({board, updateBoard}) => {
    const [checkAround] = useCheckAround()



        //when user clicks 0, all 0 that touch that element should be uncovered.
        // also all zeros that touch any of these 0 should be uncovered etc.
    const handleZeroClick = (elId) => {

        let zerosAroundIds = []

        zerosAroundIds.push(elId)

        const loopZerosIds = () => {
            let extraElements = false

            zerosAroundIds.forEach((id)=>{
                let elements = checkAround(id, board)
                elements.forEach((element)=>{
                    if (element.number === 0 && !zerosAroundIds.includes(element.id)){
                        zerosAroundIds.push(element.id)
                        extraElements = true
                    }
                })
            })
            if (extraElements){
                console.log("infi ):")
                loopZerosIds()
            }
        }

        loopZerosIds()

        //now uncover (change clicked key to true) all numbers !==0 which are next to any 0
        const allNumbersAround = [...zerosAroundIds]

        zerosAroundIds.forEach((id)=>{
            let elements = checkAround(id, board)
            elements.forEach((el)=>{
                if (!zerosAroundIds.includes(el.id)){
                    allNumbersAround.push(el.id)
                }
            })
        })


        let updatedBoard = board.map((element)=> {
            if (zerosAroundIds.includes(element.id) || allNumbersAround.includes(element.id)){
                return {...element, clicked: true}
            }else return element
        })

        return updatedBoard
    }

    const handleElementClick = (el) => {
        let updatedBoard;
        let firstClick = true

            //check if it is the first click on the board during the game
        updatedBoard = board.map((element)=>{
            if (element.clicked) {
                firstClick = false
            }
           //Add information to the board that element was clicked
                if (el.id===element.id){
                    return {...element, clicked: true}
                } else return  element
        })
              //if first click
        if (firstClick){
            if (el.mine || el.number !==0){
                //INSERT FUNCTION - reset game
            }else {
                let updatedBoardWithZeros = handleZeroClick(el.id)
                updatedBoard = updatedBoardWithZeros
            }

            // if not first click
        }else {
            if (el.mine){
                //INSERT FUNCTION - game lost
            }else if (el.number === 0){
                let updatedBoardWithZeros = handleZeroClick(el.id)
                updatedBoard = updatedBoardWithZeros
            }
        }


        //update main board
        console.log(updatedBoard)
        updateBoard(updatedBoard)

    }


    return (
        <div className="board">
            {board.map((element)=>(
                <div onClick={()=>handleElementClick(element)} className={`element ${element.clicked ? "clicked" : ""}`} key={element.id}>
                    {element.clicked && !element.mine && element.number !== 0 && element.number}
                </div>
            ))}
        </div>
    );
};

export default Board;