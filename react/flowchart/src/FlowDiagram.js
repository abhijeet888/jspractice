import React from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, Background, Controls } from 'react-flow-renderer';

const initialElements = [
  { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Process 1' }, position: { x: 250, y: 100 } },
  { id: '3', data: { label: 'Process 2' }, position: { x: 250, y: 200 } },
  { id: '4', type: 'output', data: { label: 'End' }, position: { x: 250, y: 300 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
];

const FlowDiagram = () => {
  const [elements, setElements] = React.useState(initialElements);

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <div style={{ height: 500 }}>
      <ReactFlowProvider>
        <ReactFlow elements={elements} onConnect={onConnect}>
          <Background />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowDiagram;
