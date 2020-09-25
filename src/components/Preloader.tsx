import React, { ReactElement } from 'react';

function Preloader(): ReactElement {
  return (
    <div className="loader">
      <div className="l_main">
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
