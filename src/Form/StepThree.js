import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepThreeValidationSchema = Yup.object({
  satisfaction: Yup.string().required().label('Your satisfaction'),
});

function StepThree({ data, next, prev }) {
  const handleSubmit = (values) => {
    next(values, true);
  };
  return (
    <Formik
      validationSchema={stepThreeValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <p>Are you satisfied?</p>
          <Field name='satisfaction' />
          <ErrorMessage name='satisfaction' />
          <button type='button' onClick={() => prev(values)}>
            Back
          </button>
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default StepThree;
