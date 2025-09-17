import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0); // ✅ ঠিক জায়গায়
    const handelAdd=()=>{
        const newCount = count +1
        setCount(newCount)
    }
    const counterStyle = {
        border: "2px solid yellow"
    };

    return (
        <div style={counterStyle}>
            <h3>count: {count}</h3>
            <button onClick={handelAdd}>add</button> 
        </div>
    );
}
