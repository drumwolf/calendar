import { useState, useEffect, useContext } from 'react'
import { Box, Grid, useMediaQuery } from '@mui/material'
import type { itineraryType } from '../helpers/gsx'
import { formatGSXData } from '../helpers/gsx'
import { fetchAPI } from '../services/gsx'
import { SelectedDateContext, StartDateContext, ShowSidebarContext } from '../contexts'
import { getMonth } from '../utils'
import type { monthType } from '../types'
import CalendarGrid from './CalendarGrid'
import Header from './Header'
import Sidebar from './Sidebar'
import WeekdayRow from './WeekdayRow'

const BROWSER_WIDTH_BREAKPOINT = 1024
const SIDEBAR_WIDTH = 350

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState<monthType>()
  const [itineraryData, setItineraryData] = useState<itineraryType>({})
  const { startDate } = useContext(StartDateContext)
  const { selectedDate } = useContext(SelectedDateContext)
  const { showSidebar, setSidebarVisibility } = useContext(ShowSidebarContext)

  const isExpandedWidth = useMediaQuery(`(max-width:${BROWSER_WIDTH_BREAKPOINT}px)`)

  useEffect(() => {
    async function getAPI() {
      const rawData = await fetchAPI()
      const formattedData = formatGSXData(rawData)
      setItineraryData(formattedData)
    }
    getAPI()
  }, [])

  useEffect(() => {
    const month: monthType = getMonth(startDate)
    setCurrentMonth(month)
  }, [startDate])

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Grid container width='100%' flexDirection='column'>
        <Grid item width='100%'>
          <Header
            month={currentMonth}
            onClick={() => setSidebarVisibility(false)}
          />
        </Grid>
        <Grid item>
          <WeekdayRow />
        </Grid>
        <Grid item flex={1}>
          <CalendarGrid
            itineraryData={itineraryData}
            month={currentMonth}
          />
        </Grid>
      </Grid>
      <Sidebar
        date={selectedDate}
        isExpandedWidth={isExpandedWidth}
        itineraryData={itineraryData}
        setSidebarVisibility={setSidebarVisibility}
        showSidebar={showSidebar}
        width={SIDEBAR_WIDTH}
      />
    </Box>
  )
}

export default Calendar