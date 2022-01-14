import { useState } from 'react'
import Calendar from './components/Calendar'
import { SelectedDateContext } from './contexts/SelectedDateContext'

const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const providerValue = { selectedDate, setSelectedDate }
  return (
    <SelectedDateContext.Provider value={providerValue}>
      <Calendar />
    </SelectedDateContext.Provider>
  );
}

export default App;
