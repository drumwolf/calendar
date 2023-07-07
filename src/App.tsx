import { useState } from 'react'
import Calendar from './components/Calendar'
import { SelectedDateContext } from './contexts/SelectedDateContext'
import { StartDateContext } from './contexts/StartDateContext'
import { getHashDate } from './utils/date'

const App = () => {
  const [startDate, setStartDate] = useState<Date>(getHashDate())
  const [selectedDate, setSelectedDate] = useState<Date>(getHashDate())
  const startDateProviderValue = { startDate, setStartDate }
  const selectedDateProviderValue = { selectedDate, setSelectedDate }
  return (
    <StartDateContext.Provider value={startDateProviderValue}>
      <SelectedDateContext.Provider value={selectedDateProviderValue}>
        <Calendar />
      </SelectedDateContext.Provider>
    </StartDateContext.Provider>
  );
}

export default App;
