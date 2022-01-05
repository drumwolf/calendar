import { getNextSixWeeks } from '../helpers/date'
import type { itineraryType } from './Calendar'
import Grid from '@mui/material/Grid'

type CalendarGridProps = {
  startDate: Date
  itineraryData: itineraryType
}

const getDateString = (date: Date): string => date.toISOString().split('T')[0]

const CalendarGrid: React.FC<CalendarGridProps> = ({ startDate, itineraryData }) => {
  const weeks = getNextSixWeeks(startDate)
  return (
    <Grid container
      flexDirection='column'
      height='100vh'
    >
    {
      weeks.map((week) => {
        const weekKey = `week-${getDateString(week[0])}`
        return <Grid container item flex='1' key={weekKey}>
        {
          week.map(day => <Grid item flex='1'>{getDateString(day)}</Grid>)
        }
        </Grid>
      })
    }
    </Grid>
    /* {
      weeks.map(date => {
        const dateString = getDateString(date)
        const itineraryItem = itineraryData[dateString]
        const keys: { [key: string]: number } = {}
        return (<li key={dateString}>
          <p>{dateString}</p>
          {
            itineraryItem && <ul>
            {
              itineraryItem.map((item, index)=> {
                keys[item] = ++keys[item] || 1
                const key = item.replace(' ','') + keys[item]
                return <li key={key}>{item}</li>
              })
            }
            </ul>
          }
        </li>)
      })
    }
  */
  )
}

export default CalendarGrid