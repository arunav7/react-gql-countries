import ClearIcon from '@mui/icons-material/Clear';
import { Button, IconButton, Input, InputAdornment, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { getCountryCodeByName } from '../utils';

export const NavBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const code = getCountryCodeByName(query);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchCode = searchParams.get('code') || '';

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuery(e.target.value);
    setSearchParams({ code: e.target.value });
  };

  const handleReset = () => {
    setQuery('');
    setSearchParams({ code: '' });
  };

  return (
    <div className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'active' : 'link')}
      >
        <Typography variant='h4'>Continents</Typography>
      </NavLink>
      <NavLink
        to='/all-countries'
        className={({ isActive }) => (isActive ? 'active' : 'link')}
      >
        <Typography variant='h4'>Countries</Typography>
      </NavLink>
      <NavLink
        to='/all-languages'
        className={({ isActive }) => (isActive ? 'active' : 'link')}
      >
        <Typography variant='h4'>Language</Typography>
      </NavLink>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.2rem' }}>
        <Input
          onChange={e => handleSearch(e)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              navigate(`/country/${code.toUpperCase()}?code=${searchCode}`);
            }
          }}
          value={query}
          placeholder='Search Country(code)'
          endAdornment={
            code && (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='clear input'
                  onClick={handleReset}
                  edge='end'
                  size='small'
                >
                  <ClearIcon fontSize='small' />
                </IconButton>
              </InputAdornment>
            )
          }
        />
        <Button
          onClick={() => navigate(`/country/${code.toUpperCase()}?code=${searchCode}`)}
          disabled={!code}
        >
          <Typography variant='button'>Search</Typography>
        </Button>
      </div>
    </div>
  );
};
