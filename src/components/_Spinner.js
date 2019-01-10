import React from 'react';
// import { compose, setDisplayName } from 'recompose';

const Spinner = () => {

  const children = [];

  for (var i = 1; i < 13; i++) {
    // children.push(<div key={i} className={`sk-circle${i} sk-circle`} />);
    children.push(<div key={i} className={`sk-circle${i}`} />) ;
  }
  return children;
};

export default Spinner;
// export default () => compose(setDisplayName(<div className='sk-fading-circle'>{Spinner()}</div>));



// import React from "react";
//
// const spinners = () => {
//   let children = [];
//   for (var i = 1; i < 13; i++) {
//     children.push(<div key={i} className={`sk-circle${i} sk-circle`} />);
//   }
//   return children;
// };
//
// export default () => <div className="sk-fading-circle">{spinners()}</div>;
