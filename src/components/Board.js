import "./Board.css"

const Board = ({board}) => {
    return (
        <div className="board">
            {board.map((element)=>(
                <div className="element" key={element.id}></div>
            ))}
        </div>
    );
};

export default Board;