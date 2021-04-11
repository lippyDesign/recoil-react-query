import { Link } from 'react-router-dom';

import { Book } from '../types/book';

interface BooksProps {
  books: Book[];
  isLoading: boolean;
  error: Error | null;
}

const Books: React.FC<BooksProps> = ({ books, isLoading, error }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }
 
  if (error) {
    return <p>An error has occurred: {error.message}</p>
  }

  if (!books.length) {
    return <p>No books found</p>
  }

  return (
    <>
      <h2>Books</h2>
      <ul>
        {books.map(({ author, title, isbn }) => <li key={isbn}>
          <Link to={`/books/${isbn}`}><b>{author}</b> - {title} - <i>{isbn}</i></Link>
        </li>)}
      </ul>
    </>
  );
};

export default Books;