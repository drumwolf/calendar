import { useState, useEffect } from 'react'
import { fetchAPI } from '../services/gsx'
import type { itineraryType } from '../helpers/gsx'
import { formatGSXData } from '../helpers/gsx'
import CalendarGrid from './CalendarGrid'

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

  return (<div>
    <CalendarGrid
      startDate={startDate}
      itineraryData={itineraryData}
    />
  </div>)
}

export default Calendar