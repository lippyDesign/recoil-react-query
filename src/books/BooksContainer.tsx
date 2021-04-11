import { useQuery, useMutation } from 'react-query';

import Books from './Books';
import AddBook from './AddBook';
import { getBooks, addBook } from '../api/books';
import { Book } from '../types/book';

const BooksContainer: React.FC = () => {
  const booksFetch = useQuery<Book[], Error>('getBooks', () => getBooks());
  const bookAdd = useMutation<Book, Error, Book>((book: Book) => addBook(book), {
    onSuccess: () => {
      booksFetch.refetch();
    }
  });

  return (
    <div>
      <Books books={booksFetch.data || []} isLoading={booksFetch.isLoading} error={booksFetch.error} />
      <AddBook isLoading={bookAdd.isLoading} error={bookAdd.error} handleAdd={bookAdd.mutate} />
    </div>
  );
};

export default BooksContainer;
