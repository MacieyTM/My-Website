import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Witaj na mojej<br />
          stronie portfolio!
        </SectionTitle>
        <SectionText>
        Maciej Grochowski | Fullstack Developer oraz Mobile Engineer w technologiach Angular/React/Ionic/React Native
        </SectionText>
        <a href="https://macieytm.github.io/About-Me" target="_blank">
        <Button onClick={props.handleClick}>Moja wizytówka</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
