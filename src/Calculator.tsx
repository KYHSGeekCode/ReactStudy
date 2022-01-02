import React, {useState} from 'react';

function Calculator() {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    const onChange1 = (e) => {
        const inputNumber = e.target.value.replace(/\D/g, '');
        setNumber(+inputNumber);
    }

    const onChange2 = (e) => {
        const inputNumber = e.target.value.replace(/\D/g, '');
        setNumber2(+inputNumber);
    }

    return (
        <div>
            <input onChange={onChange1}/>
            +
            <input onChange={onChange2}/>
            =
            {number + number2}
        </div>
    )
}

export default Calculator;