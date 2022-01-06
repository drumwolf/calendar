import type { itineraryType } from '../components/Calendar'

export const formatGSXData = (data: string[][]): itineraryType => {
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