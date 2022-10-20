import React, {useState} from 'react'
import admin from "../../data/users"

const Login = props => {
    const [username,setUser] = useState();
    const [password,setPassword] = useState();
    const [Alert,setAlert] = useState();
    const [Style,setStyle] = useState();
    const authenticationLogin =(e)=>{
        e.preventDefault();
        if (!username || !password){
            setAlert("Fill out Filed");
            setStyle('alert alert-danger')
        }else{
            if (username === admin[0].username && password === admin[0].password){
               props.history.push('/dashboard');
        }else{
            setAlert("Password or username is wrong!");
            setStyle('alert alert-danger')
        }
        }
        
    }
   
  return (
    <div className='d-flex align-items-center justify-content-center flex-column '>
        <h6 className={`text-center ${Style}`}>{Alert}</h6>
        <h1 className='text-center my-5 text-light'>Login Page</h1>
         <form className='col-6' onSubmit={authenticationLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputuser1" className="form-label text-light">Username</label>
          <input type="text" onChange={(e)=>{
            setUser(e.target.value);
          }} className="form-control" id="exampleInputuser1" aria-describedby="userHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
          <input type="password" onChange={(e)=>{
            setPassword(e.target.value);
          }} className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary text-light">Submit</button>
        
        
      </form>

      
    </div>
  )
}

export default Login



