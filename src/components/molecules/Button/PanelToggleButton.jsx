import styled from 'styled-components';

export const PanelToggleButtonRight = styled.button`
  position: fixed;
  width: 50px;
  height: 45px;
  z-index: 3000;
  cursor: pointer;
  right: -5px;
  top: 15px;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.warning};
  text-shadow: 0 0 16px black;
  padding: 5px 10px;
  border: none;
  border-radius: 10px 0 0 10px;
  background-image: linear-gradient(to bottom,
  rgba(10, 10, 10, 0.6) 0%,
  rgba(0, 0, 0, 0.6) 50%,
  rgba(10, 10, 10, 0.8) 100%);
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.8);
  &:active,
  :focus {
    outline: none;
  }
`;

export const PanelToggleButtonLeft = styled(PanelToggleButtonRight)`
  left: -5px;
  border-radius:  0 10px 10px 0;
`;
