import { useCart } from '../../hooks/useCart';
import { CartFruitBox } from '../../components/CartFruitBox';

import { Container } from './styles';
import { FaTrash, FaSadCry } from 'react-icons/fa'

export function Cart() {
  const { cart, cleanCart } = useCart()

  const cartIsEmpty = cart.length === 0

  if (cartIsEmpty) {
    return (
      <Container>
        <p>
          Oooh, it seems like there's no fruit in your cart...
          Go back to the home page and pick up some!
        </p>
        <FaSadCry size={70}/>
      </Container>
    )
  }

  return (
    <Container>
      <h2>Your cart</h2>
      <span>Items: {cart.length}</span>
      <table>
        <thead>
          <tr>
            <th>Fruit</th>
            <th>Amount (Kg)</th>
            <th>
              <button onClick={cleanCart}>
                <FaTrash color="red" size={30} />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map(fruit => (
              <CartFruitBox key={fruit.name} fruit={fruit} />
            ))
          }
        </tbody>
      </table>
    </Container>
  );
};