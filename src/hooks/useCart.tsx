import { ReactNode, createContext, useContext, useState, useCallback } from "react";
import { ICart } from "../utils/types";
import { toast } from "react-toastify";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: ICart[];
  addFruitInCart: (fruitName: string) => void;
  removeFruitFromCart: (fruitName: string) => void;
  increaseFruitAmount: (fruitName: string) => void;
  decreaseFruitAmount: (fruitName: string) => void;
  cleanCart: () => void;
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ICart[]>([])

  function addFruitInCart(fruitName: string) {
    try {
      const isFruitAlreadyInCart = cart.some(fruit => fruit.name === fruitName)
    
      isFruitAlreadyInCart
      ? toast.info(`There's already ${fruitName} in the cart!`)
      : setCart([...cart, { name: fruitName, amount: 1 }])

    } catch {
      toast.error('The addition failed!')
    }
  }

  function removeFruitFromCart(fruitName: string) {
    try {
      const isFruitInCart = cart.some(fruit => fruit.name === fruitName)

      if (isFruitInCart) {
        const cartWithoutFruit = cart.filter(fruit => fruit.name !== fruitName)

        setCart(cartWithoutFruit)
      } else {
        toast.warn(`There's not ${fruitName} in cart!`)
      }
      
    } catch {
      toast.error('Error to remove fruit from cart!')
    }
  }

  function increaseFruitAmount(fruitName: string) {
    try {
      const fruit = cart.find(fruit => fruit.name === fruitName)

      if (fruit) {
        fruit.amount += 1

        setCart([...cart])
      } else {
        toast.warn(`There's not ${fruitName} in cart!`)
      }
      
    } catch {
      toast.error(`The increment of ${fruitName}'s amount failed!`)
    }
  }

  function decreaseFruitAmount(fruitName: string) {
    try {
      const fruit = cart.find(fruit => fruit.name === fruitName)

      if (fruit) {

        const fruitAmountIsMoreThanOne = fruit.amount > 1

        if (fruitAmountIsMoreThanOne) {
          fruit.amount -= 1

          setCart([...cart])
        } else {
          toast.warn(`If you want ${fruitName}'s amount to be zero, please remove it from the cart!`)
        }
        
      } else {
        toast.warn(`There's not ${fruitName} in cart!`)
      }
      
    } catch {
      toast.error(`The decrement of ${fruitName}'s amount failed!`)
    }
  }

  function cleanCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addFruitInCart,
        removeFruitFromCart,
        increaseFruitAmount,
        decreaseFruitAmount,
        cleanCart
      }}
    >
      { children }
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}