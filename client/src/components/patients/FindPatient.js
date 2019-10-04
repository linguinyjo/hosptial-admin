import React from 'react'
import axios from 'axios'

class FindPatient extends React.Component {
  state = {
    ptData: []
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

  render() {
    console.log(this.state.ptData.length )
    return (
      <div>
        <form>
          <input />
        </form>
        <div>
          <h3>All patients:</h3>
          {this.state.ptData.length ? this.renderData() : null}
        </div>
      </div>
    )
  }
}

export default FindPatient