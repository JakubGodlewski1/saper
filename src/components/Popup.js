import "./Popup.css"

const Popup = ({gameStatus}) => {
    return (
        <div className="popup">
            <p>YOU {gameStatus}</p>
            <button className="btn
            ">Play again</button>
        </div>
    );
};

export default Popup;