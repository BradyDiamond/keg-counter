import React from "react";
import PropTypes from"prop-types";


function Keg(props){
console.log(props)
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.style}</p>
        <p>{props.cost}</p>
        <p>{props.ounces} OZ remaining</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  names: PropTypes.string,
  style: PropTypes.string,
  cost: PropTypes.string,
  ounces: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
};


export default Keg;



