import ironhackersImg from "./assets/ironhackers.avif";
import './App.css';

import { Routes, Route, NavLink } from 'react-router-dom';

import ApartmentDetails from "./components/ApartmentDetails";
import ApartmentList from "./components/ApartmentsList";
import CreateApartment from "./components/CreateApartment";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      {/* <h1>Welcome</h1>
      <img src={ironhackersImg} alt="ironhackers" /> */}
      <header>
        <NavBar />


      </header>

      <Routes>
        <Route path='/' element={ <HomePage />}></Route>
        <Route path='/apartments' element={ <ApartmentList apartments={"dummy"} />}></Route>
        <Route path='/apartments/create' element={ <CreateApartment />} />
        <Route path='/apartments/:id' element={ <ApartmentDetails />}></Route>
      </Routes>

    </div>
  );
}

export default App;
