import type { itineraryType } from '../helpers/gsx'
import { getDateFormatted, getDateString } from '../utils'
import { List, ListItem, Paper, Typography } from '@mui/material'

interface SidebarProps {
  date: Date
  isExpandedWidth: boolean
  itineraryData: itineraryType
  setSidebarVisibility: any
  showSidebar: boolean
  width: number
}

const Sidebar: React.FC<SidebarProps> = ({
  date,
  isExpandedWidth,
  itineraryData,
  setSidebarVisibility,
  showSidebar,
  width
}) => {

  const itinerary = itineraryData[getDateString(date)]
  const baseStyle = {
    width: `${width}px`,
    height: 'calc(100% - 20px)',
    bgcolor: '#e7e7e7',
    padding: '10px',
    transition: '0.5s'
  }
  const wideStyle = {
    position: 'absolute',
    right: showSidebar ? 0 : '-400px',
    ...baseStyle
  }
  const sidebarStyle = isExpandedWidth ? wideStyle : baseStyle

  return (
    <Paper
      elevation={3}
      onClick={() => setSidebarVisibility(false)}
      sx={sidebarStyle}
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