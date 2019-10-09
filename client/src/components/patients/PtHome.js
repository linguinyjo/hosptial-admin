import React from 'react'

const PatientHome = () => {
  return (
    <div>
      <h3>Patient Home screen</h3>
      <div><a href="/find_patient">Find Patient</a></div>
      <div><a href="/add_patient">Add Patient</a></div>
      <div><a href="/">Edit Patient</a></div>
      <div><a href="/show_all">Show all</a></div>
    </div>
  )
}

export default PatientHome