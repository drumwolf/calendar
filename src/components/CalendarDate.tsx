import { isToday } from '../helpers/date'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { SelectedDateContext } from '../contexts/SelectedDateContext'
import { useContext } from 'react'

interface CalendarDateProps {
  date: Date
  itinerary: string[]
}

const CalendarDate: React.FC<CalendarDateProps> = ({ date, itinerary }) => {
  const keys: { [key: string]: number } = {}
  const dateNumber = date.getDate()
  const bgcolor = isToday(date) ? '#e7e7e7' : '#f7f7f7'
  const { setSelectedDate } = useContext(SelectedDateContext)

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