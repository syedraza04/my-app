
import React from 'react';

const CharComponent = (props)=> {
  return (
    <div className="charComp">
        <p onClick={props.click}> {props.value}</p>
    </div>
  )
};

export default CharComponent;