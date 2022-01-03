import { getNextSixWeeks } from '../helpers/date'

type CalendarGridProps = { startDate: Date }

const CalendarGrid: React.FC<CalendarGridProps> = ({ startDate }) => {
  const dates = getNextSixWeeks(startDate)
  console.log('DATEZ::::', dates)
  return <ul></ul>
}

export default CalendarGrid