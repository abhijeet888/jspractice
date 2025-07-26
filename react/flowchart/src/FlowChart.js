import React from 'react';

const FlowChart = ({ blocks }) => {
  const renderBlocks = () => {
    const blockElements = [];
    const arrowElements = [];

    blocks.forEach((block) => {
      const { id, label, x, y, connections } = block;
      blockElements.push(
        <React.Fragment key={id}>
          {/* Block */}
          <rect x={x} y={y} width="150" height="50" fill="lightblue" />
          <text x={x + 75} y={y + 30} textAnchor="middle" fill="black">{label}</text>
        </React.Fragment>
      );

      if (connections.length === 1) {
        const targetBlock = blocks.find(b => b.id === connections[0]);
        if (targetBlock) {
          const arrowStartX = x + 75;
          const arrowStartY = y + 50;
          const arrowEndX = targetBlock.x + 75;
          const arrowEndY = targetBlock.y;

          // Direct line to the single connection
          arrowElements.push(
            <React.Fragment key={`${id}-${connections[0]}`}>
              <line x1={arrowStartX} y1={arrowStartY} x2={arrowEndX} y2={arrowEndY} stroke="grey" />
              <polygon points={`${arrowEndX - 5},${arrowEndY - 10} ${arrowEndX + 5},${arrowEndY - 10} ${arrowEndX},${arrowEndY}`} fill="grey" />
            </React.Fragment>
          );
        }
      } else if (connections.length > 0) {
        const midX = x + 75;
        const midY = y + 50;
        const splitY = midY + 50;

        // Draw the initial straight line downwards
        arrowElements.push(
          <line key={`${id}-split`} x1={midX} y1={midY} x2={midX} y2={splitY} stroke="grey" />
        );

        // Draw the splitting lines and arrows
        connections.forEach((connId, index) => {
          const targetBlock = blocks.find(b => b.id === connId);
          if (targetBlock) {
            const arrowEndX = targetBlock.x + 75;
            const arrowEndY = targetBlock.y;
            const directionX = (index === 0) ? -50 : 50;
            const splitX = midX + directionX;
            const connectY = splitY + 50;

            // Horizontal line to left or right
            arrowElements.push(
              <line key={`${id}-${connId}-horizontal`} x1={midX} y1={splitY} x2={splitX} y2={splitY} stroke="grey" />
            );

            // Vertical line downwards to the same level as the target block
            arrowElements.push(
              <line key={`${id}-${connId}-vertical`} x1={splitX} y1={splitY} x2={splitX} y2={arrowEndY} stroke="grey" />
            );

            // Final line connecting to the target block
            arrowElements.push(
              <line key={`${id}-${connId}-final`} x1={splitX} y1={arrowEndY} x2={arrowEndX} y2={arrowEndY} stroke="grey" />
            );

            // Arrowhead
            arrowElements.push(
              <polygon key={`${id}-${connId}-arrowhead`} points={`${arrowEndX - 5},${arrowEndY - 10} ${arrowEndX + 5},${arrowEndY - 10} ${arrowEndX},${arrowEndY}`} fill="grey" />
            );
          }
        });
      }
    });

    return [...blockElements, ...arrowElements];
  };

  return (
    <svg width="800" height="600" style={{ border: '1px solid black' }}>
      {renderBlocks()}
    </svg>
  );
};

export default FlowChart;
