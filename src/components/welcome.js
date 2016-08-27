import React, { Component } from 'react';
// import Calendar from 'react-input-calendar';
// import { connect } from 'react-redux';


// function based "dumb" component with no state
// const Welcome = () => {
//   return (
//     <div className="container">
//       <div className="text">
//         NO
//       </div>
//     </div>
//   );
// };
//
//
// export default Welcome;


class Welcome extends Component {


  constructor(props) {
    super(props);
    // init component state here
    this.state = {};
  }

  yes() {
    const currentdate = new Date();
    if (currentdate.getUTCMonth() === 7 && currentdate.getUTCDate() === 28) {
      return (
        <div className="container">
          <div className="text">
            YES
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="text">
            NO
          </div>
        </div>
      );
    }
  }


  render() {
    return (
      <div className="container">
        <div className="text">
          {this.yes()}
        </div>
      </div>
    );
  }
}


// const mapStateToProps = (state) => (
//   {
//   }
// );

export default Welcome;
