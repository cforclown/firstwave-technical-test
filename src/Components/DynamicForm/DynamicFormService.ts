/* eslint-disable no-param-reassign */
import * as yup from 'yup';
import { IMetadataField } from '../../Types/Metadata';

const generateInitialValue = (field: IMetadataField, data?: Record<string, any>): string | number => {
  if (data && Object.keys(data).includes(field._id)) {
    return data[field._id];
  }

  if (field.type.initialValue) {
    return field.type.initialValue;
  }
  if (field.type.enum && field.type.enum.length) {
    return field.type.enum[0]._id;
  }

  if (field.type.value === 'STRING') {
    return '';
  }
  if (field.type.value === 'NUMBER') {
    return 0;
  }

  return '';
};

export const generateInitialValues = (
  fields: IMetadataField[],
  data?: Record<string, any>,
): Record<string, any> => Object.fromEntries(fields.map((field) => [field._id, generateInitialValue(field, data)]));

const generateYupSchemaFromType = (field: IMetadataField): yup.AnySchema | undefined => {
  if (field.type.value === 'STRING') {
    return field.type.required ? yup.string().required(requiredMessage(field)) : yup.string();
  } if (field.type.value === 'NUMBER') {
    return field.type.required ? yup.number().required(requiredMessage(field)) : yup.number();
  }
  return undefined;
};

const requiredMessage = (field: IMetadataField): string => `${field.label} is required!`;

export const generateFormSchema = (fields: IMetadataField[]): yup.ObjectSchema<any> => yup.object({
  ...fields.reduce((accum: Record<string, any>, field) => {
    accum[field._id] = generateYupSchemaFromType(field);
    return accum;
  }, {}),
});
