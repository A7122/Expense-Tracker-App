
import Index from "./Components/Index.jsx";
import { TransactionProvider } from './Components/TransactionContext.jsx'

function App(){
    return(
        <TransactionProvider>
        <Index />
        </TransactionProvider>
    )
}
export default App
