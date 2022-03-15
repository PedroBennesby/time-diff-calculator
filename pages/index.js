import { useState } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ptBR from 'date-fns/locale/pt-BR';

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const timeDifference = endDate.getTime() - startDate.getTime();

  const timeDifferenceFormatted = (value) => {
    let seconds = value / 1000;
    const hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = parseInt(seconds / 60);
    seconds = seconds % 60;

    return `${hours}h ${minutes}m`;
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '10px 20px',
      }}
    >
      <Typography variant='h2' gutterBottom component='div'>
        Diferença de tempo = {timeDifferenceFormatted(timeDifference)}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
        <DateTimePicker
          label='Data de início'
          value={startDate}
          ampm={false}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          renderInput={(props) => <TextField {...props} />}
        />

        <DateTimePicker
          label='Data de fim'
          value={endDate}
          ampm={false}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider>
    </Box>
  );
}
