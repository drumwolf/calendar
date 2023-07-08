import { Button, Paper, Typography } from '@mui/material'
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined'
import { StartDateContext } from '../contexts'
import { useContext } from 'react'

type MonthType = Date | Date[] | undefined

interface HeaderProps {
  month: MonthType
}

const lastWeekDate = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7)
const nextWeekDate = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7)

const getHeaderText = (month: MonthType) => {
  if (!month) return ''
  if (!Array.isArray(month)) {
    return month.toLocaleDateString('en-us', { month:'long', year:'numeric' })
  }
  if (Array.isArray(month)) {
    return `${ month[0]?.toLocaleDateString('en-us', { month:'long' }) } / ${ month[1]?.toLocaleDateString('en-us', { month:'long' }) }`
  }
  return ''
}

const Header = ({ month }: HeaderProps) => {


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
        {getHeaderText(month)}
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