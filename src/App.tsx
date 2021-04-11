import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import HeaderContainer from './HeaderContainer';
import CounterContainer from './counter/CounterContainer';
import BooksContainer from './books/BooksContainer';
import BookContainer from './books/BookContainer';
import BooksAnalyticsContainer from './books/BooksAnalyticsContainer';

function App() {
  return (
    <Router>
      <HeaderContainer />
      <div className="page">
        <Switch>
          <Route exact path="/" component={CounterContainer} />
          <Route exact path="/analytics" component={BooksAnalyticsContainer} />
          <Route exact path="/books" component={BooksContainer} />
          <Route exact path="/books/:isbn" component={BookContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
