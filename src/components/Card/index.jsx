import React from "react";
import "./index.css";

const index = ({ forescast = null }) => {
  return (
    <>
      {!forescast ? (
        <div className="card-content ">
          <p className="flow-text">Nenhuma previsão do tempo capturada!</p>
          <p className="flow-text">
            Para realizar uma previsão, click em uma das cidade acima.
          </p>
        </div>
      ) : (
        <>
          <div className="card-content flex">
            <div className="div-row">
              <span className="city">{forescast.name}</span>
              <span className="description">{forescast.description}</span>
              <span className="tempe">{forescast.temp} ºC</span>
            </div>
            <img
              className="img"
              src={`http://openweathermap.org/img/wn/${forescast.icon}@2x.png`}
            />
          </div>
          <div className="div-row div-max-min">
            <span className="tempe-min-max">{`Máx: ${forescast.temp_max} ºC`}</span>
            <span className="tempe-min-max">{`Min: ${forescast.temp_min} ºC`}</span>
          </div>
        </>
      )}
    </>
  );
};

export default index;
