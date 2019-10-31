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
        return <div key="2"><a href="/api/logout" style={style}>Logout</a></div>
      }
      else {
        return <div><a href="/auth/google" style={style}>Login</a></div>
      }
    }

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href={this.state.user ? '/dashboard' : '/dashboard'}>
            Hospital Administration System 1.0
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {displayUser()}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header

