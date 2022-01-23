import styled from 'styled-components';

export const Container = styled.section`
  width: 96%;
  max-width: 120rem;
  margin: 15rem auto 10rem;
  padding: 5rem 4% 5rem;

  border-radius: 1rem;
  background: var(--light-green);

  box-shadow: 0 0 15px 8px rgba(0, 0, 0, .2);

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 3rem;

    font-size: 2.5rem;
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
  }

  button {
    background: transparent;
    border: 0;
  }

  table {
    width: 100%;
    max-width: 80rem;
    margin: 5rem auto 0;
  }
  
  thead > tr {
    background: var(--black);
    color: var(--white);
  }
  
  tbody td:nth-child(2) {
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
