import { getNextSixWeeks } from '../helpers/date'
import { itineraryType } from './Calendar'

type CalendarGridProps = {
  startDate: Date
  itineraryData: itineraryType
}

const getDateString = (date: Date): string => date.toISOString().split('T')[0]

const CalendarGrid: React.FC<CalendarGridProps> = ({ startDate, itineraryData }) => {
  const dates = getNextSixWeeks(startDate)
  return (<ul>
    {
      dates.map(date => {
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
  </ul>)
}

export default CalendarGrid