import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { Intro, LayoutContainer, StepLayout } from './components';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';
import { Step5 } from './components/Step5';

const Main = () => {
  const Step1Ref = useRef<HTMLDivElement>(null);
  const Step2Ref = useRef<HTMLDivElement>(null);
  const Step3Ref = useRef<HTMLDivElement>(null);
  const Step4Ref = useRef<HTMLDivElement>(null);
  const Step5Ref = useRef<HTMLDivElement>(null);

  return (
    <LayoutContainer>
      <Intro
        step1Ref={Step1Ref}
        step2Ref={Step2Ref}
        step3Ref={Step3Ref}
        step4Ref={Step4Ref}
        step5Ref={Step5Ref}
      />
      <StepLayout>
        <Step1 ref={Step1Ref} />
      </StepLayout>
      <StepLayout>
        <Step2 ref={Step2Ref} />
      </StepLayout>
      <StepLayout>
        <Step3 ref={Step3Ref} />
      </StepLayout>
      <StepLayout>
        <Step4 ref={Step4Ref} />
      </StepLayout>
      <StepLayout>
        <Step5 ref={Step5Ref} />
      </StepLayout>
      <End />
    </LayoutContainer>
  );
};

const End = styled.div`
  margin-top: 50vh;
`;

export default Main;
