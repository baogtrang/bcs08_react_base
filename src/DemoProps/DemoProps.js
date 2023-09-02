import React, { Component } from 'react'
import UserProfile from './UserProfile'
import { faker } from '@faker-js/faker';

// DemoProps is the parent of UserProfile
export default class DemoProps extends Component {
  // đưa username vào state
  // viết 1 hàm setState 
  // state ở đâu thì setState ở đó
  state = {
    username: "Alice",
  }
  // setState method takes an OBJECT as an argument
  handleChangeName = () => {
    this.setState({username: faker.animal.cat()});
  }

  render() {
    return (
      <div>
        <h2>DemoProps</h2>
        {/* UserProfile is a React component imported from the file UserProfile.js  */}
        {/* passing a prop named "title" to UserProfile component */}
        <UserProfile 
          //variable must be in {} inside return 
          // dùng this vì handleChangeName ngang cấp với render()
          handleChange={this.handleChangeName}
          username={this.state.username}
          title="Thông tin người dùng"/>
      </div>
    )
  }
}




// import React, { Component } from "react";
// import UserProfile from "./UserProfile";
// import { faker } from "@faker-js/faker";

// export default class DemoProps extends Component {
//   // đưa username vào state
//   // viết 1 hàm setState
//   // state ở đâu => setState tại đó
//   state = { username: "Alicee" };
//   handleChangeName = () => {
//     this.setState({ username: faker.animal.cat() });
//   };
//   render() {
//     // let username = "Alice";
//     return (
//       <div>
//         <h2>DemoProps</h2>
//         <UserProfile handleChange={this.handleChangeName} username={this.state.username} title="Thông tin người dùng" />
//       </div>
//     );
//   }
// }

// // props react js
