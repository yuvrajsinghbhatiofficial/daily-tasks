import {  useState } from 'react'
import '../app.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
 
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:'',
        pass:'',
    });

  
 const handleChange = (e)=>{
    const {name,value} =e.target;
    setFormData((prevState) =>({
        ...prevState,
        [name]: value,
    }));
 };


 const  handleSubmit = async (e) =>{

    e.preventDefault ();
    const payload = {
        email:formData.email,
        pass:formData.pass,
    };

    const loginUser = async(payload)=>{
        try{
            const response = await axios.post('http://localhost:3001/login',payload,
                {
                    headers:{"Content-Type":'application/json'}
                }
            );
                if (response.data.success) {
                // Save token to localStorage or state
                localStorage.setItem('token', response.data.token);
                alert('Login successful!');
                navigate('/dashboard');
            } else {
                setError(response.data.message || 'Login failed');
            }
                
        }catch(error){
            console.error('login error');

        };
    };
    console.log(payload.email)
//   alert("logged In")
  navigate('/dashboard')
  
  //payload POST to backned .
};
  



  return (
    <>
          <div>
              <div className="card p-2 h-2 shadow-lg" >
                  <h3 className="card-title text-center mb-4">Login</h3>
                  <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
                      
                      <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email address</label>
                          <input type="email" id='email' name='email' value={formData.email}onChange={handleChange} className="form-control" placeholder="Enter your email" />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="pass" className="form-label">Password</label>
                          <input type="password" id='pass' name='pass' value={formData.pass}onChange={handleChange} className="form-control" placeholder="Enter your password" />
                      </div>
                      <button type='submit' className="btn btn-primary">Submit</button>
                  </form>
              </div>
          </div>



    </>
  )
}

export default Login
