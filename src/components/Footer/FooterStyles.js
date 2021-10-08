import styled from "styled-components"

export const FooterWrapper = styled.section`
	width: calc(100vw - 96px);
	text-align: center;
   max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`
export const LinkList = styled.div`
	border-top: 5px solid rgba(255, 255, 255, 0.1);
	
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;
  justify-content: center;
  padding:16px;

	
`


export const SocialIcon = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 20px;
  margin-right: 21px;
margin-left: 21px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`



export const FooterName = styled.h1`
font-size:5rem;
font-weight: 450;
margin-top: 0px;
margin-bottom:30px

`


export const FooterDesc = styled.h3`
font-size:2rem;
 margin-bottom:20px;
 font-weight: normal;

`



export const FooterCopy = styled.h5`
font-size:1.8rem;
margin-bottom: 20px;
font-weight:10;
color: #7a7a7a;

`