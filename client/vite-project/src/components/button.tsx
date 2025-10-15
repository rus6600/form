
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className: string;
  }
  
  export const Button = ({
    className,
    children,
    ...rest
  }: ButtonProps) => {
    return (
      <button className={className} {...rest}>
        {children}
      </button>
    );
  };
  