// import { useState } from "react";

// export default function Counter() {
//     const [count, setCount] = useState(0); // ✅ ঠিক জায়গায়
//     const handelAdd=()=>{
//         const newCount = count +1
//         setCount(newCount)
//     }
//     const counterStyle = {
//         border: "2px solid yellow"
//     };

//     return (
//         <div style={counterStyle}>
//             <h3>count: {count}</h3>
//             <button onClick={handelAdd}>add</button> 
//         </div>
//     );
// }

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0); // Reset করে ০ করে দিচ্ছে
  }

  return (
    <div style={{ border: "2px solid purple", padding: "10px", width: "200px" }}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}
