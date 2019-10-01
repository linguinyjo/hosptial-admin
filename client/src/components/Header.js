import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'

class Header extends React.Component {
  state = {
    user: null
  }

  componentDidMount(){
    this.fetchUser()
  }
  
  async fetchUser() {
    const res = await axios.get('/api/current_user')
    this.setState({user: res.data})
  }

  render(){
    const style = {color: "black", fontWeight: "bold", marginLeft: "20px", marginRight: "20px", fontSize: "1rem"}
    const displayUser = () => {
      if(this.state.user) {
        return <li key="2"><a href="/api/logout" style={style}>Logout</a></li>
      }
      else {
        return <li><a href="/auth/google" style={style}>Login</a></li>
      }
    }

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home">
            {'Hospital Administration System 1.0'}
          </Navbar.Brand>
         <Nav className="justify-content-end">
            {displayUser()}
          </Nav> 
        
            
    
        </Navbar>
      </div>
    )
  }
}

export default Header

