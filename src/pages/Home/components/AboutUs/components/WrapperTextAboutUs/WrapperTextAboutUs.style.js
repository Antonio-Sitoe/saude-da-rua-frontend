import styled from 'styled-components';

export const AboutTitle = styled.p`
  line-height: 60px;
  color: ${(props) => props.theme.colors.primary_light};
  width: 100%;
  width: 479px;
  height: 60px;
  margin-left: 485px;
  margin-top: -600px;
  display: flex;
  flex-wrap: wrap;
`;

export const AboutText = styled.p`
  line-height: 32px;
  font-feature-settings: 'pnum' on, 'onum' on;
  color: ${(props) => props.theme.colors.primary_light};
  margin-top: 50px;
  margin-bottom: 250px;
  width: 477px;
  height: 530px;
  margin-left: 500px;
  display: flex;
  flex-wrap: wrap;
`;
