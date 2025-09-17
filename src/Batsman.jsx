import { useState } from "react"



export default function Batsman(){
    const [runs, setRuns]= useState(0);
  const [sixes, setSixes] = useState(0);
    const handelSingeles= ()=> {
        const updatedRuns1 = runs+1;
        setRuns(updatedRuns1)
    }
    const handelFpur =()=> {
        const updatedRuns4 = runs+4;
        
        setRuns(updatedRuns4)
    }
    const handelSix =()=> {
        const updatedRuns6 = runs+6;
        const updateSix = sixes + 1;
        setSixes(updateSix)
        setRuns(updatedRuns6)
    }
   
    return(
        <div>
            <h3>player: bangla batsman</h3>
            <h3><small>six: {sixes}</small></h3>
            {
                runs > 50 && <p>you score: 50</p>
            }
            <h3>Score: {runs}</h3>
            <button onClick={handelSingeles}>singels</button>
            <button onClick={handelFpur}>four</button>
            <button onClick={handelSix}>six</button>
        </div>
    )
}