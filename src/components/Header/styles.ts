import styled from 'styled-components';
import { css } from "@emotion/react";

export const spinnerStyle = css`
  margin-left: 2rem;

  border-width: .2rem;
`;

export const Container = styled.header`
  width: 100%;
  padding: 2rem 6%;

  position: fixed;
  top: 0;

  background: var(--light-green);
  filter: drop-shadow(0 8px 15px rgba(0, 0, 0, .3));

  div {
    width: 100%;
    max-width: 130rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-family: 'Nunito', sans-serif;
    font-size: 3rem;
    font-weight: normal;
    color: var(--black);

    display: flex;
    align-items: center;

    cursor: pointer;

    transition: filter .3s;

    &:hover {
      filter: brightness(1.2);
    }

    span {
      font-size: 3rem;
      font-weight: bold;
      color: var(--green);
    }
  }

  button {
    border: 0;
    background: transparent;

    position: relative;

    transition: filter .3s;

    &:hover {
      filter: brightness(1.2);
    }

    svg {
      color: var(--black);
    }

    .cart-amount {
      width: 2.5rem;
      height: 2.5rem;

      border-radius: 50%;
      background-color: var(--green);
      color: var(--white);

      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(50%);

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
