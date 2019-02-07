import Link from 'next/link';

import NavStyles from './Nav.styles';

const Nav = () => (
  <NavStyles>
    <li>
      <Link href="/settings">
        <a>Settings</a>
      </Link>
    </li>
    <li>
      <Link href="/log">
        <a>Log</a>
      </Link>
    </li>
    <li>
      <Link href="/account">
        <a>Account</a>
      </Link>
    </li>
  </NavStyles>
);

export default Nav;
