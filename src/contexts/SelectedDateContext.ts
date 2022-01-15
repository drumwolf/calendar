import React from 'react'

type ContextProps = {
  selectedDate: Date
  setSelectedDate: any
}

export const SelectedDateContext = React.createContext<ContextProps>({ selectedDate: new Date(), setSelectedDate: () => {} })