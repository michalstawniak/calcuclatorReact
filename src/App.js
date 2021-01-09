import './App.css';
import React, {useState} from 'react'

function App() {

    const [state, update] = useState("")

    function Number(props) {
        return (
            <span data-value={props.value} onClick={handleButtonClick}>{props.value}</span>
        )
    }

    function handleButtonClick(e) {
        console.log(e.target.dataset.value);
        let temp = state + e.target.dataset.value;
        update(temp);
    }

    function deleteButtonClick() {
        let temp = "";
        update(temp);
    }

    return (
        <div className="calculator">
            <div className="result">
                <p>{state}</p>
            </div>

            <span onClick={deleteButtonClick} className="clear grey">AC</span>
            <span data-value={'+/-'} onClick={handleButtonClick} className="grey">+/-</span>
            <span data-value={'%'} onClick={handleButtonClick} className="grey">%</span>
            <span data-value={'÷'} onClick={handleButtonClick} className="operator">÷</span>

            <Number value="7" />
            <Number value="8" />
            <Number value="9" />
            <span data-value={'X'} onClick={handleButtonClick} className="operator">x</span>

            <Number value="4" />
            <Number value="5" />
            <Number value="6" />
            <span data-value={'-'} onClick={handleButtonClick} className="operator">-</span>

            <Number value="1" />
            <Number value="2" />
            <Number value="3" />
            <span data-value={'+'} onClick={handleButtonClick} className="operator">+</span>

            <span data-value={0} onClick={handleButtonClick} className="double">0</span>
            <span data-value={'.'} onClick={handleButtonClick}>.</span>
            <span data-value={'='} onClick={handleButtonClick} classNameName="operator">=</span>

        </div>
    );
}

export default App;