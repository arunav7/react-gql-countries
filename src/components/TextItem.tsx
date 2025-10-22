import { Box, Typography } from '@mui/material';

export const TextItem = ({ textKey, value }: { textKey: string; value: string }) => {
  return (
    <Box sx={{ display: 'flex', m: 2, gap: '0.5rem', justifyContent: 'center' }}>
      <Typography
        variant='h4'
        fontWeight='bold'
        color='blueviolet'
        gutterBottom
      >
        {textKey}:
      </Typography>
      <Typography variant='h4'>{value}</Typography>
    </Box>
  );
};
