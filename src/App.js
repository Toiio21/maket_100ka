import Enter from './components/enter/enter';
import EnterTwo from './components/enter_two/enter_two';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/profile/profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Enter} />
          <Route exact path="/enter" component={EnterTwo} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
