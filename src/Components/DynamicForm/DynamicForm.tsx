import { IMetadata } from '../../Types/Metadata';
import FormInput from '../Form/FormInput/FormInput.style';

interface IDynamicForm {
  metadata: IMetadata;
  isEditing: boolean;
  className?: string;
}

export function DynamicFormBase({ metadata, isEditing, className }: IDynamicForm): JSX.Element {
  const formItems = metadata.fields.filter((f) => !metadata.keyFields.includes(f._id)).map((field) => (
    <FormInput key={field._id} field={field} isEditing={isEditing} />
  ));

  return (
    <div id="dynamic-form" className={className}>
      <div className="section-panel" />
      <div className="fields-panel">
        {formItems}
      </div>
    </div>
  );
}
