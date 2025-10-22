import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Continent, Country, useGetContinentsSuspenseQuery } from '../__generated__/operations';

export const Continents = (): JSX.Element => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data } = useGetContinentsSuspenseQuery();

  const navigateToCountries = (path: string, countries?: Country[]) => {
    navigate(`countries/${path}`, {
      state: {
        countries,
      },
    });
  };

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
      {(data?.continents as Continent[]).map(continent => (
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
