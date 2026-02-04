import { useState } from 'react'
import '../app.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiEye, FiEyeOff } from 'react-icons/fi';



function Login() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [passType, setType] = useState('password');


    const handleToggle = () => {
        if (passType === 'password') {
            setType('text')
            console.log(FiEye, FiEyeOff);
        }
        else {
            setType('password');
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };



    const handleSubmit = async (e) => {

        e.preventDefault();
        const payload = {
            email: formData.email,
            password: formData.password,
        };
        await loginUser(payload);

        //   true
        //   setFormData((prev)=>({email:null,password:null}));

    };
    const loginUser = async (payload) => {
        try {
            const response = await axios.post('http://localhost:3001/api/login', payload,
                {
                    headers: { "Content-Type": 'application/json' }
                }
            );
            if (response.data.success) {
                // Save token to localStorage or state
                localStorage.setItem('token', response.data.token);
                alert('Login successful!');
                navigate('/dashboard');
            }
            
            else {
                setError(response.data.message);
            }
        } catch (error) {
           if(error.response){
            setError(error.response.data.message);
           }

        };

    };







    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
                    <div className="card-body">
                        <h3 className="card-title text-center mb-4 fw-bold">Login</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                               <div className="position-relative">
  <input
    type={passType}
    id="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    className="form-control pe-5"
    placeholder="Enter your password"
    required
  />

  <button
    type="button"
    onClick={handleToggle}
    className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2 border-0"
  >
    {passType === "password" ? <FiEye /> : <FiEyeOff />}
  </button>
</div>
                            </div>
                            <button type='submit' className="btn btn-primary w-100 mt-2">Login</button>
                        </form>
                        
                    </div>
                </div>
            </div>



        </>
    )
}

export default Login
