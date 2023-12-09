import { Link, Route, Routes } from 'react-router-dom';
import { AllCountries, AllLanguages, Continents, Countries, NavBar } from './components';

import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Link
        to='/'
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
      >
        <h1>Countries - Graph</h1>
      </Link>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Continents />}
        />
        <Route
          path='/countries/:continentId'
          element={<Countries />}
        />
        <Route
          path='/all-countries'
          element={<AllCountries />}
        />
        <Route
          path='/all-languages'
          element={<AllLanguages />}
        />
      </Routes>
    </div>
  );
}
