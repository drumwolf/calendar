import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import type { itineraryType } from '../helpers/gsx'
import { formatGSXData } from '../helpers/gsx'
import { fetchAPI } from '../services/gsx'
import CalendarGrid from './CalendarGrid'
import Sidebar from './Sidebar'
import { Paper, Typography } from '@mui/material'

const Calendar = () => {

  const [itineraryData, setItineraryData] = useState<itineraryType>({})
  const [startDate, setStartDate] = useState<Date>(new Date())

  useEffect(() => {
    async function getAPI() {
      const rawData = await fetchAPI()
      const formattedData = formatGSXData(rawData)
      setItineraryData(formattedData)
    }
    getAPI()
  }, [])

  return (
    <Grid container
      columns={10}
      height='100vh'
      padding={1}
      spacing={1}
    >
      <Grid container item
        sm={8}
        flexDirection='column'
        spacing={1}
        >
        <Grid item width='100%'>
          <Paper
            elevation={3}
            sx={{
              bgcolor: '#e7e7e7',
              padding: '10px',
              height: '5vh',
              textAlign: 'center'
            }}
          >
            <Typography variant="h4">
              January 2022
            </Typography>
          </Paper>
        </Grid>
        <Grid item flex={1}>
          <CalendarGrid
            startDate={startDate}
            itineraryData={itineraryData}
          />
        </Grid>
      </Grid>
      <Grid item sm={2}>
        <Sidebar />
      </Grid>
    </Grid>
  )
}

export default Calendar