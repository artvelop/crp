import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React, { useState, RefObject } from 'react';
import { IntroBox } from './IntroBox';
import { TyphoGraphy } from './TyphoGraphy';

type Props = {
  step1Ref: RefObject<HTMLDivElement>;
  step2Ref: RefObject<HTMLDivElement>;
  step3Ref: RefObject<HTMLDivElement>;
  step4Ref: RefObject<HTMLDivElement>;
  step5Ref: RefObject<HTMLDivElement>;
};

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

export const Intro = ({
  step1Ref,
  step2Ref,
  step3Ref,
  step4Ref,
  step5Ref,
}: Props) => {
  const [hoverBox, setHoverBox] = useState<boolean>(false);

  const step1Click = () => {
    step1Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const step2Click = () => {
    step2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const step3Click = () => {
    step3Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const step4Click = () => {
    step4Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const step5Click = () => {
    step5Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Wrapper>
      <LayoutWrapper>
        <TitleWrapper>
          <Title>
            <TyphoGraphy type="Title" color="#000" fontWeight="bold">
              BROSWER
            </TyphoGraphy>
            <TyphoGraphy type="Title" color="#000" fontWeight="bold">
              RENDERING
            </TyphoGraphy>
            <TyphoGraphy type="Title" color="#000" fontWeight="bold">
              PROCESS
            </TyphoGraphy>
          </Title>
          <TyphoGraphy type="h3" color="#000">
            create by artvelop
          </TyphoGraphy>
        </TitleWrapper>
        <BoxWrapper
          onHoverStart={e => setHoverBox(true)}
          onHoverEnd={e => setHoverBox(false)}
        >
          <IntroBox
            handleClick={step5Click}
            isHover={hoverBox}
            hoverRotate={2}
            hoverX={0}
            hoverY={200}
            rotate={-1}
            zIndex={1}
            content="Repaint"
          />
          <IntroBox
            handleClick={step4Click}
            hoverRotate={-2}
            hoverX={0}
            hoverY={-0}
            isHover={hoverBox}
            rotate={1}
            zIndex={2}
            content="Reflow"
          />
          <IntroBox
            handleClick={step3Click}
            hoverRotate={3}
            hoverX={0}
            hoverY={-200}
            isHover={hoverBox}
            rotate={-0.5}
            zIndex={3}
            content="Create RenderTree"
          />
          <IntroBox
            handleClick={step2Click}
            hoverRotate={-4}
            hoverX={0}
            hoverY={-400}
            isHover={hoverBox}
            rotate={0.5}
            zIndex={4}
            content="Create CssTree"
          />
          <IntroBox
            handleClick={step1Click}
            hoverRotate={4}
            hoverX={0}
            hoverY={-600}
            isHover={hoverBox}
            rotate={0}
            zIndex={5}
            content="Create DomTree"
          />
        </BoxWrapper>
      </LayoutWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* min-width: 100vw;
  max-width: 100vw; */
  width: 100vw;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
`;

const LayoutWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 40px;
  padding: 24px;
  border: 24px solid #000;

  @media (min-width: 1200px) and (max-width: 1400px) {
    padding: 16px;
    margin: 24px;
    border: 16px solid #000;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 72px;
  flex-direction: column;
  display: flex;
`;

const BoxWrapper = styled(motion.div)`
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
  position: relative;
  height: 140px;
  width: 100%;
  @media all and (max-width: 1500px) and (orientation: landscape) {
    height: 120px;
  }
`;
