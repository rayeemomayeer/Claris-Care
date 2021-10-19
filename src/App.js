import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import ServiceDescription from './components/ServiceDescription/ServiceDescription/ServiceDescription';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import { useEffect, useState } from 'react';

function App() {
  const [services, setServices] = useState([]);
  useEffect(()=> {
    fetch('services.json')
      .then(result=>result.json())
      .then(data=> setServices(data))
  }, []);
  return (
    <div className="">
      <AuthProvider>
        <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
            <div className="max-w-2xl mx-auto py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-5xl text-center mb-8 text-green-900">Our Services</h1>
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                  services.slice(0,4).map(service=> <Service key={service.id} service={service}></Service>)
                }
              </div>
            </div>
            <div className="text-center">
              <Link to="/services"><button className="btn btn-success">see all services</button></Link>
            </div>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <ServiceDescription></ServiceDescription>
          </PrivateRoute>
          <Route path="*">
            
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
