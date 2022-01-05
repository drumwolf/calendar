import Paper from '@mui/material/Paper'

type CalendarDateProps = {
  date: Date
  itinerary: string[]
}

const CalendarDate: React.FC<CalendarDateProps> = ({ date, itinerary }) => {
  const keys: { [key: string]: number } = {}
  return <Paper
    sx={{
      height: 'calc(100% - 30px)',
      bgcolor: '#e7e7e7',
      margin: '5px',
      padding: '10px'
    }}
  >
    {date.getDate()}
    {itinerary && (<ul>
      {
        itinerary.map(item => {
          const key = item.split(' ').join('')
          keys[key] = ++keys[key] || 1
          return (<li key={key + keys[key]}>
            {item}
          </li>)
        })
      }
      </ul>
    )}
  </Paper>
}

export default CalendarDate