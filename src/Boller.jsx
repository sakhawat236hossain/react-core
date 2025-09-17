import { useState } from "react";

export default function Boller() {

  const [bolles, setbolles] = useState(0);

  const handelBoll1 = () => {
    const updateBoll1 = bolles + 1;
    setbolles(updateBoll1);
  };
  const handelBoll2 = () => {
    const updateBoll2 = bolles + 1;
    setbolles(updateBoll2);
  };
  const handelBoll3 = () => {
    const updateBoll3 = bolles + 1;
    setbolles(updateBoll3);
  };
  const handelBoll4 = () => {
    const updateBoll4 = bolles + 1;
    setbolles(updateBoll4);
  };
  const handelBoll5 = () => {
    const updateBoll5 = bolles + 1;
    setbolles(updateBoll5);
  };
  const handelBoll6 = () => {
    const updateBoll6 = bolles + 1;
    setbolles(updateBoll6);
  };

  return (
    <div>
      <h3>Boller: Bangla Bollert</h3>
       <h3><small>Bolls: {bolles}</small></h3>
            {
                bolles > 6 && <p>you score: 6</p>
            }
            {
                bolles > 6 && alert("over")
            }
      <h3>Boll: {bolles}</h3>

      <button onClick={handelBoll1}>Boll-1</button>
      <button onClick={handelBoll2}>Boll-2</button>
      <button onClick={handelBoll3}>Boll-3</button>
      <button onClick={handelBoll4}>Boll-4</button>
      <button onClick={handelBoll5}>Boll-5</button>
      <button onClick={handelBoll6}>Boll-6</button>
    </div>
  );
}
