import React from 'react';
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux'
import * as actions from '../../actions'


class FindPatient extends React.Component {
  constructor(){
    super()
    this.state = {
      searchResult: null,
      storedPatient: null
    }
  }

  storePatient = () => {
    const { first_name, last_name, gender, dob, nhs_number } = this.state.searchResult[0]
    this.props.savePatient(
      {
        "First Name": first_name,
        "Last Name": last_name,
        "Gender": gender,
        "Date of Birth": dob,
        "nhs number": nhs_number
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Find patient: </h1>
        <Formik
          initialValues={{ first_name: '', last_name: '', gender: '', dob: '', email: '', nhs_number: '', }}
          validate={values => {
            let errors = {};
            if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            const response = await axios.get(
              '/api/find_patient', {
                params: {
                  first_name: values.firstName,
                  last_name: values.lastName,
                  gender: values.gender,
                  dob: values.dob,
                  email: values.email,
                  nhs_number: values.nhs
                }
              })
            this.setState({searchResult: response.data})
            setTimeout(() => {
              alert("Hello: " + (JSON.stringify(values, null, 2)));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="firstName" placeholder="First name"/>
              <ErrorMessage name="firstName" component="div" />
              <Field type="text" name="lastName" placeholder="Last name" />
              <ErrorMessage name="lastName" component="div" />
              <Field type="text" name="gender" placeholder="gender" />
              <ErrorMessage name="gender" component="div" />
              <Field type="text" name="dob" placeholder="dob" />
              <ErrorMessage name="dob" component="div" />
              <Field type="text" name="email" placeholder="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="text" name="nhs" placeholder="nhs" />
              <ErrorMessage name="nhs" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <div>{this.state.searchResult ? JSON.stringify(this.state.searchResult) : null }</div>
        <button onClick={this.storePatient}>Load Patient</button>
      </div>
    )
  }
}
 
function mapStateToProps(state) {
  return { currentPatient: state.currentPatient }
}
export default connect(mapStateToProps, actions) (FindPatient);