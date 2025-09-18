
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Boller from './Boller'
import Counter from './counter'
import Usres from './Usres'
import Frinndes from './Frindes'
import Posts from './Post'
 

// const feachUseres = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=> res.json())

const fetchFrindes = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}

const feachPosts = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json()
}

function App() {
  const frindesPromise = fetchFrindes();
  const postsPromis =feachPosts() 

  function handlerClick (){
    alert("hello")
  }

  const  handlerClick3=()=>{
    alert("amake click kora hoise")
  }
  const handelAdds =(num)=>{
    const newNum = num +55
    alert(newNum)
  }

  return (
    <>
    
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>posts are coming.......</h3>}>
          <Posts postsPromis={postsPromis}></Posts>
      </Suspense>
      {/* <Suspense fallback={<h3>Loding...</h3>}>
        <Usres feachUseres={feachUseres}></Usres>
      </Suspense> */}
      <Suspense fallback={<h3>Frinndes are coming ror treat...</h3>}>
      <Frinndes frindesPromise={frindesPromise}></Frinndes>

      </Suspense>
  <Counter></Counter>

  <Batsman></Batsman>
  

  <Boller></Boller>
      <button onClick={handlerClick}>click me1</button>
      <button onClick={function handlerClick2 (){
        alert('hi i am sakhawat')
      }}>click me2</button>
      
       <button onClick={handlerClick3}>click me3</button>


       <button onClick={()=>alert("mama")}>click me4</button>

       <button onClick={()=>handelAdds(50)}>click add5</button>
    </>
      
  )
}

export default App
