import React from 'react'
import axios from 'axios'


class ShowAll extends React.Component {
  constructor(props) {
    super()
    this.state = {
      ptData: null
    }
  }
  
  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    const data = await axios.get('/api/show_all')
    this.setState({ ptData: data.data})
  }

  renderData() {
    const pts = this.state.ptData
    return pts.map(pt => {
      return (
        <div key={pt['nhs_number']}>{pt['first_name']} {pt['last_name']} {pt['dob']} {pt['gender']} {pt['email']} {pt['nhs_number']}</div>
      )
    })
  }

  render() {
    return (
      <div>
        { this.state.ptData ? this.renderData() : null }
      </div>
    )
  }
}

export default ShowAll