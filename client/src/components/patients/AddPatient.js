import React from 'react';
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class AddPatient extends React.Component {
  constructor(){
    super()
    this.state = {
      searchResult: null
    }
  }
  render() {
    console.log(this.state.searchResult)
    return (
      <div>
        <h1>Find patient: </h1>
        <Formik
          initialValues={{ first_name: '', last_name: '', gender: '', dob: '', email: '', nhs_number: '', }}
          // validate={values => {
          //   let errors = {};
          //   if (!values.email) {
          //     errors.email = 'Required';
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = 'Invalid email address';
          //   }
          //   return errors;
          // }}
          onSubmit={async (values, { setSubmitting }) => {
            const response = await axios.post(
              '/api/add_patient', {
                first_name: values.firstName,
                last_name: values.lastName,
                gender: values.gender,
                dob: values.dob,
                email: values.email,
                nhs_number: values.nhs
              })
            this.setState({searchResult: response.data})
            setSubmitting(false)
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
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
      </div>
    )
  }
}
  
export default AddPatient;