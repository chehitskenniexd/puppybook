import React, { Component } from 'react';

// stateful component way
// export default class SinglePuppy extends Component {
//
//   render () {
//     const {singlePuppy} = this.props;
//     return (
//       <div>
//         <h2>{singlePuppy.name}</h2>
//         <div>
//           <img src={singlePuppy.image} />
//         </div>
//       </div>
//     )
//   }
// }

// stateless Component
/*
function(this.props){
  render logics here
}

export default (this.props) {
  return () //render logic
}
*/

export default ({singlePuppy}) => {
  return (
    <div>
      <h2>{singlePuppy.name}</h2>
      <div>
        <img src={singlePuppy.image} />
      </div>
    </div>
  )
}
