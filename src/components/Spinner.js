import React from 'react';

const spinners = () => {

  const children = [];
  for (var i = 1; i < 13; i++) {
    children.push(<div key={i} style={ {width: 10} } />);
  }
  return children;
};

export default spinners;



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
