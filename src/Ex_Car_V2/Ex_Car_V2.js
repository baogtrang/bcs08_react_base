import React, { Component } from 'react'
import ImageCar from './ImageCar';
import ButtonColor from './ButtonColor';

export default class Ex_Car_V2 extends Component {
    // dẫn đường dẫn từ file index.html
    state = {
        color : "black"
    }

    // 3 buttons but 1 method => need parameter
    handleChangeColor = (colorParam) => {
        this.setState({
            color: colorParam
        })
    }

    render() {
        let imgPath = `./resource/CarBasic/products/${this.state.color}-car.jpg`;
        return (
        <div className = "row">
            {/* passing the value of imgPath to the imgPath prop */}
            <ImageCar imgPath={imgPath} />
            <div className = "col-8 mt-5">
                <ButtonColor handleChange={this.handleChangeColor} color="red"/>
                <ButtonColor handleChange={this.handleChangeColor} color="black"/>
                <ButtonColor handleChange={this.handleChangeColor} color="silver"/>
            </div>
        </div>
        )
    }
}


