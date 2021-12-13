
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>

          <Route path="/details/:projectId">
            <Details></Details>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
