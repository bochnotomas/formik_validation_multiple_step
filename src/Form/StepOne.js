import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepOneValidationSchema = Yup.object({
  first_name: Yup.string().required().label('First name'),
  last_name: Yup.string().required().label('Last name'),
});

function StepOne({ next, data }) {
  const handleSubmit = (values) => {
    next(values);
  };

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <p>First name</p>
          <Field name='first_name' />
          <ErrorMessage name='first_name' />
          <p>Last name</p>
          <Field name='last_name' />
          <ErrorMessage name='last_name' />

          <button type='submit'>Next</button>
        </Form>
      )}
    </Formik>
  );
}

export default StepOne;
