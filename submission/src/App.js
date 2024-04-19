import { Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Calendar from './pages/Calendar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Homepage />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
