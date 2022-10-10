import React, {useState} from "react";

const Form = () => {
  const [name , setName] = useState('');
  console.log(name);
  const [email,setEmail] = useState('');
  console.log(email)
  const [password,setPassword] = useState('');
  console.log(password)
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handleSubmit = (e) => {
        const data = {
          name : name,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        }
        alert(JSON.stringify("Hello Nancy Welcome to GreensBanda",data))
  };
  
  return (

    <div className="Login">

      <h2>Welcome to Greens Kiosk</h2>
    

      <form className="form" onSubmit={handleSubmit}>
         <label for="firstName">Full Name</label> <br></br>
         <input type="text" name="fullname" id="fullname" placeholder="Full Name" required  onChange={(e)=>
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

         <button type="submit" name="login" onClick="submit">Login</button> 
      </form>     
    </div>

  );

}
export default Form;

  

