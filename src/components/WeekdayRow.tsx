import { Grid, Typography } from '@mui/material'
import TextLabel from './TextLabel'

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const WeekdayRow = () => {
  return (
    <Grid
      container
      item
      sx={{
        bgcolor: '#DDD',
        color: '#300',
        marginTop: '6px',
        paddingY: 1,
        border: 'solid 1px #CCC',
        borderRadius: 1
      }}
    >
    {
      DAYS_OF_WEEK.map((day) =>
        <Grid
          item
          flex='1'
          key={day}
          sx={{
              borderRight: 'solid 1px #CCC',
              color: '#300',
              textAlign: 'center'
          }}
        >
          <TextLabel>{day}</TextLabel>
        </Grid>
      )
    }
    </Grid>
  )
}

export default WeekdayRow