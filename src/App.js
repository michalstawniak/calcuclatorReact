import logo from './logo.svg';
import './App.css';

function App() {
  function handleButtonClick(e) {
    console.log(e);
  }
  return (
    <div class="calculator">
        <div class="result">
            <p></p>
        </div>

        <span class="clear grey" >AC</span>
        <span data-value={'+/-'} onClick={handleButtonClick} class="sign1 grey"><a class="sign"><sup>+</sup>/<sub>-</sub></a></span>
        <span data-value={'%'} onClick={handleButtonClick} class="grey">%</span>
        <span data-value={'÷'} onClick={handleButtonClick} class="operator">÷</span>

        <span data-value={7} onClick={handleButtonClick}>7</span>
        <span data-value={8} onClick={handleButtonClick}>8</span>
        <span data-value={9} onClick={handleButtonClick}>9</span>
        <span data-value={'X'} onClick={handleButtonClick} class="operator">x</span>

        <span data-value={4} onClick={handleButtonClick}>4</span>
        <span data-value={5} onClick={handleButtonClick(5)}>5</span>
        <span data-value={6} onClick={handleButtonClick}>6</span>
        <span  data-value={'-'} onClick={handleButtonClick}class="operator">-</span>

        <span data-value={1} onClick={handleButtonClick}>1</span>
        <span data-value={2} onClick={handleButtonClick}>2</span>
        <span data-value={3} onClick={handleButtonClick}>3</span>
        <span data-value={'+'} onClick={handleButtonClick} class="operator">+</span>

        <span data-value={0} onClick={handleButtonClick} class="double">0</span>
        <span>.</span>
        <span  data-value={'='} onClick={handleButtonClick}class="operator">=</span>

    </div>


    
  );
}

export default App;
