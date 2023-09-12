import { Box, Paper, Typography } from '@mui/material'
import { SelectedDateContext, ShowSidebarContext } from '../contexts'
import { datesAreEqual, getMonthLabel, isToday } from '../utils'
import type { monthType } from '../types'
import { ReactNode, ReactSVG, useContext } from 'react'

interface CalendarDateProps {
  date: Date
  itinerary: string[]
  month: monthType
}

interface DateBoxProps {
  dateNumber: number
  dateMonth: string
  isToday?: boolean
}

const DateBox: React.FC<DateBoxProps> = ({ dateNumber, dateMonth, isToday }) => {
  const defaultBoxStyle = {
    bgcolor: '#DDD',
    color: '#300',
    width: '30px',
    height: '30px',
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const isTodayBoxStyle = {
    ...defaultBoxStyle,
    bgcolor: '#300',
    color: 'white'
  }
  const boxStyle = isToday ? isTodayBoxStyle : defaultBoxStyle
  return (
    <Box sx={{ width: '30px', textAlign: 'center' }}>
      <Box sx={boxStyle}>
        <Typography variant="body1" sx={{ fontWeight: isToday ? 'bold' : null }}>{dateNumber}</Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: '#666', fontSize: '11px', textTransform: 'uppercase'
        }}
      >
        {dateMonth}
      </Typography>
    </Box>
  )
}
const CalendarDate: React.FC<CalendarDateProps> = ({ date, itinerary }) => {
  const { selectedDate, setSelectedDate } = useContext(SelectedDateContext)
  const { setSidebarVisibility } = useContext(ShowSidebarContext)
  const keys: { [key: string]: number } = {}
  const dateMonth = getMonthLabel(date)
  const dateNumber = date.getDate()
  const isSelectedDate = datesAreEqual(selectedDate, date)
  const isOddMonth = date.getMonth() % 2 === 1
  const bgcolor = isSelectedDate ? '#f7dddd' : isOddMonth ? '#F2F2F2' : "#E9E9E9"

  const onClick = () => {
    setSidebarVisibility(true)
    setSelectedDate(date)
  }

  return <Paper
    onClick={onClick}
    elevation={3}
    sx={{
      height: 'calc(100% - 20px)',
      bgcolor,
      padding: '10px',
      cursor: 'pointer'
    }}
  >
    <DateBox
      dateNumber={dateNumber}
      dateMonth={dateMonth}
      isToday={isToday(date)}
    />
    {itinerary && (<ul>
      {
        itinerary.map(item => {
          const key = item.split(' ').join('')
          keys[key] = ++keys[key] || 1
          return (<li key={key + keys[key]}>{item}</li>)
        })
      }
      </ul>
    )}
  </Paper>
}

export default CalendarDate