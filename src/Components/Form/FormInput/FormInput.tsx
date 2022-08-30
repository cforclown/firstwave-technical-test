import { ErrorMessage, Field } from 'formik';
import { IMetadataField } from '../../../Types/Metadata';

interface IFormInputProps {
  field: IMetadataField;
  isEditing?: boolean;
  className?: string;
}

function FormInputBase({
  field, isEditing, className,
}: IFormInputProps): JSX.Element {
  return (
    <div className={`${className} mb-4`}>
      <label className="form-input-label">
        {field.label}
        {' '}
        {field.type.required && <span className="required-star">*</span>}
      </label>
      <Field
        type={field.type.value === 'STRING' ? 'text' : 'number'}
        name={field._id}
        disabled={isEditing && field.type.uneditable}
      />
      <ErrorMessage name={field._id}>
        {(msg) => (
          <p className="form-validation-error">{msg}</p>
        )}
      </ErrorMessage>
    </div>
  );
}

export default FormInputBase;
