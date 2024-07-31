import React from 'react'
import './Weather.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
// import cloud_icon from '../Assets/cloud.png'
// import drizzle_icon from '../Assets/drizzle.png'
// import rain_icon from '../Assets/ rain.png'
// import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'

function Weather() {
  return (
    <div className='weather'>
<div className='search-bar'>
<input type='text' placeholder='search' />
<img src={search_icon} alt=''/>
</div>
<img src={clear_icon} className='Weather-icon'/>
<p className='temperature'>16°</p>
<p className='location'>London</p>
<div className='wearther-data'>
  <div className='col'>
    <img src={humidity_icon} />
  </div>
  <p>91 %</p>
  <span>Humidity</span>
 </div>

<div className='col'>
    <img src={wind_icon} />
  </div>
  <p>3.6 Km/h</p>
  <span>Wind Speed</span>
</div>

  )
}

export default Weather
