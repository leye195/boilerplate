import { UseFormRegisterReturn } from 'react-hook-form';
import { classnames } from 'libs/utils';

type Props = {
  className?: string;
  name?: string;
  value?: string;
  handleChange?: () => void;
  register?: UseFormRegisterReturn;
  [key: string]: any;
};

const TextArea = ({
  className = '',
  value,
  handleChange,
  register,
  ...rest
}: Props) => {
  return (
    <textarea
      className={classnames('resize-none', className)}
      value={value}
      onChange={handleChange}
      {...register}
      {...rest}
    />
  );
};

export default TextArea;
