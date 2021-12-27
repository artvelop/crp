import React from 'react';
import styled from '@emotion/styled';
import { IntroduceCard } from '..';
import { Step5Box } from './Step5Box';

type Props = {};

export const Step5 = React.forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <Wrapper ref={ref}>
      <IntroduceCard title="Repaint">
        Reflow를 통해 배치된 레이아웃에
        <br />
        css요소에 걸맞는 화면을 그려줍니다
      </IntroduceCard>
      <Step5Box />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin-top: 30vh;
`;
