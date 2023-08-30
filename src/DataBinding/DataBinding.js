import React, { Component } from 'react'

export default class DataBinding extends Component {
  username = "alice@gmail.com";
  render() {
    let avatar = "https://image-us.eva.vn/upload/4-2018/images/2018-11-21/muon-co-vo-dam-dang-biet-chi-tieu-tiet-kiem-hay-lay-con-gai-hue-images2633514_b_4-1542796980-577-width660height440.jpg";

    return (
      // <div>DataBinding</div>
      // b4-card-align 
      // nhớ CONVERT HTML TO JSX
      // In React (and thus JSX), the style attribute accepts a JavaScript object rather than a string
      // The outer {} is JSX syntax that indicates you are injecting a JavaScript expression.
      // The inner {} defines a JavaScript object.
      <div className="card text-left" style={{width: "300px", backgroundColor: "blue"}}>
         {/* {} là binding  */}
        {/* in the context of JSX, the {} syntax allows you to embed any JavaScript expression. This is often referred to as "JSX expression embedding" or "JSX interpolation". */}

        <img className="card-img-top" src={avatar} alt="img" />
        <div className="card-body">
          <h4 className="card-title">{this.username}</h4>
          <p className="card-text">Body</p>
        </div>
      </div>

    )
  }
}
