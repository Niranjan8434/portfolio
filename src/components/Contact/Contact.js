import React from 'react';
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';
import {GrEmoji} from 'react-icons/gr';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxIcon, BoxNum, BoxText } from './ContactStyle';


const Contact = () => (
  <Section>
  <SectionDivider />
    <SectionTitle>Contact Me</SectionTitle>
    <Boxes>
        <Box>
        <BoxIcon><GrEmoji size='3.6rem'/></BoxIcon>
        <BoxNum>Name</BoxNum>
        <BoxText>Niranjan Kumhar</BoxText>
        </Box>
        <Box>
        <BoxIcon><AiOutlineHome size='3.6rem' /></BoxIcon>
        <BoxNum>Location</BoxNum>
        <BoxText>Bokaro, Jharkhand, India, Pincode:829144</BoxText>
        </Box>
        <Box>
        <BoxIcon><AiOutlinePhone size='3.6rem' /></BoxIcon>
        <BoxNum>Phone</BoxNum>
        <BoxText>+91 8434851001</BoxText>
        </Box>
        <Box>
        <BoxIcon><AiOutlineMail size='3.6rem' /></BoxIcon>
        <BoxNum>E-mail</BoxNum>
        <BoxText>niranjan8434@gmail.com</BoxText>
        </Box>
    </Boxes>
  </Section>
);

export default Contact;



{/* <Boxes>
{data.map((card, index) => (
  <Box key={index}>
  <BoxIcon></BoxIcon>
  <BoxNum>{card.name}</BoxNum>
  <BoxText>{card.desc}</BoxText>
  </Box>
))}
</Boxes> */}