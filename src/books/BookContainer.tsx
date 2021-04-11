import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil';

import BookView from './BookView';
import { getBookById } from '../api/books';
import { Book } from '../types/book';
import { viewedBooksState } from '../global-state/books';

interface ParamTypes {
  isbn: string
}

const BookContainer: React.FC = () => {
  const [viewedBooks, setViewedBooks] = useRecoilState(viewedBooksState);

  const { isbn } = useParams<ParamTypes>();

  const { data: book, isLoading, error } = useQuery<Book, Error>(['getBook', isbn], () => getBookById(isbn), {
    onSuccess: (viewedBook) => {
      const newViewedBooks = [...viewedBooks, {...viewedBook, timestamp: new Date() }]
      setViewedBooks(newViewedBooks);
    },
  });

  return (
    <div>
      <BookView book={book} isLoading={isLoading} error={error} />
    </div>
  );
};

export default BookContainer;