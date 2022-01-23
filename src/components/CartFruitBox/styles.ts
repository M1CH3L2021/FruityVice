import styled from 'styled-components';

export const Container = styled.tr`
  svg {
    transition: filter .3s;

    &:hover {
      filter: brightness(1.2);
    }
  }

  span {
    font-size: 2.2rem;
  }
`;
