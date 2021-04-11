import { useRecoilValue } from 'recoil';

import { numberOfViewedBookState } from './global-state/books';
import Header from './Header';

const CounterContainer: React.FC = () => {
  const numberOfViewedBook = useRecoilValue(numberOfViewedBookState);

  return (
    <div>
      <Header numberOfViewedBook={numberOfViewedBook} />
    </div>
  );
};

export default CounterContainer;
