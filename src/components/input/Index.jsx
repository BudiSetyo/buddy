import React, { useState } from "react";
import './Style.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

function Input({ type, title }) {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <label className="input-label">
                <p className="input-title">{title}</p>

                <input className={`input-form input--${type}`} type={type.toLowerCase() !== 'password' ? type : visible ? 'text' : 'password'} placeholder={title} />

                {type.toLowerCase() === 'password' && (
                    <i
                        className="input-icon"
                        style={type === "password" ? { display: "block" } : { display: "none" }}
                        onClick={() => setVisible(!visible)}
                    >
                        {visible ? eyeSlash : eye}
                    </i>
                )}
            </label>
        </>
    )
}

export default Input;
