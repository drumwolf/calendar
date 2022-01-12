import React from 'react'

type ContextProps = {
  selectedDate: Date
}

export const SelectedDateContext = React.createContext<ContextProps>({ selectedDate: new Date() })