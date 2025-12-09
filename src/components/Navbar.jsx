import Button from "./Button";
export default function Navbar() {
  return (
    <nav className="w-full p-4 shadow-sm flex flex-col gap-2 border-b-2 border-b-accent">
        {/* Top row: logo + account/cart */}
        <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <a href="https://antvndev.github.io/vite-bookstore/" className="text-3xl font-bold text-primary">BookStore</a>

            {/* Account + Cart */}
            <div className="flex gap-3 text-xl">
                <Button className="hover:bg-transparent" >
                    <a href="#" className="text-text transition duration-200 ease-in-out hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-current hover:stroke-none">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    </a>
                </Button>

                <Button className="bg-primary/60 transition duration-200 ease-in-out hover:bg-primary! hover:cursor-pointer ">
                    <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    </a>
                </Button>
            </div>
        </div>
 
        {/* Bottom row: nav links */}
        <div className="flex justify-start gap-4 mt-2">
            <Button>
                <a href="#">Books</a>
            </Button>
            <Button>
                <a href="#">Catalog</a>
            </Button>
            <Button>
                <a href="#">On Sale</a>
            </Button>
            <Button>
                <a href="#">Best sellers</a>
            </Button>
            <Button>
                <a href="#">Contact</a>
            </Button>
        </div>
        </nav>
  );
}