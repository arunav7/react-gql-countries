import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import { Continent, Country, useGetContinentsQuery } from '../__generated__/operations';

export const Continents = (): JSX.Element => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log({ navigate, state });
  const [continents, setContinents] = useState<Continent[]>([]);
  const { data, loading, error } = useGetContinentsQuery();

  const navigateToCountries = (path: string, countries?: Country[]) => {
    navigate(`countries/${path}`, {
      state: {
        countries,
      },
    });
  };

  useEffect(() => {
    if (data) {
      setContinents(data?.continents as Continent[]);
    }
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (state && state.previousPath === '/all-languages') {
      console.log(state.message);
    }
  }, [state]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }}
    >
      {loading && <CircularProgress />}
      {error && <p>`Error: ${error.message}`</p>}
      {!loading &&
        !error &&
        continents.map(continent => (
          <div
            key={continent.code}
            className='continents'
            onClick={() => navigateToCountries(continent.code, continent.countries)}
          >
            <p>{continent.name}</p>
            <p>{continent.code}</p>
          </div>
        ))}
    </div>
  );
};
