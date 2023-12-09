import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { usePagination } from '../hooks/usePagination';
import { Country, useGetAllCountriesQuery } from '../__generated__/operations';

export const AllCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const { data, loading, error } = useGetAllCountriesQuery();
  const { endPageIndex, startPageIndex, setPage, currentPageIndex, totalPages } = usePagination(
    12,
    countries.length,
  );

  useEffect(() => {
    console.log({ data });
    if (data) {
      setCountries(data?.countries as Country[]);
    }
  }, [data]);

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: `${error.name}`</p>;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}
      >
        {countries.slice(startPageIndex, endPageIndex).map(country => (
          <div
            className='countries'
            key={country?.code}
          >
            <p>{country.name}</p>
            <span>{country.code}</span>
            <p>Currency: {country.currency}</p>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => setPage(currentPageIndex - 1)}
          disabled={currentPageIndex === 1}
        >
          Back
        </button>
        <button
          onClick={() => setPage(currentPageIndex + 1)}
          disabled={currentPageIndex === Math.ceil(totalPages)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
