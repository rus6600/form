interface InputPorps extends React.InputHTMLAttributes<HTMLInputElement> {
    className: string;
    labelText?: string;
    labelProps?:  React.InputHTMLAttributes<HTMLLabelElement>
  }
  
  export const Input = ({
    className,
    children,
    labelText,
    labelProps,
    ...rest
  }: InputPorps) => {
  
    if (labelText) {
      return (
        <label className="flex flex-col" {...labelProps}>
          {labelText}
          <input className={className} {...rest}>
            {children}
          </input>
        </label>
      );
    }
  
    return (
      <input className={className} {...rest}>
        {children}
      </input>
    );
  };
  