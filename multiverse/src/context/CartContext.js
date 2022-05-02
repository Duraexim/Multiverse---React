import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    

    const addItem = (axieToAdd) => {
        if(!isInCart(axieToAdd.id)) {
            setCart([...cart, axieToAdd])
        } else {
            const newAxies = cart.map(axie => {
                if(axie.id === axieToAdd.id) {
                    const newAxie = {
                        ...axie,
                        quantity: axieToAdd.quantity
                    }
                    return newAxie
                } else {
                    return axie
                }
            })
            setCart(newAxies)
        }
    }


    const getQuantity = () => {
        let count = 0
        cart.forEach(axie => {
            count += axie.quantity
        })

        return count
    }
    
    const isInCart = (id) => {
        return cart.some(a=> a.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const axies = cart.filter(axie => axie.id !== id)
        setCart(axies)
    }

    const getQuantityAxie = (id) => {
        return cart.find(axie => axie.id === id)?.quantity
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(axie => {
            total += axie.quantity * axie.precio
        })
        
        return total
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem,
            getQuantityAxie,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext

