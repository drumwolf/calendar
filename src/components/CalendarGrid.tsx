import { getNextSixWeeks } from '../helpers/date'

type CalendarGridProps = { startDate: Date }

const printDate = (date: Date): string => date.toISOString().split('T')[0]

const CalendarGrid: React.FC<CalendarGridProps> = ({ startDate }) => {
  const dates = getNextSixWeeks(startDate)
  return (<ul>
    {
      dates.map(date => <li>{printDate(date)}</li>)
    }
  </ul>)
}

export default CalendarGrid