import { useReactiveVar } from '@apollo/client';
import { useTransition } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Country, useGetCountriesByIdSuspenseQuery } from '../__generated__/operations';
import { usePagination } from '../hooks/usePagination';
import { isAsianVar } from '../main';

export const Countries = () => {
  const { continentId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data, refetch } = useGetCountriesByIdSuspenseQuery({
    variables: {
      code: continentId ?? '',
    },
    fetchPolicy: 'cache-and-network',
    returnPartialData: true,
  });
  const countries = data?.continent?.countries as Country[];
  const { endPageIndex, startPageIndex, setPage, totalPages } = usePagination(12, countries.length);
  console.log(location.state?.countries);

  const code = useReactiveVar(isAsianVar);

  const [isPending, startTransistion] = useTransition();

  const handleRefetchCountries = () => {
    startTransistion(() => {
      void refetch({ code: continentId });
    });
  };

  // useEffect(() => {
  //   const currentCode = countryCodeVar();
  //   const indiaCode = countries?.find(country => country.code === 'IN')?.code as string;
  //   countryCodeVar([...currentCode, indiaCode]);
  // }, [countries]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      Continent : {continentId} {code}
      <button
        onClick={handleRefetchCountries}
        // disabled={!!isPending}          // not required as redundant network request will be aborted by apollo
      >
        Refetch Countries
      </button>
      {/* {isPending && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.08) 37%, rgba(0,0,0,0.04) 63%)',
            backgroundSize: '400% 100%',
            animation: 'shimmer 1.2s ease-in-out infinite',
          }}
        />
      )} */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          opacity: isPending ? 0.2 : 1,
          transition: 'opacity 120ms',
          marginTop: '0.5rem',
        }}
      >
        {countries &&
          countries.slice(startPageIndex, endPageIndex).map(country => (
            <div
              className='countries'
              key={country?.code}
              onClick={() => navigate(`/country/${country?.code}`)}
            >
              <p>{country.name}</p>
              <span>{country.code}</span>
              <p>Currency: {country.currency}</p>
              {/* {console.log({ isIndian: country.isAsian })} */}
              {/* <p>isIndian: {country.isAsian ? 'Yes' : 'No'}</p> */}
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
