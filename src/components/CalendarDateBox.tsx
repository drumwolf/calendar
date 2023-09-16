import { Box, Typography } from '@mui/material'
import TextLabel from './TextLabel'

interface DateBoxProps {
  dateNumber: number
  dateMonth: string
  isToday?: boolean
}

const CalendarDateBox: React.FC<DateBoxProps> = ({ dateNumber, dateMonth, isToday }) => {
  const defaultBoxStyle = {
    bgcolor: '#DDD',
    color: '#300',
    width: '30px',
    height: '30px',
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const isTodayBoxStyle = {
    ...defaultBoxStyle,
    bgcolor: '#300',
    color: 'white'
  }
  const boxStyle = isToday ? isTodayBoxStyle : defaultBoxStyle
  return (
    <Box sx={{ width: '30px', textAlign: 'center' }}>
      <Box sx={boxStyle}>
        <Typography variant="body1" sx={{ fontWeight: isToday ? 'bold' : null }}>
          {dateNumber}
        </Typography>
      </Box>
      <TextLabel>
        {dateMonth}
      </TextLabel>
    </Box>
  )
}

export default CalendarDateBox