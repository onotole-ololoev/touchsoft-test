import './App.css';
import {useCallback, useState} from "react";
import Button from "./components/button";
import Info from "./components/info";
import Table from "./components/table";

function App() {
    const [count, setCount] = useState(0);

    const handleReset = () => setCount(0);
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    };
    const handleIncrement = () => setCount(count + 1);

    return (
    <div className='App'>
        <Table count={count}/>
        <Info count={count}/>
        <div className='btn-block'>
            <Button disabled={count === 0} onClick={handleDecrement} label='-'/>
            <Button onClick={handleReset} label='Reset'/>
            <Button onClick={handleIncrement} label='+'/>
        </div>
    </div>
  );
}

export default App;
