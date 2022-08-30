import { Form, Formik } from 'formik';
import { ObjectSchema } from 'yup';
import validateFormValues from '../../../Utils/ValidateSchema';
import Loader from '../../Loader/Loader.style';

interface IFormContainer {
  loading: boolean;
  children: React.ReactNode;
  initialValues: Record<string, any>;
  onSubmit: (values: Record<string, any>) => void;
  formValidationSchema: ObjectSchema<any>;
}

function FormContainer({
  loading,
  initialValues,
  formValidationSchema,
  onSubmit,
  children,
}: IFormContainer): JSX.Element {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validateFormValues(formValidationSchema)}
        onSubmit={onSubmit}
      >
        <Form>
          {children}
        </Form>
      </Formik>
      {loading && <Loader />}
    </>
  );
}

export default FormContainer;
