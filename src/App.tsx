import { useState } from 'react'
import { Calendar } from './components'
import { SelectedDateContext, StartDateContext, ShowSidebarContext } from './contexts'
import { getHashDate, getLastSunday } from './utils'

const App = () => {
  const [startDate, setStartDate] = useState<Date>(getHashDate())
  const [selectedDate, setSelectedDate] = useState<Date>(getLastSunday(getHashDate()))
  const [showSidebar, setSidebarVisibility] = useState<boolean>(false)

  const startDateProviderValue = { startDate, setStartDate }
  const selectedDateProviderValue = { selectedDate, setSelectedDate }
  const showSidebarProviderValue = { showSidebar, setSidebarVisibility }

  return (
    <StartDateContext.Provider value={startDateProviderValue}>
      <SelectedDateContext.Provider value={selectedDateProviderValue}>
        <ShowSidebarContext.Provider value={showSidebarProviderValue}>
          <Calendar />
        </ShowSidebarContext.Provider>
      </SelectedDateContext.Provider>
    </StartDateContext.Provider>
  );
}

export default App
