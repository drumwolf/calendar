import { getNextSixWeeks } from '../helpers/date'
import { itineraryType } from './Calendar'

type CalendarGridProps = {
  startDate: Date
  itineraryData?: itineraryType
}

const getDateString = (date: Date): string => date.toISOString().split('T')[0]

const CalendarGrid: React.FC<CalendarGridProps> = ({ startDate, itineraryData }) => {
  const dates = getNextSixWeeks(startDate)
  return (<ul>
    {
      dates.map(date => {
        const dateString = getDateString(date)
        return (<li key={dateString}>
          <p>
            {dateString}
          </p>
        </li>)
      })
    }
  </ul>)
}

export default CalendarGrid