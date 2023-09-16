import { Paper } from '@mui/material'
import { SelectedDateContext, ShowSidebarContext } from '../contexts'
import { datesAreEqual, getMonthLabel, isToday } from '../utils'
import type { monthType } from '../types'
import { useContext } from 'react'
import CalendarDateBox from './CalendarDateBox'

interface CalendarDateProps {
  date: Date
  itinerary: string[]
  month: monthType
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
    <CalendarDateBox
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