import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {

        const exist = cartItems.find(item => item._id === book._id);

        if (exist) {

            setCartItems(
                cartItems.map(item =>
                    item._id === book._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );

        } else {

            setCartItems([
                ...cartItems,
                {
                    ...book,
                    quantity: 1
                }
            ]);

        }

    };

    const removeFromCart = (id) => {

        setCartItems(
            cartItems.filter(item => item._id !== id)
        );

    };

    return (

        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart
            }}
        >

            {children}

        </CartContext.Provider>

    );

};

export const useCart = () => useContext(CartContext);