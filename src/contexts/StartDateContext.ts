import React from 'react'
import { getLastSunday } from '../helpers/date'

type ContextProps = {
  startDate: Date
  setStartDate: any
}

const startDate = getLastSunday(new Date())
export const StartDateContext = React.createContext<ContextProps>({ startDate, setStartDate: () => {} })