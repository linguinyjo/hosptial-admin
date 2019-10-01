import React from 'react'

const Login = (props) => {
  
  function display() {
    console.log(props)
    return (
      props.user ? 
        <div>
          <h3>
            Welcome
          </h3>
          <button><a href='/api/logout'>Logout</a></button>
        </div>
        :
        <div>
          <h3>
            Please login before accessing the patient system.
          </h3>
          <button><a href='/auth/google'>Login</a></button>
      </div> 

      
      
    )
  }
  return (
    <div>
      {display()}
    </div>
  )
}

export default Login