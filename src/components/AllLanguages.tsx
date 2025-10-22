import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { useLanguageLazyQuery, useLanguagesSuspenseQuery } from '../__generated__/operations';
import { TextItem } from './TextItem';

export const AllLanguages = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const [lang, setLang] = useState('');
  const { data } = useLanguagesSuspenseQuery();
  const [fetchLanguage, { data: selectedLanguage, loading, error }] = useLanguageLazyQuery();
  const languageList = data.languages;
  console.log(location);

  const handleChange = async (e: SelectChangeEvent<string>) => {
    setLang(e.target.value);
    await fetchLanguage({
      variables: {
        code: e.target.value,
      },
    });
  };

  const list = [
    { key: 'Name', value: selectedLanguage?.language?.name ?? '' },
    { key: 'Native', value: selectedLanguage?.language?.native ?? '' },
    { key: 'Code', value: selectedLanguage?.language?.code ?? '' },
    { key: 'RTL', value: selectedLanguage?.language?.rtl.toString() ?? '' },
  ];

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     navigate('/', {
  //       state: {
  //         previousPath: location.pathname,
  //         message: 'Navigated back from Languages',
  //       },
  //     });
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, [navigate, location]);
  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 200, maxWidth: 350 }}
        size='small'
      >
        <InputLabel id='langauges-select-lablel'>Languages</InputLabel>
        <Select
          labelId='langauges-select-lablel'
          id='lang-select-small'
          value={lang}
          onChange={e => handleChange(e)}
          label='Languages'
        >
          {languageList.map(lang => (
            <MenuItem value={lang.code}>
              {lang.name}: {lang.native}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {!!loading && <p> Fetching Language Details</p>}
      {!!error && <p>{error.message}</p>}
      {!loading && !error && !!selectedLanguage?.language && (
        <div>
          {list.map(({ key, value }) => (
            <TextItem
              key={key}
              textKey={key}
              value={value}
            />
          ))}
        </div>
      )}
    </div>
  );
};
