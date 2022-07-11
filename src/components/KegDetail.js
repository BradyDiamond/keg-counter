import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){

  const { keg, onPour } = props;
  
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name}</h3>
      <p>style: {keg.style}</p>
      <p>cost: {keg.cost}</p>
      <p>remaining OZs: {keg.ounces}</p>
      <button className="sell-button" onClick = {() => onPour(keg.id)}>Sell a Pint</button> 
    </React.Fragment>
  )
}
KegDetail.propTypes = {
  keg: PropTypes.object,
  onPour: PropTypes.func

};

export default KegDetail;