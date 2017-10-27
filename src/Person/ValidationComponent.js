import React from 'react';

const validation = (props) => {
    const megsArray = ['Text too short','Text Long enough'];
    props.length <=5 ? this.megs = megsArray[0] : this.megs = megsArray[1];
    return (
        <div>
          <p>{this.megs}</p>
        </div>
    )
};
export default validation;