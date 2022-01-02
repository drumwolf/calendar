import { useState, useEffect } from 'react'
import { fetchAPI } from '../services/gsx'

type itineraryType = {
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

  const [gsxData, setGSXData] = useState<itineraryType>({})

  console.log(gsxData)
  useEffect(() => {
    async function getAPI() {
      const rawData = await fetchAPI()
      const formattedData = formatGSXData(rawData)
      setGSXData(formattedData)
    }
    getAPI()
  }, [])

  return <div>Calendar</div>
}

export default Calendar