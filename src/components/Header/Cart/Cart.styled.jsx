import styled from '@emotion/styled';

export const CartWrapper = styled.div`
  position: relative;
  color: #fefefe;
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 768px) {
    padding: 16px;
    border-radius: 40px;
  }
`;

export const CartBtn = styled.button`
  color: #fefefe;
  display: flex;
  gap: 4px;
  align-items: flex-end;
  border-radius: 20px;
  font-family: Play;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  justify-self: center;
`;

export const getStyledIcon = component => styled(component)`
  width: 24px;
  height: 24px;
`;
