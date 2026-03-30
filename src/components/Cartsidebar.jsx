import { useCart } from "./Cartcontext";
import { useNavigate } from "react-router-dom";

export default function CartSidebar() {
    const { cartItems, removeFromCart, updateQty, totalPrice, isCartOpen, setIsCartOpen } = useCart();
    const navigate = useNavigate();

    return (
        <>
            {/* Backdrop — no blur, just a dark overlay */}
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setIsCartOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar panel — max-h so it never fills full screen height on mobile */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Shopping cart"
                className={`fixed right-4 top-4 bottom-4 w-[min(320px,calc(100vw-2rem))] bg-background rounded-xl shadow-2xl z-50 flex flex-col
          transition-all duration-300 ease-in-out
          ${isCartOpen ? "translate-x-0 opacity-100" : "translate-x-[calc(100%+2rem)] opacity-0"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-text/10 shrink-0">
                    <h2 className="text-xl font-bold text-primary">
                        Your Cart {cartItems.length > 0 && <span className="text-text/50 font-normal text-base">({cartItems.length})</span>}
                    </h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        aria-label="Close cart"
                        className="w-8 h-8 flex items-center justify-center rounded-md text-text/50 hover:text-text hover:bg-text/5 transition hover:cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                        </svg>
                    </button>
                </div>

                {/* Items — scrollable */}
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full gap-3 py-12 text-text/40">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <p className="text-base">Your cart is empty</p>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4 items-start py-4 border-b border-text/8 last:border-0">
                                <img
                                    src={item.cover}
                                    alt={item.title}
                                    className="w-14 h-20 object-cover rounded-md shrink-0"
                                />

                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-base leading-snug line-clamp-2">
                                        {item.title}
                                    </p>

                                    <p className="text-text/60 text-sm mt-1 mb-3">
                                        {item.author}
                                    </p>

                                    {/* Qty */}
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => updateQty(item.id, item.qty - 1)} disabled={item.qty === 1} className="w-8 h-8 text-lg rounded-md bg-secondary/40 hover:bg-secondary flex items-center justify-center">
                                            −
                                        </button>

                                        <span className="text-base w-6 text-center font-semibold">
                                            {item.qty}
                                        </span>

                                        <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 text-lg rounded-md bg-secondary/40 hover:bg-secondary flex items-center justify-center">
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end gap-3">
                                    <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 flex items-center justify-center rounded text-text/40 hover:text-red-400 hover:bg-red-50">
                                        ✕
                                    </button>

                                    <p className="text-primary font-bold text-base">
                                        ${(item.price * item.qty).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="px-4 py-4 border-t border-text/10 space-y-3 shrink-0">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg text-text">Total</span>
                            <span className="text-primary font-bold text-lg">${totalPrice.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={() => { setIsCartOpen(false); navigate("/checkout"); }}
                            className="w-full py-2.5 rounded-md bg-primary text-background font-bold text-base
                hover:bg-primary/80 active:scale-95 transition duration-200 hover:cursor-pointer"
                        >
                            Checkout →
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}