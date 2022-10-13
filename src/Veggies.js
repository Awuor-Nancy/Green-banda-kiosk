import { useState, useEffect } from "react";
import './App.css'

const Vegetables =() =>{
    const [vegetable, setVegetable] = useState()
    const [loading , setLoading] = useState(false);
    useEffect(() => {   
        products()  
    },[])  
    const products = ()=>{
     fetch('http://localhost:5000/products/vegetables')
     .then(res => res.json())
     .then(
      data => {
        setVegetable(data)
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
        
          <p id="unique">Fresh and Kienyeji vegetables</p>
          <div className="container">
          <h3>Vegetables</h3>
          <div className="veggies">
            {vegetable.map(item =>(
          <div key={item.id}>
              <p> {item.name}</p> 
              <img src={"https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="fruits" width="50%" height="100%"/>
          </div>
        ))} </div>
                 
          </div>
        </div>
      )
  }
  export default Vegetables;