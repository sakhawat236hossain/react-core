import { use } from "react"
import Pos from './Pos'
export default function Posts({postsPromis}){
    
    const Posts = use(postsPromis)
    console.log(Posts);
    return(
        <div className="cart">
            <h2>All Posts are here {Posts.length}</h2>
           
        </div>
    )
}


// i am learning react js give me the list of core concept  in react for beginer and jgiv me a mind map to revese the core concept
// giv me the difarench between useEffect and useState and use
//explin the use()introduction in react 19
//10 common mistakes for biginner in raactjs
// why key prop is importent while rendaring a list in react
// giv me a summary of all react hooks 
 