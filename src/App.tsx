import { ChakraProvider } from '@chakra-ui/react'
import Calendar from './components/Calendar'

const App = () => {
  return (
    <ChakraProvider>
      <Calendar />
    </ChakraProvider>
  );
}

export default App;
