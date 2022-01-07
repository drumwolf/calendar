import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Sidebar = () => (
  <Paper
    sx={{
      height: 'calc(100% - 30px)',
      bgcolor: '#e7e7e7',
      margin: '5px',
      padding: '10px'
    }}
  >
    <Typography variant="h5">
      30 August 2022
    </Typography>
  </Paper>
)

export default Sidebar