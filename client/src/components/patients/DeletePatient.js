import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class DeletePatient extends React.Component {
  state = {
    savedPatient: null
  }
  render() {
    return (
      <div>
        <h3>Delete a patient</h3>
        <Formik
          initialValues={{ nhs_number: '', _id: '' }}
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
            const response = await axios.get(
              '/api/delete_patient', {
                params: {
                  nhs_number: values.nhs_number,
                  _id: values._id
                }
              })
            this.setState({savedPatient: response.data})
            setSubmitting(false)
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="nhs_number" placeholder="NHS Number"/>
              <ErrorMessage name="nhs_number" component="div" />
              <Field type="text" name="_id" placeholder="id"/>
              <ErrorMessage name="_id" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Search
              </button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}
      
export default DeletePatient


