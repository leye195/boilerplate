type Props = {
  className?: string;
  children: JSX.Element | React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
  onClick: () => void;
};

const Button = ({
  className = '',
  children,
  disabled,
  onClick,
  type = 'button',
}: Props) => {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
