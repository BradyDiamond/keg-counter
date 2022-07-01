import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){

  const { keg } = props;
  
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name}</h3>
      <p>style: {keg.style}</p>
      <p>cost: {keg.cost}</p>
      <p>remaining: {keg.ounces}</p>
    </React.Fragment>
  )
}
KegDetail.propTypes = {
  Keg: PropTypes.object
};

export default KegDetail;