import React from "react";

function InputComponent({ text, setText }) {
    return (
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something"
        />
    );
}

export default InputComponent;
