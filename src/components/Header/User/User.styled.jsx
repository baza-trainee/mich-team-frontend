import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  position: relative;
  color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserBtn = styled.button`
  color: #fefefe;
  display: flex;
  align-items: center;
  background-color: transparent;
  justify-self: center;
  align-self: center;
  padding: 6px;
  border-radius: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 768px) {
    padding: 16px;
    border-radius: 40px;
  }
`;

export const UserDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 190px;
  top: 100%;
  right: 0;
  border-radius: 4px;
  background-color: #fdfdfd;
  font-family: Play;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const UserLink = styled.a`
  display: flex;
  align-items: center;
  padding: 16px 12px;
  gap: 8px;
  width: 100%;
  border-radius: 4px 4px 0 0;

  color: #0f0000;
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;

  border-bottom: 1px solid #b3b3b3;
  &:last-of-type {
    border-bottom: none;
    border-radius: 0 0 4px 4px;
  }
  &:hover {
    background-color: #d9d9d9;
  }
`;

export const getStyledIcon = (component, width, height, stroke) => styled(
  component
)`
  width: ${width};
  height: ${height};
  stroke: ${stroke};
`;
