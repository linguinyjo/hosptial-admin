import React from 'react'
import axios from 'axios'
import ViewEdit from './ViewEditPatient'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class EditPatient extends React.Component {
  state = {
    savedPatient: null
  }
  render() {
    return (
      <div>
        <h3>Edit a patient</h3>
        <Formik
          initialValues={{ nhs_number: '', }}
          validate={values => {
            let errors = {};
            if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            const response = await axios.get(
              '/api/find_patient', {
                params: {
                  nhs_number: values.nhs_number
                }
              })
              console.log(response)
            this.setState({savedPatient: response.data})
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="nhs_number" placeholder="NHS Number"/>
              <ErrorMessage name="nhs_number" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Search
              </button>
            </Form>
          )}
        </Formik>
        <div style={{marginTop: '30px'}}>{this.state.savedPatient ? <ViewEdit data={this.state.savedPatient} /> : null }</div>
      </div>
    )
  }
}
      
export default EditPatient


