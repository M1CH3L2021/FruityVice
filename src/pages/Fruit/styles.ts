import styled from 'styled-components';

export const Container = styled.section`
  width: 96%;
  max-width: 120rem;
  margin: 15rem auto 10rem;
  padding: 2rem 4%;

  border-radius: 1rem;
  background: var(--light-green);

  box-shadow: 0 0 15px 8px rgba(0, 0, 0, .2);

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    max-width: 80rem;
    margin-bottom: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    h2 {
      font-size: 2.5rem;
    }

    button {
      background: transparent;
      color: var(--green);

      border: 0;
      border-radius: .5rem;

      font-size: 1.8rem;
      font-weight: bold;

      transition: filter .3s;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }

  h3 {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;

    margin-top: 1rem;

    font-size: 1.8rem;

    align-self: flex-start;

    span {
      font-weight: normal;
    }
  }

  table {
    width: 100%;
    max-width: 80rem;
    margin: 4rem auto 0;
  }
  
  thead > tr {
    background: var(--black);
    color: var(--white);
  }
  
  tbody td:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  th {
    font-size: 1.8rem;
  }

  tr {
    background: var(--white);
  }
  
  th, td {
    padding: 1.5rem;

    &:first-child {
      border-radius: .5rem 0 0 .5rem;
    }

    &:last-child {
      text-align: center;

      border-radius: 0 .5rem .5rem 0;
    }
  }

`;
