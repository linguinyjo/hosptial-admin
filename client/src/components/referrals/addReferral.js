import React from 'react';
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux'
import * as actions from '../../actions'

class AddReferral extends React.Component {
  state = {
    searchResult: null
  }
  render() {
    return (
      <div>
        <h1>Add referral: </h1>
        <Formik
          initialValues={{ date: '', speciality: '', urgency: '', origin: '', nhs_number: this.props.currentPatient['nhs number'], }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values)
            const response = await axios.post(
              '/api/add_referral', {
                date: values.date,
                speciality: values.speciality,
                urgency: values.urgency,
                origin: values.origin,
                nhs_number: values.nhs_number
              })
            this.setState({searchResult: response.data})
            setTimeout(() => {
              alert("Added the following patient: " + (JSON.stringify(values, null, 2)));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="date" placeholder="Date: DD/MM/YYYY"/>
              <ErrorMessage name="date" component="div" />
              
              <Field type="text" name="speciality" placeholder="Speciality" />
              <ErrorMessage name="speciality" component="div" />
             
              <Field component="select" name="urgency" placeholder="Urgency">
                <option value="">Select urgency</option>
                <option value="routine">Routine</option>
                <option value="urgent">Urgent</option>
                <option value="cancer/2ww">Cancer/2ww</option>
              </Field>
              <ErrorMessage name="urgency" component="div" />
              
              <Field component="select" name="origin" placeholder="Origin">
                <option value="">Select origin</option>                
                <option value="gp">GP</option>
                <option value="accident and emergency">A&E</option> 
              </Field>
              <ErrorMessage name="origin" component="div" />
              
              <Field type="" name="nhs" value={this.props.currentPatient['nhs number']} />
              <ErrorMessage name="nhs" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>     
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { currentPatient: state.currentPatient }
}

export default connect(mapStateToProps, actions)(AddReferral)