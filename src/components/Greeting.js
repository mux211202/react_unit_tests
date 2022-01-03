import { useState } from 'react'
import Async from './Async';
import Output from './Output';
export default function Greeting() {
    const [changeText, setChangedText] = useState(false);
    const changeHandler = () => {
        setChangedText(true);
    }
    return (
        <div>
            <h2>Hello world!</h2>
            {!changeText && <Output>NOT CLICKED</Output>}
            {changeText && <Output>CLICKED</Output>}
            <button onClick={changeHandler}>Change Text!</button>
            <Async/>
        </div>
    )
}
