import React from 'react'
import TimeBox from './TimeBox';
import { ContentWrapper, TimeBoxesContainer } from './TimeBox.styled';

const TimeBoxes = () => {
  return (
    <ContentWrapper>
      <TimeBoxesContainer>
        <TimeBox />
        <TimeBox />
      </TimeBoxesContainer>
    </ContentWrapper>
  );
}

export default TimeBoxes
