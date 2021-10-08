import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    
    <SectionTitle main> <SectionDivider />Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}> 
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks target="_blank" href={p.visit}>Visit</ExternalLinks>
              <ExternalLinks target="_blank" href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;



// import React from 'react';

// import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr,Space, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
// import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// import { projects } from '../../constants/constants';

// const Projects = () => (
  
//  <Section main id="projects">
//  <Space />
//    <SectionDivider  />
//    <SectionTitle>Projects</SectionTitle>
//    <GridContainer>
//      {projects.map(({id, image, title, description, tags, source, visit}) => (
//        <BlogCard key={id}>
//          <Img src={image} />
//          <TitleContent>
//          <HeaderThree title>{title}</HeaderThree>
//            <Hr />
//          </TitleContent>
//          <CardInfo>{description}</CardInfo>
//          <div>
//            <TitleContent>Stack</TitleContent>
//            <TagList>
//              {tags.map((tag, i) => (
//                <Tag key>{tag}</Tag>
//              ))}
//            </TagList>
//          </div>
//          <UtilityList>
//            <ExternalLinks target="_blank" href={visit}>Visit</ExternalLinks>
//            <ExternalLinks href={source}>Source</ExternalLinks>
//          </UtilityList>
//        </BlogCard>
//      ))}
//    </GridContainer>
//  </Section>
// );

// export default Projects;