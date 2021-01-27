import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Home from './components/Home';
import { Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import ViewUser from './user/ViewUser';


function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/user/add' component={AddUser} />
          <Route exact path='/user/edit/:id' component={EditUser} />
          <Route exact path='/user/view/:id' component={ViewUser} />
          <Route exact path='/' component={Home} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
