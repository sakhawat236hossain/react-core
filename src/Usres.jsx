import { use } from "react"

export default function Usres({feachUseres}){
   const usres = use(feachUseres);
   console.log(usres);
    return <>
    <div className="cart">
        <h3> usres: {usres.length}</h3>
    </div>
    </>
   
}