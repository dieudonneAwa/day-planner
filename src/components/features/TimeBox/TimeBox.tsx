import React from 'react';
import { Icon } from '../../common/Icon';
import { Text } from '../../common/Text';
import { BoxLabel, Card, StyledTask, TimeBoxWrapper } from './TimeBox.styled';

const TimeBox = () => {
  const renderTask = () => (
    <StyledTask>
      <div className="Task-content">
        <Text family="encode" className="cursor-pointer" appearance="blue-grey" weight="500">
          Dinner break
        </Text>
        <Text
          family="encode"
          className="cursor-pointer"
          appearance="blue-grey"
          size="sm"
          weight="400"
        >
          3:30 pm - 4:00 pm
        </Text>
      </div>
      <div className="Task-icons">
        <Icon className="Icon" name="edit" />
        <Icon className="Icon" name="delete" />
      </div>
    </StyledTask>
  );

  return (
    <TimeBoxWrapper>
      <BoxLabel>
        <span className="circle" />
        <Text family="encode" appearance="blue-grey" weight="500">
          3:00 am - present
        </Text>
      </BoxLabel>
      <Card>
        <Text
          family="encode"
          className="cursor-pointer"
          appearance="blue-grey"
          size="sm"
          weight="400"
        >
          + Create new task
        </Text>
        {renderTask()}
        {renderTask()}
        {renderTask()}
      </Card>
    </TimeBoxWrapper>
  );
};

export default TimeBox;
