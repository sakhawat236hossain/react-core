import { use } from "react"
import Friend from "./Frind";
export default function Frinndes ({frindesPromise}){
    const frindes = use(frindesPromise)
    console.log(frindes);
    return<>
    <div className="cart">
        <h3>frindes: {frindes.length} </h3>
        {
            frindes.map(frinde=> <Friend  key={frinde.id} frinde={frinde}></Friend>)
        }
    </div>
    </>
}  
