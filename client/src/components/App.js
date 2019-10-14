import React from 'react';
import Header from './Header'
import axios from 'axios'
import Welcome from './Welcome'
import Dashboard from './Dashboard'
import PatientHeader from './patientHeader'
import PtHome from './patients/PtHome'
import ShowAll from './patients/ShowAll'
import AddPatient from './patients/AddPatient'
import FindPatient from './patients/FindPatient'
import EditPatient from './patients/EditPatient'
import DeletePatient from './patients/DeletePatient'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'



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
    switch(this.state.user) {
      case(null):
        return null
      case false:
        return <Route path='/' component={Welcome} />
      default:
        return (
          <div>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path="/patients" component={PtHome}/>
            <Route exact path="/find_patient" component={FindPatient}/>
            <Route exact path="/add_patient" component={AddPatient}/>
            <Route exact path="/edit_patient" component={EditPatient}/>
            <Route exact path="/delete_patient" component={DeletePatient}/>
            <Route exact path="/show_all" component={ShowAll}/>
          </div>
        )
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          {this.props.currentPatient ? <PatientHeader patient={this.props.currentPatient} /> : null}
          {this.showHome()}
        </BrowserRouter>
      </div>
    );
  } 
}

function mapStateToProps(state) {
  console.log(state)
  return { currentPatient: state.currentPatient}
}
export default connect(mapStateToProps)(App);

