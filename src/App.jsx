import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeatherForecast from './pages/WeatherForecast';
import DetailsWeather from './pages/DetailsWeather';
import Header from './components/Header'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<WeatherForecast />} />
          <Route exact path="/details/:id" element={<DetailsWeather />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
