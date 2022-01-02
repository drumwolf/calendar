import { useEffect } from 'react'
import { fetchAPI } from '../services/gsx'

const Calendar = () => {

  useEffect(() => {
    async function getAPI() {
      const data = await fetchAPI()
      console.log(data)
    }
    getAPI()
  }, [])

  return <div>Calendar</div>
}

export default Calendar