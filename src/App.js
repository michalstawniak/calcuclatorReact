import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div class = "calculator" >
        <
        div class = "result" >
        <
        p > < /p> <
        /div>

        <
        span class = "clear grey" > AC < /span> <
        span class = "sign1 grey" > < a class = "sign" > < sup > + < /sup>/ < sub > - < /sub></a > < /span> <
        span class = "grey" > % < /span> <
        span class = "operator" > ÷ < /span>

        <
        span > 7 < /span> <
        span > 8 < /span> <
        span > 9 < /span> <
        span class = "operator" > x < /span>

        <
        span > 4 < /span> <
        span > 5 < /span> <
        span > 6 < /span> <
        span class = "operator" > - < /span>

        <
        span > 1 < /span> <
        span > 2 < /span> <
        span > 3 < /span> <
        span class = "operator" > + < /span>

        <
        span class = "double" > 0 < /span> <
        span > . < /span> <
        span class = "operator" >= < /span>

        <
        /div>

    );
}

export default App;