import { useState, useEffect } from 'react';

import { Book } from '../types/book';

interface AddBookProps {
  isLoading: boolean,
  handleAdd(book: Book): void;
  error: Error | null;
}

const AddBook: React.FC<AddBookProps> = ({ isLoading, error, handleAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  useEffect(() => {
    if (!isLoading && !error) {
      setTitle('');
      setAuthor('');
      setIsbn('');
    }
  }, [isLoading, error])

  const errorMessage = error ? <p style={{ color: 'red' }}>{error.message}</p> : null;

  return (
    <div>
      <h2>Add Book</h2>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleAdd({ title, author, isbn });
        }}>
          <p>Author</p>
          <input value={author} onChange={e => setAuthor(e.target.value)} disabled={isLoading} />
          <p>Title</p>
          <input value={title} onChange={e => setTitle(e.target.value)} disabled={isLoading} />
          <p>ISBN</p>
          <input value={isbn} onChange={e => setIsbn(e.target.value)} disabled={isLoading} />
          {errorMessage}
          <div>
            <input type="submit" disabled={isLoading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;