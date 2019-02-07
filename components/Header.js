import Link from 'next/link';

import { Logo, StyledHeader } from './Header.styles';
import Nav from './Nav';

const Header = () => (
  <StyledHeader>
    <nav className="navbar">
      <Logo>
        <Link href="/">
          <a>
            Pomodoro
            <b>App</b>
          </a>
        </Link>
      </Logo>
      <Nav />
    </nav>
  </StyledHeader>
);

export default Header;
