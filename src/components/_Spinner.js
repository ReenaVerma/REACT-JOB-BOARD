import React from 'react';
import { compose, setDisplayName } from 'recompose';

const Spinners = () => {

  const children = [];

  for (var i = 1; i < 13; i++) {
    children.push(<div key={i} className={`sk-circle${i} sk-circle`} />);
  }
  return children;
};

export default () => compose(setDisplayName(<div className='sk-fading-circle'>{Spinners()}</div>));



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
