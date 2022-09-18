import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepTwoValidationSchema = Yup.object({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
});

function StepTwo({ next, prev, data }) {
  const handleSubmit = (values) => {
    next(values);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <p>Email</p>
          <Field name='email' />
          <ErrorMessage name='email' />
          <p>Password</p>
          <Field name='password' />
          <ErrorMessage name='password' />
          <button type='button' onClick={() => prev(values)}>
            Back
          </button>
          <button type='submit'>Next</button>
        </Form>
      )}
    </Formik>
  );
}

export default StepTwo;
