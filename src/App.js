import './App.css';
import Main from './components/Main';
import Public from './components/Public';
import Photo from './components/Photo';
import Contacts from './components/Contacts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const Header = () => {
  return (
    <h1>This is header</h1>
  )
}

const NavComponent = () => {
  return (
    <nav className="space_between">
      <NavLink to='/' activeClassName={'selected'}>Main</NavLink>
      <NavLink to='/public' activeClassName={'selected'}>Public</NavLink>
      <NavLink to='/photo' activeClassName={'selected'}>Photo</NavLink>
      <NavLink to='/contacts' activeClassName={'selected'}>Contacts</NavLink>
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavComponent />
        <Switch>
          <Route exact path='/public' component={Public} />
          <Route exact path='/photo' component={Photo} />
          <Route exact path='/contacts' component={Contacts} />
          <Route path='/' component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;