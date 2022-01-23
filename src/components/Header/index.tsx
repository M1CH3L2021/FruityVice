import { useCart } from '../../hooks/useCart';
import { useFruits } from '../../hooks/useFruits';
import { useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';

import { Container, spinnerStyle } from './styles';
import { FaShoppingCart } from 'react-icons/fa'

export function Header() {
  const { cart } = useCart()
  const { fruits } = useFruits()
  const navigate = useNavigate()

  const isThereFruitInCart = cart.length > 0
  const isLoading = fruits.length === 0

  return (
    <Container>
      <div>
        <h1 onClick={() => navigate('/')}>
          Fruity<span>Vice</span>
          <ClipLoader
            color="var(--green)"
            loading={isLoading}
            css={spinnerStyle}
            size={30}
          />
        </h1>

        <button onClick={() => navigate('/cart')} >
          <FaShoppingCart size={30} />
          {
            isThereFruitInCart && (
              <div className="cart-amount">
                <span>{ cart.length }</span>
              </div>
            )
          }
        </button>
      </div>
    </Container>
  );
};