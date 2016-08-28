import React, { Component } from 'react';
// import { connect } from 'react-redux';


class Welcome extends Component {


  constructor(props) {
    super(props);
    // init component state here
    this.state = {};
  }

  yes() {
    const currentdate = new Date();
    if ((currentdate.getUTCMonth() === 7 && currentdate.getUTCDate() === 28 && currentdate.getUTCHours() >= 4) ||
    (currentdate.getUTCMonth() === 7 && currentdate.getUTCDate() === 29 && currentdate.getUTCHours() <= 4)) {
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
