const Header = ({ title }) => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="nav__logo">{title || 'React App'}</h1>
        <ul className="nav__links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
