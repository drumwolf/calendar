import type { itineraryType } from '../helpers/gsx'
import { getDateFormatted, getDateString } from '../utils'
import { List, ListItem, Paper, Typography } from '@mui/material'

interface SidebarProps {
  date: Date
  itineraryData: itineraryType
  width: number
}

const Sidebar: React.FC<SidebarProps> = ({ date, itineraryData, width }) => {
  const itinerary = itineraryData[getDateString(date)]
  return (
    <Paper
      elevation={3}
      sx={{
        width: `${width}px`,
        height: 'calc(100% - 20px)',
        bgcolor: '#e7e7e7',
        padding: '10px'
      }}
    >
      <Typography variant="h6">
        {getDateFormatted(date)}
      </Typography>
      {
        itinerary && <List dense>
          {
            itinerary.map(item => <ListItem>{item}</ListItem>)
          }
        </List>
      }
    </Paper>
  )
}

export default Sidebar