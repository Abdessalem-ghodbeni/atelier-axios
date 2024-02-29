import { useEffect, useState } from "react";

export default function CounterF(props) {
    const [count, setCount] = useState(0);
    const [test, setTest] = useState(0);

    useEffect(() => {
        console.log("I'm mounted - Functional Component");
        return () => { console.log("I'm unmounting"); }
    }, []);

    useEffect(() => {
        console.log("I'm rendering - Functional Component");
    });

    useEffect(() => {
        console.log("count changed  - Functional Component");
    }, [count]);
    return (
        <>
            <h1>This is a functional component</h1>

            <button onClick={() => setTest(test + 1)}>Increment - {test}</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>
                {count} - {props.name}
            </p>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    );
}
