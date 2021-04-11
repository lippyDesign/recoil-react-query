import { Link } from 'react-router-dom';

interface HeaderProps {
  numberOfViewedBook: number;
}

const Header: React.FC<HeaderProps> = ({ numberOfViewedBook }) => {
  return (
    <div className="cell-list">
      <ul>
        <li><Link to="/">Counter</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
      <hr />
      <h4>Number of times a book was viewed: <Link to="/analytics">{numberOfViewedBook}</Link></h4>
      <hr />
    </div>
  );
};

export default Header;