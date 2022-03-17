import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  className?: string;
  name?: string;
  value?: string;
  handleChange?: () => void;
  type?: 'text' | 'number' | 'password' | 'email';
  register?: UseFormRegisterReturn;
  [key: string]: any;
};

const Input = ({
  value,
  handleChange,
  type = 'text',
  className = '',
  name = '',
  register,
  ...rest
}: Props) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      name={name}
      onChange={handleChange}
      {...register}
      {...rest}
    />
  );
};

export default Input;
