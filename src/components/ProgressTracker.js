import React from 'react';
import styled from 'styled-components';

// Styled components for the progress tracker
const ProgressTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackerItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TrackerBullet = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ completed }) => (completed ? 'green' : 'lightgray')};
  margin-right: 10px;
`;

const TrackerLabel = styled.span`
  font-size: 16px;
`;

// Progress Tracker Component
const ProgressTracker = ({ totalItems, completedItems }) => {
  // Calculate the percentage of completion
  const completionPercentage = (completedItems / totalItems) * 100;

  // Generate an array of tracker items
  const trackerItems = [];
  for (let i = 0; i < totalItems; i++) {
    trackerItems.push(
      <TrackerItem key={i}>
        <TrackerBullet completed={i < completedItems} />
        <TrackerLabel>{`Item ${i + 1}`}</TrackerLabel>
      </TrackerItem>
    );
  }

  return (
    <ProgressTrackerContainer>
      <div>{`${completedItems} out of ${totalItems} completed`}</div>
      <div style={{ marginTop: '10px' }}>
        {/* Display tracker items */}
        {trackerItems}
      </div>
      <div style={{ marginTop: '10px' }}>
        {/* Display completion percentage */}
        <progress value={completedItems} max={totalItems}></progress>
      </div>
    </ProgressTrackerContainer>
  );
};

export default ProgressTracker;
