import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Sidebar = () => (
  <Paper
    elevation={3}
    sx={{
      height: 'calc(100% - 20px)',
      bgcolor: '#e7e7e7',
      padding: '10px'
    }}
  >
    <Typography variant="h5">
      30 August 2022
    </Typography>
  </Paper>
)

export default Sidebar