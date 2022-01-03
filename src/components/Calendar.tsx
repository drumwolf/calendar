import { useState, useEffect } from 'react'
import { fetchAPI } from '../services/gsx'
import CalendarGrid from './CalendarGrid'

export type itineraryType = {
  [key: string]: string[]
}

const formatGSXData = (data: string[][]): itineraryType => {
  const dataObj: itineraryType = {}
  let key = ''
  data.forEach(entry => {
    const [k, v] = entry
    key = (k !== '') ? k : key
    if (!dataObj[key]) {
      Object.assign(dataObj, { [key]: [v] })
    } else {
      dataObj[key].push(v)
    }
  })
  return dataObj
}

const Calendar = () => {

  const [itineraryData, setItineraryData] = useState<itineraryType>({})
  const [startDate, setStartDate] = useState<Date>(new Date())

  console.log(itineraryData)

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