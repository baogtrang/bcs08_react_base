import React, { Component } from 'react'

export default class DemoState extends Component {
  // initialization of the state for a React class component
  state = {
    number: 1,
    username: "Alice",
  }

  // this.setState để thay đổi giá trị của state
  //  a special property in React class components. The state object contains data specific to a component that may change over time. 
  // The component re-renders whenever the state changes.
  handleIncrease = () => {
    this.setState({
      number: ++this.state.number,
      // number: this.state.number + 1,
    });    
  }
  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1,
    }, () => {
    })
  }

  handleChangeName = (name) => {
    this.setState ({username: name});
  }


  // event handling: có tham số, không có tham số
  render() {
    return (
      <div className="text-center">
        <button onClick={this.handleDecrease} className="btn btn-danger">-</button>
        <span className="mx-5 display-4">{this.state.number}</span>
        <button onClick={this.handleIncrease} className="btn btn-success">+</button>
        <h2 className={`display-4 ${this.state.username =="Alice" ? "text-warning" : "text-secondary"}`}>{this.state.username}</h2>

        {/* hàm có tham số, bọc lại bằng arrow function */}
        <button onClick={() => {
          this.handleChangeName("Bob");
        }} className="btn btn-secondary">Change to Bob</button>

        <button onClick={()=> {
          this.handleChangeName("Alice")
        }} className="btn btn-warning">Change to Alice</button>
      </div>
    )
  }
}


// import React, { Component } from "react";

// export default class DemoState extends Component {
//   state = {
//     number: 1,
//     username: "Alice",
//   };
//   //   this.setSate ~ thay đổi giá trị của state

//   handleIncrease = () => {
//     this.setState(
//       {
//         number: this.state.number + 1,
//       },
//       () => {
//         console.log(this.state.number);
//       }
//     );
//   };
//   handleDescrease = () => {
//     this.setState({
//       number: this.state.number - 1,
//     });
//     console.log("Giảm");
//   };
//   handleChangeName = (name) => {
//     this.setState({ username: name });
//   };
//   //   event handling: có tham số, không có tham số
//   render() {
//     return (
//       <div className="text-center">
//         <button onClick={this.handleDescrease} className="btn btn-danger">
//           -
//         </button>
//         <span className="mx-5 display-4">{this.state.number}</span>
//         <button onClick={this.handleIncrease} className="btn btn-success">
//           +
//         </button>
//         {/* toán tử 3 ngôi */}
//         <h2 className={this.state.username == "Alice" ? "text-warning" : "text-secondary"}>{this.state.username}</h2>
//         {/* hàm có tham số: bọc lại bằng arrow function */}
//         <button
//           onClick={() => {
//             this.handleChangeName("Bob");
//           }}
//           className="btn btn-secondary"
//         >
//           Change to Bob
//         </button>
//         <button
//           onClick={() => {
//             this.handleChangeName("Alice");
//           }}
//           className="btn btn-warning"
//         >
//           Change to Alice
//         </button>
//       </div>
//     );
//   }
// }
