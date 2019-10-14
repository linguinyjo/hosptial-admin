import React from 'react'

class PatientHeader extends React.Component {
  getPatient = () => {
    let storedPatient = Object.keys(this.props.patient).map(k => this.props.patient[k])
    return (
      <div className="container" style={{listStyle: 'none', display: 'flex', justifyContent: 'center', backgroundColor: "#bcc7cc", border: "1px solid black"}}>
        {storedPatient.map((x, i) => <ul style={{marginBottom: '0'}}>{Object.keys(this.props.patient)[i]}: {x}</ul>)}
        <div style={{display:'flex', justifyContent: 'flex-end', paddingLeft:'3rem'}}>
    <input type="button" value="Clear"/>
</div>

      </div>
    )
  }

  render() {
    return (
      <div>
        {this.getPatient()}
        
      </div>
    )
  } 
}

export default PatientHeader