import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props){
  return (
    <div>
      <hr/>
        {props.KegList.map((keg) =>
          <Keg name={keg.names}
            style={keg.style}
            cost={keg.cost}
            key={keg.id}/>
        )}
    </div>
  );
}

KegList.propTypes = {
  KegList: PropTypes.array
};

export default KegList;
