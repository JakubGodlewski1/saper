import "./Popup.css"

const Popup = ({gameStatus, initializeGame, updateGameStatus}) => {
    const handleNewGame = ()=> {
        initializeGame()
        updateGameStatus(null)
    }

    return (
        <div className="popup">
            <p>YOU {gameStatus}</p>
            <button onClick={handleNewGame} className="btn">Play again</button>
        </div>
    );
};

export default Popup;