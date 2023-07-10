import { Box, Paper, Typography } from '@mui/material'
import { SelectedDateContext } from '../contexts'
import { datesAreEqual, isToday } from '../utils'
import type { monthType } from '../types'
import { ReactNode, useContext } from 'react'

interface CalendarDateProps {
  date: Date
  itinerary: string[]
  month: monthType
}

const DateBox = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      bgcolor: '#300',
      color: 'white',
      width: '40px',
      height: '40px',
      display: 'flex',
      borderRadius: '50%'
    }
  }>
    {children}
  </Box>
)

const CalendarDate: React.FC<CalendarDateProps> = ({ date, itinerary, month }) => {
  const { selectedDate, setSelectedDate } = useContext(SelectedDateContext)
  const keys: { [key: string]: number } = {}
  const dateNumber = date.getDate()
  const isSelectedDate = datesAreEqual(selectedDate, date)
  const isOddMonth = date.getMonth() % 2 === 1
  const bgcolor = isSelectedDate ? '#f7dddd' : isOddMonth ? '#F2F2F2' : "#E9E9E9"

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
      {isToday(date) ? (<DateBox>{dateNumber}</DateBox>) : <>{dateNumber}</>}
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