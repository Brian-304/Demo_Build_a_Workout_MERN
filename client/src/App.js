import './App.css';
import Main from './components/Main';
import Endurance from './components/Endurance';
import Strength from './components/Strength';
import Balance from './components/Balance';
import Flexibility from './components/Flexibility';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<Link to={"/endurace"} element={<Link />} />
<Link to={"/strength"} element={<Link />} />
<Link to={"/balance"} element={<Link />} />
<Link to={"/flexibility"} element={<Link />} />

      
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/endurance" element={<Endurance/>}/>
      <Route path="/strength" element={<Strength/>}/>
      <Route path="/balance" element={<Balance/>}/>
      <Route path="/flexibility" element={<Flexibility/>}/>
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
