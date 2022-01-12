import type { itineraryType } from '../helpers/gsx'
import { getDateString, getNextSixWeeks } from '../helpers/date'
import CalendarDate from './CalendarDate'
import Grid from '@mui/material/Grid'

interface CalendarGridProps {
  startDate: Date
  itineraryData: itineraryType
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ startDate, itineraryData }) => {
  const weeks = getNextSixWeeks(startDate)
  return (
    <Grid container
      flexDirection='column'
      height='100%'
    >
    {
      weeks.map((week) => {
        const weekKey = `week-${getDateString(week[0])}`
        return (
          <Grid container item
            key={weekKey}
            flex='1'
            height='14.2%'
          >
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