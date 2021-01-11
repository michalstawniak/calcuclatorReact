import './App.css';
import React, {useState} from 'react'

function App() {

    const [state, setState] = useState("")

    const handleButtonClick = (e) => {
        setState(state => state + e.target.dataset.value);
    }

    const numbers = [7,8,9,4,5,6,1,2,3,];

    const listNumbers = numbers.map((numbers) => (
            <span data-value={numbers} onClick={handleButtonClick}>{numbers}</span>
            )
        );

    return (
        <div className="calculator">
            <div className="result">
                <p>{state}</p>
            </div>

            <span onClick={() => setState("")} className="clear grey">AC</span>
            <span data-value={'+/-'} onClick={handleButtonClick} className="grey">+/-</span>
            <span data-value={'%'} onClick={handleButtonClick} className="grey">%</span>
            <span data-value={'÷'} onClick={handleButtonClick} className="operator">÷</span>

            <div className="numbers">{listNumbers}</div>
            
            <div className="operators">
            <span data-value={'X'} onClick={handleButtonClick} className="operator">x</span>
            <span data-value={'-'} onClick={handleButtonClick} className="operator">-</span>
            <span data-value={'+'} onClick={handleButtonClick} className="operator">+</span>
            </div>

            <span data-value={0} onClick={handleButtonClick} className="double">0</span>
            <span data-value={'.'} onClick={handleButtonClick}>.</span>
            <span data-value={'='} onClick={handleButtonClick} classNameName="operator">=</span>

        </div>


    );
}

export default App;