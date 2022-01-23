import { useLocation } from 'react-router-dom'
import { useCart } from '../../hooks/useCart';

import { Container } from './styles';
import { FaCartPlus } from 'react-icons/fa';
import { BsCartCheckFill } from 'react-icons/bs';

export function Fruit() {
  const { cart, addFruitInCart } = useCart()

  
  const location = useLocation()
  const { fruit }: any = location.state
  
  const isFruitInCart = cart.some(cartFruit => cartFruit.name === fruit.name)
  console.log(fruit)

  return (
    <Container>
      <div>
        <h2>{fruit.name}</h2>

        <button
          onClick={() => addFruitInCart(fruit.name)}
        >
          {
            isFruitInCart ? <BsCartCheckFill size={30} /> : <FaCartPlus size={30}/>
          }
        </button>
      </div>

      <h3>Genus: <span>{fruit.genus}</span></h3>
      <h3>Family: <span>{fruit.family}</span></h3>
      <h3>Order: <span>{fruit.order}</span></h3>

      <table>
        <thead>
          <tr>
            <th>Nutrition</th>
            <th>Value (per 100g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carbohydrates</td>
            <td>{fruit.nutritions.carbohydrates}</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>{fruit.nutritions.protein}</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>{fruit.nutritions.sugar}</td>
          </tr>
          <tr>
            <td>Calories</td>
            <td>{fruit.nutritions.calories}</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>{fruit.nutritions.fat}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};