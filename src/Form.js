import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";

const Form = () => {
  const [currentUsers, setCurrentUsers] = useState([])
  const [name , setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
        const data = {
          name ,
          email ,
          password ,
          confirmPassword
        }
        if(!data.name || !data.email || !data.password || !data.confirmPassword){
          console.log("Fill all inputs");
          return;

        }
        const filteredUsers= currentUsers.filter((users)=>{
          return users.email === data.email;
        })
          if(filteredUsers.length === 0){
            fetch("http://localhost:3000/users", {
              method: "post",
              headers:{
                "content-type": "application/json",
              },
              body: JSON.stringify(data)
            })
            .then((res)=> res.json())
            .then((user)=>{
              console.log(user);
            })
            .catch((err) =>{
              throw new Error(err.message);
            })
          }
          else{
            console.log("User already exists");
            console.log(filteredUsers);

          }
  };

  useEffect(()=>{
   fetch("http://localhost:3000/users")
   .then((res)=>res.json())
   .then((users)=>{
    setCurrentUsers(users);
   
   })
   .catch((err)=>{
    throw new Error(err.message);
   })
    
  }, [])
  return (

    <div className="Login">

      <h2>Welcome to Greens Kiosk</h2>
    
      <form className="form" onSubmit={handleSubmit}>
         <label for="firstName">Full Name</label> <br></br>
         <input type="text" name="fullname" id="fullname" placeholder="Full Name"  onChange={(e)=>
          {setName(e.target.value)}}></input> <br></br> <br></br>

         <label for="Email">Email</label> <br></br>
         <input type="email" name="email" id="email" placeholder="Email" required onChange={(e)=>
          {setEmail(e.target.value)}}></input> <br></br> <br></br>

         <label for="Password">Password</label> <br></br>
         <input type="password" name="password" id="password" placeholder="Password" required onChange={(e)=>
          {setPassword(e.target.value)}} ></input> <br></br> <br></br>

         <label for="password">Confirm Password</label> <br></br>
         <input type="confirmPassword" name="confirmPassword" id="confirmPasspassword" placeholder="confirmPassword" 
         onChange={(e)=> {setConfirmPassword (e.target.value)}} ></input> <br></br> <br></br>

         {/* <Link exact to="/Fetchproducts"></Link>  */}
         <button type="submit" name="login" >Fetchproducts</button>
        
      </form>     
    </div>

  );

}
export default Form;

  

