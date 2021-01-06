import './App.css';
import React from 'react'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: ""
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(e) {
        this.setState({
            result: this.state.result + e.target.dataset.value
        });
    }

    render() {
        return (
            <div className="calculator">
                <div className="result">
                    <p>{this.state.result}</p>
                </div>
                <span className="clear grey">AC</span>
                <span data-value={'+/-'} onClick={this.handleButtonClick} className="sign1 grey"><a
                    className="sign"><sup>+</sup>/<sub>-</sub></a></span>
                <span data-value={'%'} onClick={this.handleButtonClick} className="grey">%</span>
                <span data-value={'÷'} onClick={this.handleButtonClick} className="operator">÷</span>

                <span data-value={7} onClick={this.handleButtonClick}>7</span>
                <span data-value={8} onClick={this.handleButtonClick}>8</span>
                <span data-value={9} onClick={this.handleButtonClick}>9</span>
                <span data-value={'X'} onClick={this.handleButtonClick} className="operator">x</span>

                <span data-value={4} onClick={this.handleButtonClick}>4</span>
                <span data-value={5} onClick={this.handleButtonClick}>5</span>
                <span data-value={6} onClick={this.handleButtonClick}>6</span>
                <span data-value={'-'} onClick={this.handleButtonClick} className="operator">-</span>

                <span data-value={1} onClick={this.handleButtonClick}>1</span>
                <span data-value={2} onClick={this.handleButtonClick}>2</span>
                <span data-value={3} onClick={this.handleButtonClick}>3</span>
                <span data-value={'+'} onClick={this.handleButtonClick} className="operator">+</span>

                <span data-value={0} onClick={this.handleButtonClick} className="double">0</span>
                <span data-value={'.'} onClick={this.handleButtonClick}>.</span>
                <span data-value={'='} onClick={this.handleButtonClick} classNameName="operator">=</span>

            </div>
        )
    };
}
export default App;