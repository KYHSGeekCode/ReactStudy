import React, {useState} from 'react';

function Calculator() {
    const [inputs, setInputs] = useState({
        number1: 0,
        number2: 0
    });
    const {number1, number2} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        const inputNumber = value.replace(/\D/g, '');
        setInputs({
            ...inputs,
            [name]: +inputNumber
        });
    }
    return (
        <div>
            <input name={"number1"} onChange={onChange}/>
            +
            <input name={"number2"} onChange={onChange}/>
            =
            {number1 + number2}
        </div>
    )
}

export default Calculator;