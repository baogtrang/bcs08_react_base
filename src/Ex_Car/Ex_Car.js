import React, { Component } from 'react'

export default class Ex_Car extends Component {
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
            <img src={imgPath} alt="img" className="col-4" />
            <div className = "col-8 mt-5">
                <button onClick = {() => {
                    this.handleChangeColor("red")
                }} className="btn btn-danger">Red</button>
                <button onClick = {() => {
                    this.handleChangeColor("black")
                }} className="btn btn-dark mx-3">Black</button>
                <button onClick = {() => {
                    this.handleChangeColor("silver")
                }} className="btn btn-secondary">Silver</button>
            </div>

        </div>
        )
    }
}
