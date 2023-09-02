
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import { logDOM } from "@testing-library/react";

const App = () => {

  const [area, setArea] = useState('')
  const [weatherDetail, setWeatherDetail] = useState()
  const API_KEY = "ce2c2432d17a19caa45b083a83e8fc6a";


  function fetchData(e){
      e.preventDefault();
    console.log(e);

    if(area !== ''){
    
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${API_KEY}`)
      .then((res)=>res.json())
      .then((res)=>setWeatherDetail(res))
      .catch((err)=>console.log(err))

    }

    setArea('')

  }


  console.log(weatherDetail)

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="weatherApp">
            <form onSubmit={fetchData}>
              <input type="text" className="search" value={area} placeholder="Enter a city"
              onChange={(e)=>setArea(e.target.value)} />
            </form>

          <div className="weather">
              {
                weatherDetail && <div> 
                  <h1>{weatherDetail.name}</h1>
                  <h1>{weatherDetail.main.temp}</h1>
                  <p>{weatherDetail.weather[0].description}</p>
                  <img src={`https://openweathermap.org/img/wn/${weatherDetail.weather[0].icon}.png`} />
                </div>

              }
          </div>
        </div>
    </div>
  )
}

export default App;