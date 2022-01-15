import { useState, useEffect, useContext } from 'react'
import { Grid } from '@mui/material'
import type { itineraryType } from '../helpers/gsx'
import { formatGSXData } from '../helpers/gsx'
import { fetchAPI } from '../services/gsx'
import { SelectedDateContext } from '../contexts/SelectedDateContext'
import CalendarGrid from './CalendarGrid'
import Header from './Header'
import Sidebar from './Sidebar'

const Calendar = () => {

  const [itineraryData, setItineraryData] = useState<itineraryType>({})
  const { selectedDate } = useContext(SelectedDateContext)

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
          <Header />
        </Grid>
        <Grid item flex={1}>
          <CalendarGrid itineraryData={itineraryData} />
        </Grid>
      </Grid>
      <Grid item sm={2}>
        <Sidebar
          date={selectedDate}
          itineraryData={itineraryData}
        />
      </Grid>
    </Grid>
  )
}

export default Calendar