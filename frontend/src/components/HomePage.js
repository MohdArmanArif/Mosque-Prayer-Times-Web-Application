import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import dclogo from './dc.png';
import usePrayerTimes from '../functions/usePrayerTimes';
function HomePage({ prayerTimes, changedprayer }) {

  const { blinkFajr,
    darkenFajr,
    blinkZuhr,
    darkenZuhr,
    blinkAsr,
    darkenAsr,
    blinkMaghrib,
    darkenMaghrib,
    blinkIsha,
    darkenIsha,
    message,
    countdown} = usePrayerTimes(prayerTimes);
 
 const [showJummah, setShowJummah] = useState(true);
 let time  = new Date().toLocaleTimeString()

//  const [ctime,setTime] = useState(time)
//  const UpdateTime=()=>{
//    time =  new Date().toLocaleTimeString()
//    setTime(time)
//  }
 //setInterval(UpdateTime)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowJummah(prevShowJummah => !prevShowJummah);
    }, 10000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`home-page`}>
   
      <div className="container">
      <div class="image">
        <img src={dclogo}></img>
        {/* <div className="clock">
        {ctime} </div> */}
      </div>
      </div>
      {message && <p className="message blinktext">{message}</p>}
      <table id="prayerTimesTable"  >
    <thead>
      <tr>
        <th>Prayers</th>
        <th>Jama'ah Times</th>
        <th>From {new Date(changedprayer.date+"T00:00:00-05:00").toLocaleString('default', { month: 'long' })} {new Date(changedprayer.date+"T00:00:00-05:00").getDate() }</th> 
      </tr>
    </thead>
    <tbody>

      <tr>
        <td id = "prayerName">Fajr</td>
        <td className={`${blinkFajr ? 'blink' : ''} ${darkenFajr ? 'darken' : ''}`}>{prayerTimes.Fajr} am</td>
        <td>{changedprayer.Fajr} am</td>
      </tr>

      <tr>
      <td id = "prayerName">Dhuhr</td>
        <td className={`${blinkZuhr ? 'blink' : ''} ${darkenZuhr ? 'darken' : ''}`}>{prayerTimes.Zuhr} pm</td>
        <td>{changedprayer.Zuhr} pm </td>
      </tr>
      <tr>
      <td id = "prayerName">Asr</td>
        <td className={`${blinkAsr ? 'blink' : ''} ${darkenAsr ? 'darken' : ''}`}>{prayerTimes.Asr} pm</td>
        <td>{changedprayer.Asr} pm</td>
      </tr>
      <tr>
      <td id = "prayerName">Maghrib</td>
        <td className={`${blinkMaghrib ? 'blink' : ''} ${darkenMaghrib ? 'darken' : ''}`}>{prayerTimes.Maghrib} pm </td>
        <td>{changedprayer.Maghrib} pm </td>
      </tr>
      <tr>
      <td id = "prayerName">Isha</td>
        <td className={`${blinkIsha ? 'blink' : ''} ${darkenIsha ? 'darken' : ''}`}>{prayerTimes.Isha} pm </td>
        <td>{changedprayer.Isha} pm </td>
      </tr>

    </tbody>

  </table>
  <br></br>
  {/* <table id="prayerTimesTable">
          <thead>
            <tr>
              <th>Jumu'ah Prayers</th>
              <th>1st Prayer</th>
              <th>2nd Prayer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="prayerName">Khutbah</td>
              <td>1:00 pm</td>
              <td>2:00 pm</td>
            </tr>
          </tbody>
        </table> */}
   {showJummah ? (
        <table id="prayerTimesTable">
          <thead>
            <tr>
              <th>Jummah Prayers</th>
              <th>1st Prayer</th>
              <th>2nd Prayer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="prayerName">Khutbah</td>
              <td>1:00 pm</td>
              <td>2:00 pm</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table id="prayerTimesTable">
          <thead>
            <tr>
              <th>EID Prayers</th>
              <th>1st Prayer</th>
              <th>2nd Prayer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="prayerName">Khutbah</td>
              <td>9:00 am</td>
              <td>10:30 am</td>
            </tr>
          </tbody>
        </table>
      )} 
 
    </div>
  );
}

export default HomePage;