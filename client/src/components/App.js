import React from 'react';
import Header from './Header'
import axios from 'axios'
import Welcome from './Welcome'
import Dashboard from './Dashboard'
import PtHome from './patients/PtHome'
import ShowAll from './patients/ShowAll'
import { BrowserRouter, Route } from 'react-router-dom'
import FindPatient from './patients/FindPatient';

class App extends React.Component {
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

  showHome() {
    if(this.state.user) {
      return (
        <div>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path="/patients" component={PtHome}/>
          <Route exact path="/find_patient" component={FindPatient}/>
          <Route exact path="/show_all" component={ShowAll}/>

        </div>
      )
    }
    else {
      return (
        <Route exact path='/' component={Welcome} />
      )
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          {this.showHome()}
        </BrowserRouter>
      </div>
    );
  } 
}

export default App;

