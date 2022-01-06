import type { itineraryType } from '../helpers/gsx'
import { getNextSixWeeks } from '../helpers/date'
import CalendarDate from './CalendarDate'
import Grid from '@mui/material/Grid'

interface CalendarGridProps {
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
        return (
          <Grid container item flex='1' key={weekKey}>
          {
            week.map(date => {
              const dateStr = getDateString(date)
              return (
                <Grid item key={dateStr} flex='1'>
                  <CalendarDate
                    date={date}
                    itinerary={itineraryData[dateStr]}
                  />
                </Grid>
              )
            })
          }
          </Grid>
        )
      })
    }
    </Grid>
  )
}

export default CalendarGrid