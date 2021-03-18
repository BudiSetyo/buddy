import './Input.css';

function Input({type}) {
    return (
        <>
            <input className={type} type={type} />
        </>
    )
}

export default Input;
