import { isToday } from '../helpers/date'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface CalendarDateProps {
  date: Date
  itinerary: string[]
}

const CalendarDate: React.FC<CalendarDateProps> = ({ date, itinerary }) => {
  const keys: { [key: string]: number } = {}
  const dateNumber = date.getDate()
  const bgcolor = isToday(date) ? '#e7e7e7' : '#f7f7f7'

  return <Paper
    sx={{
      height: 'calc(100% - 30px)',
      bgcolor,
      margin: '5px',
      padding: '10px'
    }}
  >
    <Typography variant="h4">
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