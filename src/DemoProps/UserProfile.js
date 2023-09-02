import React, { Component } from 'react'

export default class UserProfile extends Component {
  render() {
    // this.props này là default (giống this.setState), cho ra kiểu dữ liệu là object
    // props dùng để nhận dữ liệu 
    console.log("props", this.props);
    
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src="holder.js/100px180/" alt />
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text display-4">{this.props.username}</p>
            <button onClick={this.props.handleChange} className="bg-danger">Change name</button>
          </div>
        </div>
      </div>
      
    )
  }
}




// import React, { Component } from "react";

// export default class UserProfile extends Component {
//   render() {
//     console.log("props", this.props);
//     return (
//       <div>
//         <div className="card text-left">
//           <img className="card-img-top" src="holder.js/100px180/" alt />
//           <div className="card-body">
//             <h4 className="card-title">{this.props.title}</h4>
//             <p className="card-text display-4 text-info">{this.props.username}</p>
//             <button onClick={this.props.handleChange} className="btn btn-danger">
//               Change Name
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// // Alice => Bob => Alice => Bob => Alice

// // faker js npm
