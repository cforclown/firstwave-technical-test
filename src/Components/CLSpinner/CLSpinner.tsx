import React from 'react';
import { BootstrapColor, BootstrapSize } from '../../Types';

export interface ISpinner {
  size?: BootstrapSize,
  color?: BootstrapColor,
  className?: string
}

export function CLSpinnerBase({ size, color, className }: ISpinner): JSX.Element {
  const spinnerClassname = size ? `cl-spinner-${size}` : 'cl-spinner';
  const colorClassname = color ? `cl-spinner-${color}` : 'cl-spinner-primary';

  return (
    <div className={`${className} ${spinnerClassname} ${colorClassname}`}>
      <div className="cl-spinner-bounce-1" />
      <div className="cl-spinner-bounce-2" />
    </div>
  );
}
