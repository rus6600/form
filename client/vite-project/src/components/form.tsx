interface FormPorps extends React.FormHTMLAttributes<HTMLFormElement> {
    className: string;
  }
  
  export const Form = ({ className, children, ...rest }: FormPorps) => {
    return (
      <form  className={className}  {...rest}>
        {children}
      </form>
    );
  };
  