import './Style.css';

function Button({type, children}) {

    return (
        <>
            <button className={`btn-no ${type}`}>
                {children}
            </button>
        </>
    )
}

export default Button;
