import React from 'react';
import './App.css';
import Shape from './Shape';

function App() {
  // const blocks = [
  //   { id: 1, label: 'Start', x: 300, y: 50, connections: [2, 3] },
  //   { id: 2, label: 'Process A', x: 150, y: 150, connections: [4] },
  //   { id: 3, label: 'Process B', x: 450, y: 150, connections: [] },
  //   { id: 4, label: 'End', x: 300, y: 300, connections: [] },
  // ];

  const BOX_DATA = [[1,1,1],[1,0,0],[1,1,1]]
  return (
    <div>
      Box Data
     <Shape data={BOX_DATA}/>
    </div>
    // <div className="App">
    //   <header>
    //     <h1>Dynamic Flow Chart</h1>
    //     {/* <FlowChart blocks={blocks} /> */}
    //     <FlowDiagram/>
    //   </header>
    // </div>
  );
}

export default App;
