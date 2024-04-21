import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Expense } from "./Pages/Expense";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/expense' element={<Expense />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
