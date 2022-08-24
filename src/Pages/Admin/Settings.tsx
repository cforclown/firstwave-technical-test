interface ISettings {
  className: string;
}

export const SettingsBase = ({ className }: ISettings): JSX.Element => <div className={className}><p>OK</p></div>;
