import { useFruits } from '../../hooks/useFruits'
import { FruitBox } from './../../components/FruitBox/index';
import ClipLoader from "react-spinners/ClipLoader";

import { Container } from './styles'

export function Home() {
  const { fruits } = useFruits()

  // if (isLoading) {
  //   return (
  //     <Container>
  //       <ClipLoader
  //         color="var(--green)"
  //         loading={isLoading}
  //         css={spinnerStyle}
  //         size={150}
  //       />
  //     </Container>
  //   )
  // }
  
  return (
    <Container>
      <section>
        {fruits.map(fruit => (
          <FruitBox
            key={fruit.id}
            fruit={fruit}
          />
        ))}
      </section>
    </Container>
  )
}