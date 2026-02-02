import { react, useState,useEffect } from 'react'
// import './App.css'

function App() {
 
  const [object , setObject] = useState({
    "email": "",
    "password": "",
  })

 const  handleForm = () =>{
  alert("logged In")
 };


  return (
    <>
      <h1>hello world forntend is working on port 5173</h1>
      <div className=' d-flex flex-column'>
      <h2>login</h2>
      <div className='d-flex flex-row m-12 p-12'>

      <form action="">
        <input type="email" placeholder='email' />
        <input type="password" placeholder='create password'/>
        <button type='button' className='btn btn-primary' onClick={handleForm}>
          <h4>login</h4>
          </button>        
      </form>
      </div> 
      </div>

    </>
  )
}

export default App
