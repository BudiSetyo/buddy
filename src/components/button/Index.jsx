import './Style.css';

function Button({type, handleCick, children}) {

    return (
        <>
            <button className={`btn ${type}`} onClick={handleCick}>
                {children}
            </button>
        </>
    )
}

export default Button;
