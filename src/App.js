// React imports
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

// Component imports
import LandingPage from './components/LandingPage/LandingPage.js'

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/uga-scs' element={<LandingPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;