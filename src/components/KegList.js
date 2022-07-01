import React from "react";
import Keg from "./Keg";


function KegList(props){
  return (
    <div>
      <hr/>
        {props.keglist.map((keg) =>
          <Keg name={keg.names}
            style={keg.style}
            cost={keg.cost}
            key={index}/>
        )}
    </div>
  );
}

export default KegList;
