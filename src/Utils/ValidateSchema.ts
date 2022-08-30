import { ObjectSchema, ValidationError } from 'yup';

const validateValues = async (schema: ObjectSchema<any>, values: Record<string, any>): Promise<Record<string, string>> => {
  try {
    await schema.validate(values, { abortEarly: false });
    return {};
  } catch (err) {
    if (err instanceof ValidationError) {
      return normalizeValidationErrors(err);
    }

    return {
      internal: err instanceof Error ? err.message : 'Unknown error',
    };
  }
};

const normalizeValidationErrors = (validationError: ValidationError): Record<string, string> => {
  try {
    const errors = validationError.inner.reduce((acc, curr) => {
      if (!curr.path) {
        return acc;
      }

      return Object.assign(acc, { [curr.path]: curr.message });
    }, {});
    return errors;
  } catch (err) {
    return {
      internal: err instanceof Error ? err.message : 'Unknown error',
    };
  }
};

const validateFormValues = (schema: ObjectSchema<any>) => async (values: Record<string, any>) => validateValues(schema, values);

export default validateFormValues;
