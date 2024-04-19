import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Calendar from './pages/Calendar';
import Finder from './pages/Finder';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/finder" element={<Finder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
