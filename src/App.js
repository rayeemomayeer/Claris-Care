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
import Doctors from './components/Doctors/Doctors';
import Doctor from './components/Doctor/Doctor';
import { useEffect, useState } from 'react';
import Phermecy from './components/Phermecy/Phermecy';
import Product from './components/Product/Product';
import ProductDescription from './components/ProductDescription/ProductDescription';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';

function App() {
  const [services, setServices] = useState([]);
  useEffect(()=> {
    fetch('/services.json')
      .then(result=>result.json())
      .then(data=> setServices(data))
  }, []);
  const [doctors, setDoctors] = useState([]);
  useEffect(()=>{
    fetch('/doctors.json')
      .then(response => response.json())
      .then(data => setDoctors(data))
  },[]);
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    fetch('/phermecy.json')
      .then(result=>result.json())
      .then(data=> setProducts(data))
  }, []);
  return (
    <div className="">
      <AuthProvider>
        <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
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
              <Link to="/services"><button className="btn btn-outline-success">see all services</button></Link>
            </div>
            <div className="text-center">
              <h1 className="text-5xl text-center mb-8 text-green-900 mt-24">Docter’s In The Medical Sciences</h1>
              <div className="teachers-container">
                      {
                        doctors.slice(0,5).map(cls => <Doctor key={cls.id} cls={cls}></Doctor>)
                      }
              </div>
            </div>
             <div className="text-center">
              <Link to="/doctors"><button className="btn btn-outline-success">see all doctors</button></Link>
            </div>
            <div>
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-5xl text-center mb-8 text-green-900">Pharmacy</h1>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.slice(0,8).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
    </div>
    <div className="text-center">
              <Link to="/phermecy"><button className="btn btn-outline-success">see all products</button></Link>
            </div>
            <About></About>
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
              <Link to="/services"><button className="btn btn-outline-success">see all services</button></Link>
            </div>
            <div className="text-center">
              <h1 className="text-5xl text-center mb-8 text-green-900 mt-24">Docter’s In The Medical Sciences</h1>
              <div className="teachers-container">
                      {
                        doctors.slice(0,5).map(cls => <Doctor key={cls.id} cls={cls}></Doctor>)
                      }
              </div>
            </div>
             <div className="text-center">
              <Link to="/doctors"><button className="btn btn-outline-success">see all doctors</button></Link>
            </div>
            <div>
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-5xl text-center mb-8 text-green-900">Pharmacy</h1>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.slice(0,8).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
    </div>
    <div className="text-center">
              <Link to="/phermecy"><button className="btn btn-outline-success">see all products</button></Link>
            </div>
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/phermecy">
            <Phermecy></Phermecy>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <ServiceDescription></ServiceDescription>
          </PrivateRoute>
          <PrivateRoute path="/phermacy/:productId">
            <ProductDescription></ProductDescription>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
