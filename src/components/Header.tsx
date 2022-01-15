import { Paper, Typography } from '@mui/material'

const Header = () => <Paper
  elevation={3}
  sx={{
    bgcolor: '#e7e7e7',
    padding: '10px',
    height: '5vh',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <Typography variant="h4">
    January 2022
  </Typography>
</Paper>

export default Header