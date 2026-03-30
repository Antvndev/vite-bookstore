import { useCart } from "./Cartcontext";

export default function Navbar() {
    const { totalItems, setIsCartOpen } = useCart();

    return (
        <section className="w-full border-b-2 border-b-accent shadow-sm">
            <nav className="max-w-7xl mx-auto w-full p-2 flex flex-col gap-2" aria-label="Main navigation">
                {/* Top row */}
                <div className="flex justify-between items-center w-full">
                    <a
                        href="https://antvndev.github.io/vite-bookstore/"
                        aria-label="BookStore — go to homepage"
                        className="text-3xl font-bold text-primary"
                    >
                        BookStore
                    </a>

                    <div className="flex gap-3">
                        {/* Account */}
                        <button
                            aria-label="My account"
                            className="p-2 rounded-md text-text hover:text-primary hover:bg-secondary/40 transition duration-200 hover:cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </button>

                        {/* Cart */}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            aria-label={totalItems > 0 ? `Open cart, ${totalItems} item${totalItems !== 1 ? "s" : ""}` : "Open cart"}
                            className="relative p-2 bg-primary/60 rounded-md hover:bg-primary transition duration-200 hover:cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            {totalItems > 0 && (
                                <span aria-hidden="true" className="absolute -top-1.5 -right-1.5 bg-accent text-background text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Nav links */}
                <nav className="flex justify-start gap-1 mt-2" aria-label="Site sections">
                    {["Books", "Catalog", "On Sale", "Best Sellers", "Contact"].map((label) => (
                        <a
                            key={label}
                            href="#"
                            className="px-3 py-1.5 rounded-md font-bold font-body text-text hover:bg-secondary/70 transition duration-200 hover:cursor-pointer"
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </nav>
        </section>
    );
}