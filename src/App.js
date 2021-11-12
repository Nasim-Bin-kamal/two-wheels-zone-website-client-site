import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import AllProducts from './pages/AllProducts/AllProducts';
import Order from './pages/Order/Order';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route exact path="/products" component={AllProducts} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/products/order/:id" component={Order} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />



        </Switch>
      </Router>

    </div>
  );
}

export default App;
