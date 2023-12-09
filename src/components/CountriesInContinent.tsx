import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { usePagination } from '../hooks/usePagination';
import { Country, useGetCountriesByIdQuery } from '../__generated__/operations';

export const Countries = () => {
  const { continentId } = useParams();
  const location = useLocation();
  const [countries, setCountries] = useState<Country[]>([]);
  const { endPageIndex, startPageIndex, setPage, currentPageIndex, totalPages } = usePagination(
    12,
    countries?.length,
  );
  console.log(location.state?.countries);

  const { data, loading, error, refetch } = useGetCountriesByIdQuery({
    variables: {
      code: continentId ?? '',
    },
  });

  const handleRefetchCountries = () => {
    (async () => {
      await refetch({ code: continentId });
    })();
  };

  useEffect(() => {
    console.log({ countriesById: data?.continent?.countries });
    if (data) {
      setCountries(data?.continent?.countries as Country[]);
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
      Countinent : {continentId}
      <button onClick={handleRefetchCountries}>Refetch Countries</button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}
      >
        {countries &&
          countries.slice(startPageIndex, endPageIndex).map(country => (
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
