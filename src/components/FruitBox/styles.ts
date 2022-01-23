import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 30rem;

  padding: 2rem;

  border-radius: .5rem;

  background: var(--light-green);
  color: var(--black);

  box-shadow: 0 0 15px 8px rgba(0, 0, 0, .2);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  transition: box-shadow .4s;

  &:hover {
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, .2);
  }

  h2 {
    font-size: 2rem;
    color: var(--black);
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    button {
      margin-top: 1rem;
      padding: .5rem;

      flex-grow: 1;

      border: 0;
      border-radius: .5rem;

      font-size: 1.8rem;
      font-weight: bold;

      transition: filter .3s;

      &:hover {
        filter: brightness(1.1);
      }

      &.see-more {
        background-color: var(--green);
        color: var(--white);
      }

      &.add-in-cart {
        background-color: transparent;
        color: var(--green);
      }
    }
  }
`;
