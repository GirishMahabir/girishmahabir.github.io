import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My Portfolio <br />
        Title
      </SectionTitle>
      <SectionText>
        One of the most important things in the world is to have a website. [My offering!]
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;