import { Button } from 'antd';

const CustomButton = ({ label, ...rest }) => {
  return <Button {...rest}>{label}</Button>;
};

export default CustomButton;
