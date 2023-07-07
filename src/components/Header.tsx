import { Button, Paper, Typography } from '@mui/material'
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined'
import { StartDateContext } from '../contexts/StartDateContext'
import { useContext } from 'react'

const lastWeekDate = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7)
const nextWeekDate = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7)

const Header = () => {
  const { startDate, setStartDate } = useContext(StartDateContext)
  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: '#e7e7e7',
        padding: '10px',
        height: '5vh',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Button
        variant="contained"
        onClick={() => setStartDate(lastWeekDate(startDate))}
        sx={{ transform: 'scaleX(-1)' }}
      >
        <DoubleArrowOutlinedIcon />
      </Button>
      <Typography variant="h4">
        January 2022
      </Typography>
      <Button
        variant="contained"
        onClick={() => setStartDate(nextWeekDate(startDate))}
      >
        <DoubleArrowOutlinedIcon />
      </Button>
    </Paper>
  )
}

export default Header