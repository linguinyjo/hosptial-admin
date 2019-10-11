import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const EditView = (props) => {
  console.log(props)
  const { first_name, last_name, gender, dob, email, nhs_number } = props.data[0]
  return (
    <div>
      <Formik
        initialValues={{ first_name, last_name, gender, dob, email, nhs_number }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values)
          await axios.post(
            '/api/edit_patient', 
              {
                first_name: values.first_name,
                last_name: values.last_name,
                gender: values.gender,
                dob: values.dob,
                email: values.email,
                nhs_number: values.nhs_number   
              }
          )
          setSubmitting(false)
        }}
      >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <div> 
              <span>First Name: {first_name} </span>
              <Field type="text" name="first_name" />
            </div>
            <div> 
              <span>Last Name: {last_name} </span>
              <Field type="text" name="last_name" />
            </div>
            <div> 
              <span>Gender: {gender} </span>
              <Field type="text" name="gender" />
            </div>
            <div> 
              <span>Date of Birth: {dob} </span>
              <Field type="text" name="dob" />
            </div>
            <div> 
              <span>Email Address: {email} </span>
              <Field type="text" name="email" />
            </div>
            <div> 
              <span>NHS number: {nhs_number} </span>
              <Field type="text" name="nhs_number" />
            </div>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default EditView