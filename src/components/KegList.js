import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props){
  return (
    <div>
      <hr/>
        {props.kegList.map((keg) =>
          <Keg
            whenKegClicked={props.onKegSelection}
            name={keg.name}
            style={keg.style}
            cost={keg.cost}
            key={keg.id}
            id={keg.id}
            ounces= {keg.ounces} />
        )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;
