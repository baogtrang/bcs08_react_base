import React, { Component } from "react";
import UserProfile from "./UserProfile";
import { faker } from "@faker-js/faker";

export default class DemoProps extends Component {
  // đưa username vào state
  // viết 1 hàm setState
  // state ở đâu => setState tại đó
  state = { username: "Alicee" };
  handleChangeName = () => {
    this.setState({ username: faker.animal.cat() });
  };
  render() {
    // let username = "Alice";
    return (
      <div>
        <h2>DemoProps</h2>
        <UserProfile handleChange={this.handleChangeName} username={this.state.username} title="Thông tin người dùng" />
      </div>
    );
  }
}

// props react js
