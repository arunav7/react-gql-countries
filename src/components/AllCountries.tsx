import { useNavigate } from 'react-router-dom';

import { useGetAllCountriesSuspenseQuery } from '../__generated__/operations';
import { usePagination } from '../hooks/usePagination';

export const AllCountries = () => {
  const navigate = useNavigate();
  const { data } = useGetAllCountriesSuspenseQuery();
  const countries = data.countries;
  const { endPageIndex, startPageIndex, setPage, totalPages } = usePagination(12, countries.length);

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
            onClick={() => navigate(`/country/${country?.code}`)}
          >
            <p>{country.name}</p>
            <span>{country.code}</span>
            <p>Currency: {country.currency}</p>
            {/* <p>isIndian: {country.isAsian}</p> */}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flex: 1, flexWrap: 'wrap' }}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
          <button
            key={page}
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
};
