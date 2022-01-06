import { useState, useEffect } from 'react'
import { fetchAPI } from '../services/gsx'
import { formatGSXData } from '../helpers/gsx'
import CalendarGrid from './CalendarGrid'

export type itineraryType = {
  [key: string]: string[]
}

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