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
    <Grid container columns={10}>
      <Grid item sm={8}>
        <Paper
          sx={{
            bgcolor: '#e7e7e7',
            margin: '5px',
            padding: '10px',
            height: '5vh',
            textAlign: 'center'
          }}
        >
          <Typography variant="h3">
            January 2022
          </Typography>
        </Paper>
        <CalendarGrid
          startDate={startDate}
          itineraryData={itineraryData}
        />
      </Grid>
      <Grid item sm={2}>
        <Sidebar />
      </Grid>
    </Grid>
  )
}

export default Calendar