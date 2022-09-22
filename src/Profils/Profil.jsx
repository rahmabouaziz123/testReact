import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';

export const Profil = ({ data, affiche ,npooo}) => {
    const {bio}=data
    console.log(bio)
  return (
    <div className="DivTotal">
      <h1>{npooo}</h1>
        <div>
          <img src={bio} alt="" className="imgVoiture" />
        </div>
        <div className="DivTotal2">
        <div className="data fullName" >{data.fullName}</div>
        <div className="data">{data.profession}</div>
        <div>
          <p className="data">
            2018 – 2019 : Diplôme en licence fondamentale en informatique de
            gestion de la Faculté des Sciences Économiques et de Gestion .Sfax
          </p>
          <p className="data">
            2015 – 2016 : Diplôme de baccalauréat, section science expérimentale
            lycée public hedi chaker. Sfax
          </p>
        </div>
        <div>
          {/* <button type="button" onClick={affiche}>
            Click Me!
          </button> */}

          <Button variant="primary" onClick={affiche}>Click Me!</Button>
        </div>
      </div>
    </div>
  );
};

Profil.defaultProps = {
   bio:`https://www.spray.com/fr-tn/-/media/dam/industrial/usa/website-images/sars---equipment-and-services/characterization-overview-particle-image-velocimetry-660x370.jpg?h=270&w=480&hash=7F12EC9D36F32344BBB87FBEA0AD5247`,
   npooo:"lqkjdoiezjhfoqifdjoifej"
  };
  
  Profil.propTypes = {
    data: PropTypes.bool,
  };
  