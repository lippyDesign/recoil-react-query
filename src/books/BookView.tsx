import { Book } from '../types/book';

interface BookViewProps {
  book: Book | undefined;
  isLoading: boolean;
  error: Error | null;
}

const BookView: React.FC<BookViewProps> = ({ book, isLoading, error }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }
 
  if (error) {
    return <p>An error has occurred: {error.message}</p>
  }

  if (!book) {
    return <p>No book found</p>
  }

  return (
    <>
      <h2>Title: {book.title}</h2>
      <h3>Author: {book.author}</h3>
      <h4>ISBN: {book.isbn}</h4>
    </>
  );
};

export default BookView;