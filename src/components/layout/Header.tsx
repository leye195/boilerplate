type Props = {
  className?: string;
};

const Header = ({ className = '' }: Props) => {
  return (
    <header className={className}>Header</header>
  );
};

export default Header;
