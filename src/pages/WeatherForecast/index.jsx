import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { updateWeather } from "../../store/actions/weatherActions";
import { updateCity, clearCity } from "../../store/actions/cityActions";
import Loader from "../../components/Loader";
import Card from "../../components/Card";
import Alert from "../../components/Alert";
import { getWeatherForecast } from "../../services/api";
import { Link } from "react-router-dom";
import "./index.css";

function index({ city, weather, updateWeather, updateCity }) {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    severity: null,
    open: false,
    message: "",
  });

  //cidades selecionadas para previsão da temperatura
  const selectedCitiesForWeatherForecast = [
    { id: "1848354", name: "Yokohama" },
    { id: "360630", name: "Cairo" },
    { id: "3530597", name: "Cidade do México" },
  ];
  const click = async (e, item) => {
    setLoading(true);
    e.preventDefault();
    await updateCity(item);
    getWeatherForecast(item.id)
      .then(async (res) => {
        if (res.status === 200) {
          const data = res.data;
          const _weather = {
            name: item.name,
            id: data.id.toString(),
            icon: data.weather[0]?.icon,
            description: data?.weather[0]?.description,
            temp: Math.round(data.main.temp),
            temp_max: Math.round(data.main.temp_max),
            temp_min: Math.round(data.main.temp_min),
          };
          await updateWeather(_weather);
        }
      })
      .catch((e) => {
        alertError;
        clearCity();
      })
      .finally(() => setLoading(false));
  };

  const alertError = () => {
    setAlert({
      severity: "error",
      open: true,
      message:
        "Ocorreu um problema ao buscar a previsão do tempo, tente mais tarde!",
    });
    setTimeout(() => {
      setAlert({
        severity: null,
        open: false,
        message: "",
      });
    }, 2000);
  };

  const buttoesCity = () => {
    return (
      <div>
        {selectedCitiesForWeatherForecast.map((item) => (
          <div className="col" key={item.id} onClick={(e) => click(e, item)}>
            <a
              className={`waves-effect waves-light btn-large ${
                city.id === item.id ? `buttton-active` : ""
              }`}
            >
              <i className="material-icons left">cloud</i>
              {item.name}
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row padding flex">{buttoesCity()}</div>
      <div className="row flex">
        <div className="col flex margin-left-remove">
          <div className="card white">
            {loading ? (
              <div className="card-content center-loader">
                <Loader />
              </div>
            ) : (
              <Card forescast={weather} />
            )}
          </div>
        </div>
      </div>

      {city?.id ? (
        <div className="row padding flex">
          <Link
            to={`/details/${city.id}`}
            className="waves-effect waves-light btn-large"
          >
            {" "}
            Mostrar Min/Máx
          </Link>
        </div>
      ) : null}
      <Alert {...alert} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const _weather = state.firestore.ordered?.weather;
  const weather = _weather?.length ? state.firestore.ordered?.weather[0] : null;
  return {
    weather,
    city: state.city,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateWeather: (city) => dispatch(updateWeather(city)),
    updateCity: (city) => dispatch(updateCity(city)),
    clearCity: () => dispatch(clearCity()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    const where = ["id", "==", props.city.id ? props.city.id : 0];
    return [
      {
        collection: "weather",
        where,
      },
    ];
  })
)(index);
