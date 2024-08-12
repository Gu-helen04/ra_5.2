import React from "react";



export default function Weather(props) {  
  
  const { weather } = props;
  const { svg, temperatureNow, temperatureMorning, temperatureEvening } = weather;
    
  return (
    <div className="weatherWidget">Погода
      <img src={svg} alt=""/>
      <div className="nowTemperature">{temperatureNow}&#176;</div>
      <div className="otherTemperature">
        <span>Утром{temperatureMorning}</span>
        <span>Вечером{temperatureEvening}</span>
      </div>
    </div>
  );
};
