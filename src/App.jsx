
import './App.css'
import Batsman from './Batsman'
import Boller from './Boller'
import Counter from './counter'
 

function App() {
  // const [count, setCount] = useState(0)
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
