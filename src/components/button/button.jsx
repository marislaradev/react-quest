import React from "react";

const giveAlert = (label) => {
    alert(`A label desse botão é ${label}`)
}

const Button = (props) => {
    const { label } = props;

    return (
        <button className="btn"      onClick={() => giveAlert(label)}>
        {label}
        </button>
    )
}

Button.defaultProps= {
    label: 'Desafio 2'
}

export default Button;