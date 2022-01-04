import { Grid, GridItem } from '@chakra-ui/react'
import { getNextSixWeeks } from '../helpers/date'
import { itineraryType } from './Calendar'

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
        const itineraryItem = itineraryData[dateString]
        const keys: { [key: string]: number } = {}
        return (
          <GridItem
            key={dateString}
            w='100%'
            bg='gray.200'
          >
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
          </GridItem>
        )
      })
    }
    </Grid>
  )
}

export default CalendarGrid