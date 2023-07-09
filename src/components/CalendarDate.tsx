import { Paper, Typography } from '@mui/material'
import { SelectedDateContext } from '../contexts'
import { datesAreEqual, isToday } from '../utils'
import { useContext } from 'react'

interface CalendarDateProps {
  date: Date
  itinerary: string[]
  month: Date | Date[] | undefined
}

const CalendarDate: React.FC<CalendarDateProps> = ({ date, itinerary, month }) => {
  const { selectedDate, setSelectedDate } = useContext(SelectedDateContext)
  const keys: { [key: string]: number } = {}
  const dateNumber = date.getDate()
  const isSelectedDate = datesAreEqual(selectedDate, date)
  let isThisMonth: boolean = false
  if (month && !Array.isArray(month)) {
    isThisMonth = date.getMonth() === month.getMonth()
  }
  const bgcolor = isSelectedDate ? '#e7e7e7' : isToday(date) ? '#f7dddd' : isThisMonth ? '#f7f7f7' : "#e2e2e2"

  return <Paper
    onClick={() => setSelectedDate(date)}
    elevation={3}
    sx={{
      height: 'calc(100% - 20px)',
      bgcolor,
      padding: '10px',
      cursor: 'pointer'
    }}
  >
    <Typography variant="h5">
      {dateNumber}
    </Typography>
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