import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";

import { compose } from "redux";

function index({ measurements }) {
  let { id } = useParams();

  const wheather = measurements.find(elem => elem.id === id)
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row flex">
        <div className="col s12 m6 flex margin-left-remove">
          <div className="card white">
            <div className="card-content">
              <p className="tempe-details">{`Máxima: ${wheather?.name} - ${wheather?.temp_max} ºC`}</p>
              <p className="tempe-details">{`Minima: ${wheather?.name} - ${wheather?.temp_min} ºC`}</p>
            </div>
          </div>
        </div>       
      </div>
      <div className="row flex">
        <a onClick={(e) => navigate(-1)} className="waves-effect blue-grey lighten-1 btn-large">
          Voltar
        </a>
      </div>
     
    </div>
  );
}

const mapStateToProps = (state) => {
  const weather = state.firestore.ordered?.weather
  return {
    measurements: weather,
    city: state.city,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "weather"
      },
    ];
  })
)(index);
