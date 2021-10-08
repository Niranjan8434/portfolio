import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { RightSection, LeftSection,Space,SectionGreeting,UtilityList,Btn,SectionSubTitle } from './HeroStyles';

const Hero = () => (
 <Section row >
 <Space />
   <LeftSection>
   
      <SectionTitle>
      <SectionGreeting>Hello, My name is</SectionGreeting>
      Niranjan Kumhar
           </SectionTitle>
      <SectionSubTitle>A Web Developer</SectionSubTitle>

             <UtilityList>
             <Btn> <Button aria-label="View Resume Button"  onClick={()=> window.open('../images/Niranjan kumar.pdf')}>View CV</Button></Btn>
             <Btn href="../images/Niranjan kumar.pdf" download>  <Button>Download CV</Button></Btn></UtilityList> 
    </LeftSection>
    <RightSection src="../images/home.png"></RightSection>
  </Section>
);

export default Hero;