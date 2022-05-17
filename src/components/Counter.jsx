import React, { useState } from "react";

const Counter =(props) =>{

    const [count, setCount]=useState(+props.initialVal);

    const incrementCount= () =>{
        setCount(count+1);
        console.log(count)
    }

    const decrementCount= () =>{
        setCount(count-1);
    }

    const doubleCount= () =>{
        setCount(count*2)
    }

    const checkOdd=() =>{
        if (count%2==0)
        {
            return true;
        }
       else if(count%2==1){
            return false;
        }
    }

    return (
        <div className={checkOdd() ? 'background-green': 'background-red'}>
            <h1>Counter App: {count}</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={doubleCount}>Double</button>
        </div>
    );
};

export default Counter;