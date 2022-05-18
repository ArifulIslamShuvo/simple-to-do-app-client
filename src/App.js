import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import RequireAuth from './pages/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            } />
        <Route path="/login" element={<Login />} />
    </Routes>
    </div >
  );
}

export default App;
