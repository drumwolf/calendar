import { Button, Paper, Typography } from '@mui/material'
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined'
import { StartDateContext } from '../contexts'
import { useContext } from 'react'
import type { monthType } from '../types'

type MonthType = monthType

interface HeaderProps {
  month: MonthType
  onClick: () => void
}

const lastWeekDate = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7)
const nextWeekDate = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7)

const getHeaderText = (month: MonthType) => {
  if (!month) return ''
  if (!Array.isArray(month)) {
    return month.toLocaleDateString('en-us', { month:'long', year:'numeric' })
  }
  if (Array.isArray(month)) {
    const month1 = month[0]?.toLocaleDateString('en-us', { month: 'short' })
    const month2 = month[1]?.toLocaleDateString('en-us', { month: 'short' })
    const year1 = month[0]?.toLocaleDateString('en-us', { year: 'numeric' })
    const year2 = month[1]?.toLocaleDateString('en-us', { year: 'numeric' })
    if (year1 !== year2) {
      return `${month1} ${year1} / ${month2} ${year2}`
    }
    return `${month1} / ${month2} ${year1}`
  }
  return ''
}

const Header = ({ month, onClick }: HeaderProps) => {
  const { startDate, setStartDate } = useContext(StartDateContext)

  return (
    <Paper
      elevation={3}
      onClick={onClick}
      sx={{
        bgcolor: '#663333',
        color: '#E7E7E7',
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