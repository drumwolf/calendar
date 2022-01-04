import { Box, GridItem, ListItem, List } from '@chakra-ui/react'

type CalendarDateProps = {
  date: Date
  itinerary: string[]
}

const CalendarDate:React.FC<CalendarDateProps> = ({ date, itinerary }) => {
  const keys: { [key: string]: number } = {}
  return <GridItem
      w='100%'
      bg='gray.200'
    >
      <Box
        m={2}
        bgColor='red.600'
        borderRadius='50%'
        color='white'
        display='inline-block'
        textAlign='center'
        lineHeight='8'
        w='8'
        h='8'
      >
        {date.getDate()}
      </Box>
      {itinerary && <List ml={2}>
      {
        itinerary.map((item, index)=> {
          keys[item] = ++keys[item] || 1
          const key = item.replace(' ','') + keys[item]
          return <ListItem key={key}>{item}</ListItem>
        })
      }
      </List>}
  </GridItem>
}

export default CalendarDate