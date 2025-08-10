import Index from "./Components/Index";
import { TransactionProvider } from './Components/Context/TransactionContext'


function App() {

  return (
    <TransactionProvider>
      <Index/>
    </TransactionProvider>
  )
}

export default App
