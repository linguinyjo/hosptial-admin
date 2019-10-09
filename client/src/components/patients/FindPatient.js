import React from 'react'
import axios from 'axios'
import Basic from './patientForm'

class FindPatient extends React.Component {
  constructor(props) {
    super()
    this.state = {
      ptData: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    const data = await axios.get('/api/find_patient')
    this.setState({ ptData: data.data})
  }

  renderData() {
    const pts = this.state.ptData
    return pts.map(pt => {
      return (
        <div>{pt['first_name']} {pt['last_name']} {pt['dob']} {pt['gender']} {pt['nhs_number']}</div>
      )
    })
  }

  handleSubmit(event) {
    alert(this.state.firstName)
  }

  handleChange(event) {
    console.log(this.state.firstName)
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <Basic />
      </div>
    )
  }
}

export default FindPatient