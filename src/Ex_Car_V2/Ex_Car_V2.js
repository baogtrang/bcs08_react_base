import React, { Component } from "react";
import ImageCar from "./ImageCar";
import ButtonColor from "./ButtonColor";

export default class Ex_Car_V3 extends Component {
  // dẫn đường dẫn từ file index.html
  state = {
    color: "black",
    colorArr: ["red", "black", "silver"],
  };
  handleChangeColor = (color) => {
    this.setState({ color: color });
  };
  renderButtonList = () => {
    return this.state.colorArr.map((item) => {
      return <ButtonColor handleChange={this.handleChangeColor} color={item} />;
    });
  };

  render() {
    let imgPath = `./resouce/CarBasic/products/${this.state.color}-car.jpg`;
    return (
      <div className="row ">
        <ImageCar imgPath={imgPath} />
        <div className="col-8 mt-5">{this.renderButtonList()}</div>
      </div>
    );
  }
}
{
  /* <button
onClick={() => {
  this.handleChangeColor("red");
}}
className="btn btn-danger"
>
Red
</button>
<button
onClick={() => {
  this.handleChangeColor("black");
}}
className="btn btn-dark mx-5"
>
Black
</button>
<button
onClick={() => {
  this.handleChangeColor("silver");
}}
className="btn btn-secondary"
>
Silver
</button> */
}
