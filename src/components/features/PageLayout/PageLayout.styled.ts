import styled from "styled-components";
import { setFlex } from "../../common/utils";

export const LayoutWrapper = styled.div`
  ${setFlex('flex-start', 'stretch', 'column')}
  max-width: 1000px;
  margin: 0 auto;

  .nav {
    ${setFlex('space-between', 'stretch', 'row')}
    padding: 2rem 1rem;
    a {
      text-decoration: none;
      color: ${(p) => p.theme.colors.white};
    }
  }
`;
