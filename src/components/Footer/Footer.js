import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


import {  FooterWrapper,LinkList, SocialContainer, SocialIcon,FooterName, FooterDesc, FooterCopy } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      
        <SocialContainer>
        <SocialIcon href="https://github.com/niranjan8434">
       <AiFillGithub size="3rem" />
     </SocialIcon>
     <SocialIcon href="https://www.linkedin.com/in/niranjan-kumar-4bb865190">
       <AiFillLinkedin size="3rem" />
     </SocialIcon>
     <SocialIcon href="https://instagram.com/niranjan2435">
       <AiFillInstagram size="3rem" />
       </SocialIcon>
       </SocialContainer>
       
       <FooterName>    Niranjan Kumhar   </FooterName>
       <FooterDesc> Personal Portfolio Website  </FooterDesc>
       <FooterCopy> Copyright © 2021 All Rights Reserved.   </FooterCopy>

      </LinkList>
      
    </FooterWrapper>
  );
};

export default Footer;
