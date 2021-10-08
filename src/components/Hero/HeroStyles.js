import styled from 'styled-components';

export const SectionGreeting = styled.div`
  width: 100%;
 font-size:2rem;
 @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    font-size:1.4rem;  
  }
`
export const SectionSubTitle = styled.div`
  width: 100%;
 font-size:3.6rem;
 margin:40px 0;
 @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    font-size:2.2rem;  
  }
`
export const LeftSection = styled.div`
  width: 90%;
  border-left: 4.5px solid #945DD6;
  border-height: 10px;
  padding-left: 4.5rem;
  z-index:10;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`
export const UtilityList = styled.div`
  list-style-type: none;
 width: 100%;
  display: flex;
  margin:1.5rem,0;
`
export const Btn = styled.a`
padding-right: 2.5rem;
margin:0 0;

`
export const Space = styled.div`
margin:30px 0;
`




export const RightSection = styled.img`
  ${'' /* width: 100%; */}
  z-index:1;
  width: 340px;
  right: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 10px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`
;
// .home__img {
//   position: absolute;
//   right: 0;
//   bottom: 0;
// }

// .home__img img {
//   width: 240px;
// }