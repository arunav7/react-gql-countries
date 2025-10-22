import { Typography } from '@mui/material';
import { useParams, useSearchParams } from 'react-router-dom';
import { useCountrySuspenseQuery } from '../__generated__/operations';
import { TextItem } from './TextItem';

function Country() {
  const { code = '' } = useParams();
  const [searchParams] = useSearchParams();
  const searchCode = searchParams.get('code') || '';
  const { data } = useCountrySuspenseQuery({
    variables: { code },
    fetchPolicy: 'cache-and-network',
    returnPartialData: true,
    errorPolicy: 'none',
  });

  console.log('Param , data', { code, data });

  if (!data?.country) {
    return (
      <Typography
        variant='h2'
        gutterBottom
        color='darkred'
        fontWeight='bold'
      >{`Ooopsss....No Country Exisit with the name ${searchCode}. Try Searching again with proper name`}</Typography>
    );
  }

  const countryDataList = [
    { key: 'Name', value: data.country?.name ?? '' },
    { key: 'Flag', value: data.country?.emoji ?? '' },
    { key: 'Total States', value: data.country?.states.length.toString() ?? '0' },
    { key: 'Native', value: data.country?.native ?? '' },
    { key: 'ISD Code', value: `+${data.country?.phone ?? ''}` },
    { key: 'Currency', value: data.country?.currency ?? '' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }}
    >
      {countryDataList.map(c => (
        <TextItem
          key={c.key}
          textKey={c.key}
          value={c.value}
        />
      ))}
    </div>
  );
}

export default Country;
