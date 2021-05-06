import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import { RideContextProvider } from './components/Context/Context';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import PrivateRoute from './components/Routes/PrivateRoute';
import SearchDestination from './components/Search/SearchDestination';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="main-style">
      <RideContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/destination/:type">
              <SearchDestination />
            </PrivateRoute>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </RideContextProvider>
    </div>
  );
}

export default App;
