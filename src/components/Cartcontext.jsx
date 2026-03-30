import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (book) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === book.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === book.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prev, { ...book, qty: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQty = (id, qty) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item.id !== id) return item;

                // Prevent going below 1
                if (qty < 1) return { ...item, qty: 1 };

                return { ...item, qty };
            })
        );
    };

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQty,
                totalPrice,
                totalItems,
                isCartOpen,
                setIsCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}