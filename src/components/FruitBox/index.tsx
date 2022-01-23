import { useCart } from '../../hooks/useCart';
import { IFruit } from '../../utils/types';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { FaCartPlus } from 'react-icons/fa'
import { BsCartCheckFill } from 'react-icons/bs'

interface FruitBoxProps {
  fruit: IFruit;
}

export function FruitBox({ fruit }: FruitBoxProps) {
  const { cart, addFruitInCart } = useCart()
  const navigate = useNavigate()

  const isFruitInCart = cart.some(cartFruit => cartFruit.name === fruit.name)

  return (
    <Container>
      <h2>{fruit.name}</h2>

      <span>Genus: {fruit.genus}</span>
      <span>Family: {fruit.family}</span>

      <div>
        <button
          className="see-more"
          onClick={() => navigate(`/fruit/${fruit.name}`, { 
            state: {
              fruit: fruit
            } 
          })}
        >
          See more
        </button>

        <button
          className="add-in-cart"
          onClick={() => addFruitInCart(fruit.name)}
        >
          {
            isFruitInCart ? <BsCartCheckFill size={30} /> : <FaCartPlus size={30}/>
          }
        </button>
      </div>
      
    </Container>
  );
};