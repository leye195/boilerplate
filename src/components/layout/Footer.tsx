type Props = {
  className?: string;
};

const Footer = ({ className = '' }: Props) => {
  return <footer className={className}></footer>;
};

export default Footer;
