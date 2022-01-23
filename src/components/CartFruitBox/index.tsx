import { useCart } from '../../hooks/useCart';
import { ICart } from '../../utils/types';

import { Container } from './styles';
import { FaTrash } from 'react-icons/fa'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

interface CartFruitBoxProps {
  fruit: ICart;
}

export function CartFruitBox({ fruit }: CartFruitBoxProps) {
  const {removeFruitFromCart, increaseFruitAmount, decreaseFruitAmount} = useCart()

  return (
    <Container>
      <td>{fruit.name}</td>
      <td>
        <button onClick={() => decreaseFruitAmount(fruit.name)}>
          <AiFillMinusCircle color="var(--red)" size={30} />
        </button>
        <span>{fruit.amount}</span>
        <button onClick={() => increaseFruitAmount(fruit.name)}>
          <AiFillPlusCircle color="var(--green)" size={30} />
        </button>
      </td>
      <td>
        <button onClick={() => removeFruitFromCart(fruit.name)} >
          <FaTrash color="var(--red)" size={25} />
        </button>
      </td>
    </Container>
  );
};