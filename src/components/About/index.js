/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import Image from 'next/image';
import { skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>About Me</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            <p>Hello! I&apos;m victor, a frontend developer based in Abeokuta,Nigeria.</p>
            <p>
              I'm in love building simple buy yet modern user interfaces without living out
              accessibilty.
            </p>
            <p>
              my interest for software development started a few months after graduating from high
              school.My brother introduced me to programming in python ever since then I've being
              sucked into the world of software development.
              <br />
              My goal is to create equitable and performant web experience that scales
            </p>
            <br />
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image width={300} height={300} blu src="/avatar.jpg" alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
