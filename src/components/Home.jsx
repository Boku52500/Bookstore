import { NavLink } from 'react-router-dom';
import { MdOutlineAccountCircle } from 'react-icons/md';

function Header() {
  return (
    <div className="header">
      <h1>Bookstore CMS</h1>
      <ul className="header-gap">
        <li>
          <NavLink to="/" className="links">
            Books
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="Categories" className="links">
            Categories
          </NavLink>
        </li>
      </ul>
      <div className="icon-but"><MdOutlineAccountCircle /></div>
    </div>
  );
}

export default Header;
