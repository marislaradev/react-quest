import React from "react";

const ChangedText = (props) => {
        return (
            <p className="text" style={{ color: props.color, textTransform: props.textTransform }}>
            {props.text}
            </p>
        )
    }

ChangedText.defaultProps= {
    text: 'Desafio 1',
    color: 'blue',
    textTransform: 'uppercase'
}

export default ChangedText;