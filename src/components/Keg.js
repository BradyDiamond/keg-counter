import React from "react";


function Keg(props){

  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.style}</p>
      <p>{props.cost}</p>
      <p>{props.ounces}</p>
      <hr/>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  style: PropTypes.string,
  cost: PropTypes.string,
  ounces: PropTypes.string,
};


export default Keg;



