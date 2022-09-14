import "./Board.css"

const Board = ({board}) => {



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
                // INSERT FUNCTION - handle zero click
            }

            // if not first click
        }else {
            if (el.mine){
                //INSERT FUNCTION - game lost
            }else if (el.number === 0){
                // INSERT FUNCTION - handle zero click
            }
        }
    }


    return (
        <div className="board">
            {board.map((element)=>(
                <div onClick={()=>handleElementClick(element)} className="element" key={element.id}></div>
            ))}
        </div>
    );
};

export default Board;