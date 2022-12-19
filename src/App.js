import { useState } from "react";
import "./styles.css"
function App() {


  // const [count, setCount] = useState(setValue()) // default way useState(4)
  const [count, setCount] = useState( // another method to only render page one time
    () => setValue())

  function setValue() {
    console.log('useState called')
    return 4
  }

  function plus() {
    setCount(count + 1)
  }
  function minus() {
    setCount(count - 1)
  }
  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">12,235</div>
          <div className="current-operand">43.344</div>
        </div>
        <button className="span-two">AC</button>
        <button>DEL</button>
        <button>÷</button>
        <button> 1</button>
        <button> 2</button>
        <button> 3</button>
        <button>*</button>
        <button> 4</button>
        <button> 5</button>
        <button> 6</button>
        <button>+</button>
        <button> 7</button>
        <button> 8</button>
        <button> 9</button>
        <button>-</button>
        <button> .</button>
        <button> 0</button>
        <button className="span-two">=</button>
      </div>

      {/* this is optional i just wanted to learn react Hook for that i used useState hook */}
      <div>
        <button onClick={minus}>-</button>
        <span>{count}</span>
        <button onClick={plus}>+</button>
      </div>
    </>
  );
}

export default App;
