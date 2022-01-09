import type { itineraryType } from '../helpers/gsx'
import { getDateFormatted, getDateString } from '../helpers/date'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface SidebarProps {
  date: Date
  itineraryData: itineraryType
}

const Sidebar: React.FC<SidebarProps> = ({ date, itineraryData }) => {
  const itinerary = itineraryData[getDateString(date)]
  return (
    <Paper
      elevation={3}
      sx={{
        height: 'calc(100% - 20px)',
        bgcolor: '#e7e7e7',
        padding: '10px'
      }}
    >
      <Typography variant="h6">
        {getDateFormatted(date)}
      </Typography>
      {
        itinerary && <ul>
          {
            itinerary.map(item => <li>{item}</li>)
          }
        </ul>
      }
    </Paper>
  )
}

export default Sidebar