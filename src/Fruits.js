import { useState, useEffect } from "react";
import './App.css'

const Fruits =() =>{
    const [fruit, setFruit] = useState()
    const [loading , setLoading] = useState(false);
    useEffect(() => {   
        fruits()  
    },[])  
    const fruits = ()=>{
     fetch('http://localhost:5000/products/fruits')
     .then(res => res.json())
     .then(
      data => {
        setFruit(data)
        setLoading(true)
        console.log("fetched data----->",data )})
      .catch (err =>{throw  new Error (err.message)});
  }
  if(!loading){
    console.log("loading data----->",loading);
    return <div>Loading.........</div>
  }
      return (
         <div>
      
          <p id="unique">Yummy and Fresh Fruits</p>
          <div className="container">
          <h3>Fruits</h3>
          <div className="fruits">
            {fruit.map(item =>(
          <div key={item.id}>
              <p> {item.name}</p> 
              <img src={"https://images.unsplash.com/photo-1607237896259-191316556483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXRzJTIwYW5kJTIwdmVnZ2llc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt= "image" width="50%" height="50%"/>
          </div>
        ))} </div>
                 
          </div>
        </div>
      )
  }
  export default Fruits;