import axios from 'axios'

const gsxID = '1d9BnXOfxtv65dAbfbeNvVEpyqYmgMDRKkiC-o5k-T1M'
const key = 'AIzaSyAb8lPxueqZdft_oQRDxmgTQKBjzrezFE8'
const url = `https://sheets.googleapis.com/v4/spreadsheets/${gsxID}/values/itinerary?key=${key}`

export const fetchAPI = async () => {
  const apiData = await axios.get(url)
  return apiData.data.values
}
