import React from 'react';
import DemoComponent from "./DemoComponent/DemoComponent"
import DemoFunction from "./DemoComponent/DemoFunction"
import ExLayout from "./ExLayout/ExLayout"
import './App.css';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DataBinding from "./DataBinding/DataBinding";
import DemoState from "./DemoState/DemoState";
import DemoProps from "./DemoProps/DemoProps";
import Ex_Car from './Ex_Car/Ex_Car';
import Ex_Car_V2 from './Ex_Car_V2/Ex_Car_V2';
import Ex_Car_V3 from './Ex_Car_V3/Ex_Car_V3';
import Ex_Car_V4 from './Ex_Car_V4/Ex_Car_V4';
import DemoRedux from './DemoRedux/DemoRedux';
import Ex_Shoe_Redux from './Ex_Shoe_Redux/Ex_Shoe_Redux';
import Ex_Shoe from './Ex_Shoe/Ex_Shoe';



function App() {
  return (
    <div className="App"> 
      {/* --- day 1 --- */}
      {/* <demoComponent/> */}
      {/* <demoFunction/> */}
      {/* <ExLayout/> */}
      {/* --- day 2 --- */}
      {/* <RenderWithMap/> */}
      {/* <DataBinding /> */}
      {/* <DemoState/> */}
      {/* --- day 3 --- */}
      {/* <DemoProps/> */}
      {/* <Ex_Car/> */}
      {/* <Ex_Car_V2/> */}
      {/* <Ex_Car_V3/> */}
      {/* <Ex_Car_V4/> */}
      {/* --- day 4 --- */}
      <Ex_Shoe />
      {/* --- day 5 --- */}
      {/* <DemoRedux /> */}
      {/* <Ex_Shoe_Redux /> */}
      
    </div>
  );
}

export default App;
