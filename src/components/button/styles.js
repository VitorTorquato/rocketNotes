import styled from "styled-components";
import theme from "../../styles/theme";



export const Container = styled.button`
  width: 100%;
  background-color: ${theme.COLORS.ORANGE};
  color: ${theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding: 0 16px;

  border-radius: 10px;
  font-weight: 500;



  &:disabled {
    opacity: 0.5;
  }
`