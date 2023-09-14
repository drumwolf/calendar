import { useState, useEffect, useContext } from 'react'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import type { itineraryType } from '../helpers/gsx'
import { formatGSXData } from '../helpers/gsx'
import { fetchAPI } from '../services/gsx'
import { SelectedDateContext, StartDateContext, ShowSidebarContext } from '../contexts'
import { getMonth } from '../utils'
import type { monthType } from '../types'
import CalendarGrid from './CalendarGrid'
import Header from './Header'
import Sidebar from './Sidebar'

const BROWSER_WIDTH_BREAKPOINT = 1024
const SIDEBAR_WIDTH = 350
const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

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
      <Grid container width='100%'
        flexDirection='column'
        spacing={1}
      >
        <Grid item width='100%'>
          <Header
            month={currentMonth}
            onClick={() => setSidebarVisibility(false)}
          />
          <Grid
            container
            item
            sx={{
              bgcolor: '#DDD',
              color: '#300',
              marginTop: 1,
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
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666', fontSize: '11px', textTransform: 'uppercase'
                  }}
                >
                  {day}
                </Typography>
              </Grid>
            )
          }
          </Grid>
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