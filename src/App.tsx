import { CircularProgress, Typography } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import { AllCountries, AllLanguages, Continents, Countries, NavBar } from './components';

import { Suspense } from 'react';
import './App.css';
import Country from './components/Country';

export const SuspenseFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
    <CircularProgress />
  </div>
);

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
        <Typography
          variant='h1'
          gutterBottom
          fontWeight='medium'
        >
          Countries - Graph
        </Typography>
      </Link>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<SuspenseFallback />}>
              <Continents />
            </Suspense>
          }
        />
        <Route
          path='/countries/:continentId'
          element={
            <Suspense fallback={<SuspenseFallback />}>
              <Countries />
            </Suspense>
          }
        />
        <Route
          path='/all-countries'
          element={
            <Suspense fallback={<SuspenseFallback />}>
              <AllCountries />
            </Suspense>
          }
        />
        <Route
          path='/all-languages'
          element={
            <Suspense fallback={<SuspenseFallback />}>
              <AllLanguages />
            </Suspense>
          }
        />
        {/* <Route
          path='/country'
          element={
            <Suspense fallback={<SuspenseFallback />}>
              <Country />
            </Suspense>
          }
        /> */}
        <Route
          path='/country/:code'
          element={
            <Suspense fallback={<SuspenseFallback />}>
              <Country />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}
