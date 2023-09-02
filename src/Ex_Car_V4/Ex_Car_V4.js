import React, { Component } from 'react'
import ImageCar from './ImageCar';
import ButtonColor from './ButtonColor';

export default class Ex_Car_V4 extends Component {
    // dẫn đường dẫn từ file index.html
    state = {
        color : "black",
        colorArr : ["red", "black", "silver"],
    }

    // 3 buttons but 1 method => need parameter
    handleChangeColor = (colorParam) => {
        this.setState({
            color: colorParam
        })
    };

    handleChangeActiveIndex = (index) => {
        this.setState({activeIndex: index});
    }

    renderButtonList = () => {
        return this.state.colorArr.map(
            (item) => {
                return <ButtonColor 
                activeColor={this.state.color} 
                handleChange={this.handleChangeColor} 
                color={item}/>
            }
        )
    };

    render() {
        let imgPath = `./resource/CarBasic/products/${this.state.color}-car.jpg`;
        return (
            <div className = "row">
                {/* passing the value of imgPath to the imgPath prop */}
                <ImageCar imgPath={imgPath} />
                <div className = "col-8 mt-5">{this.renderButtonList()}</div>
            </div>
        )
    };
}       
