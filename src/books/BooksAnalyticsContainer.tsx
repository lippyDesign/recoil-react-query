import { useRecoilState } from 'recoil';

import BooksAnalytics from './BooksAnalytics';

import { viewedBooksState } from '../global-state/books';

const BooksAnalyticsContainer: React.FC = () => {
  const [viewedBooks, setViewedBooks] = useRecoilState(viewedBooksState);

  return (
    <div>
      <BooksAnalytics viewedBooks={viewedBooks} resetBooks={() => setViewedBooks([])} />
    </div>
  );
};

export default BooksAnalyticsContainer;