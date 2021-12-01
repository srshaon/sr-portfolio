
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Temporary from './components/Temporary/Temporary';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/abc'>
            <Temporary></Temporary>
          </Route>
          <Route path="/details/:projectId">
            <Details></Details>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
