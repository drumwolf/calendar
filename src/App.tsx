import { useState } from 'react'
import Calendar from './components/Calendar'
import { SelectedDateContext } from './contexts/SelectedDateContext'

const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const initialValue = { selectedDate }
  return (
    <SelectedDateContext.Provider value={initialValue}>
      <Calendar />
    </SelectedDateContext.Provider>
  );
}

export default App;
