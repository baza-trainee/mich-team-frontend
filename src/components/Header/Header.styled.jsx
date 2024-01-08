import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  position: relative;
  ${props =>
    props.className.search(/main-header/g) === -1 &&
    `
    background-color: #0F0000;
  `}

  z-index: 100;
`;
export const HeaderWrapper = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  min-height: 56px;
  @media screen and (min-width: 768px) {
    padding: 4px 32px;
    gap: 8px;
    justify-content: flex-end;
    .element:nth-of-type(1) {
      order: 1;
      margin-right: auto;
    }
    .element:nth-of-type(2) {
      order: 5;
    }
    .element:nth-of-type(3) {
      margin-right: 44.5px;
      order: 2;
    }
    .element:nth-of-type(4) {
      order: 3;
    }
    .element:nth-of-type(5) {
      order: 4;
    }
  }
  @media screen and (min-width: 1440px) {
    padding: 8px 80px;
    gap: 16px;
    .element:nth-of-type(3) {
      margin-right: 308.5px;
      order: 2;
    }
  }
  ${props =>
    props.className.search(/main-header/g) != -1 &&
    `
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
`}
`;
export const Logo = styled.div``;
export const LogoWrapper = styled.a``;

export const getStyledIcon = component => styled(component)`
  width: 74px;
  height: 42px;
  fill: #fefefe;
  @media screen and (min-width: 768px) {
    width: 134px;
    height: 72px;
  }
  @media screen and (min-width: 1440px) {
    width: 135px;
    height: 68px;
  }
`;
