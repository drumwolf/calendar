import { Grid } from '@chakra-ui/react'
import { getNextSixWeeks } from '../helpers/date'
import type { itineraryType } from './Calendar'
import CalendarDate from './CalendarDate'

type CalendarGridProps = {
  startDate: Date
  itineraryData: itineraryType
}

const getDateString = (date: Date): string => date.toISOString().split('T')[0]

const CalendarGrid: React.FC<CalendarGridProps> = ({ startDate, itineraryData }) => {
  const dates = getNextSixWeeks(startDate)
  return (
    <Grid
      templateColumns='repeat(7, 1fr)'
      templateRows='repeat(6, 1fr)'
      gap={2}
      m={2}
      height='98vh'
    >
    {
      dates.map(date => {
        const dateString = getDateString(date)
        return <CalendarDate key={dateString} date={date} itinerary={itineraryData[dateString]} />
      })
    }
    </Grid>
  )
}

export default CalendarGrid