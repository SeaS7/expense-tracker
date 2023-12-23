import './App.css';
import expenses from './components/dummyexpenses';
import Expenses from './components/Expenses';
function App() {
  return (
    <Expenses expenses={expenses}></Expenses>
  );
}

export default App;
