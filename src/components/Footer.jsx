export default function Footer() {
  return (
    <footer className="bg-background text-text px-4 py-10 font-body">

      {/* TOP SECTION */}
      <div className=" max-w-7xl mx-auto text-left">
        <h2 className="font-heading text-2xl font-bold text-primary">
          Bookstore
        </h2>
        <div className="flex gap-4 mt-3 flex-wrap text-base">

          {/** PHONE */}
          <a href="/careers" className="group relative px-4 py-1.5 rounded-full overflow-hidden border border-secondary/50 bg-secondary/20 text-text font-medium transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)]">
            <span className="absolute inset-0 bg-secondary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)]">
            </span>

            <span className="relative z-10">
              012345678
            </span>
          </a>

          {/** SHOP */}
          <a href="/shop" className=" group relative px-4 py-1.5 rounded-full overflow-hidden border border-secondary/50 bg-secondary/20 text-text font-medium transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)]">
            <span className=" absolute inset-0 bg-secondary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)]">
            </span>

            <span className="relative z-10">
              Shop
            </span>
          </a>

          {/** CAREERS */}
          <a href="/careers" className="group relative px-4 py-1.5 rounded-full overflow-hidden border border-secondary/50 bg-secondary/20 text-text font-medium transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)]">
            <span className="absolute inset-0 bg-secondary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)]"></span>

            <span className="relative z-10">
              Careers
            </span>
          </a>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-800">
        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="transition hover:text-primary hover:underline underline-offset-4">
                Bookstore
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-primary hover:underline underline-offset-4">
                School Supplies
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-primary hover:underline underline-offset-4">
                Office Supplies
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="transition hover:text-primary hover:underline underline-offset-4">
                About us
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-primary hover:underline underline-offset-4">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Payment & Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>

          {/* Payment Icons */}
          <div className="flex items-center gap-4 mt-4 opacity-90">

            {/* Visa */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M16.539 9.186a4.2 4.2 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.34.34 0 0 0-.149-.199 7 7 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69z"></path>
            </svg>

            {/* Mastercard */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M11.454 17.021q.073.062.151.122a6.17 6.17 0 0 1-3.42 1.03A6.17 6.17 0 0 1 2.01 12a6.175 6.175 0 0 1 9.592-5.144c-.05.043-.1.082-.138.126A6.63 6.63 0 0 0 9.166 12c0 1.925.833 3.755 2.288 5.021m4.361-11.195a6.14 6.14 0 0 0-3.416 1.03c.049.043.099.082.137.126 1.462 1.263 2.299 3.094 2.299 5.018s-.835 3.753-2.288 5.021q-.075.062-.151.122a6.16 6.16 0 0 0 3.418 1.03 6.174 6.174 0 1 0 .001-12.347M12 7.15A6.15 6.15 0 0 0 9.644 12 6.15 6.15 0 0 0 12 16.853 6.16 6.16 0 0 0 14.357 12 6.15 6.15 0 0 0 12 7.15"></path>
            </svg>
            {/* Apple Pay */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M19.665 16.811a10.3 10.3 0 0 1-1.021 1.837q-.807 1.15-1.316 1.592-.787.723-1.692.744-.649.001-1.562-.373-.914-.372-1.683-.371-.805-.001-1.73.371-.924.375-1.495.393-.866.038-1.729-.764-.55-.48-1.377-1.648-.885-1.245-1.455-2.891-.61-1.78-.611-3.447 0-1.91.826-3.292a4.86 4.86 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662q.69.001 1.81.422c1.12.421 1.227.422 1.436.422q.237 0 1.593-.498 1.279-.46 2.163-.384 2.4.192 3.6 1.895-2.145 1.301-2.123 3.637.02 1.82 1.317 3.023a4.3 4.3 0 0 0 1.315.863q-.159.46-.336.882M15.998 2.38q-.001 1.426-1.039 2.659c-.836.976-1.846 1.541-2.941 1.452a3 3 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688q.528-.606 1.343-1.009.813-.397 1.536-.435.02.192.019.381"></path>
            </svg>

            {/* Google Pay */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M13.93 9a1.84 1.84 0 0 0-1.28-.5h-2v5.74h.75V11.9h1.2a1.85 1.85 0 0 0 1.28-.5 1.63 1.63 0 0 0 .52-1.23A1.58 1.58 0 0 0 13.93 9m-.5 1.9a1 1 0 0 1-.73.3h-1.25v-2h1.25a.9.9 0 0 1 .73.3 1 1 0 0 1 0 1.38zm2.75-.72a1.92 1.92 0 0 0-1.63.77l.65.4a1.09 1.09 0 0 1 1-.52 1.1 1.1 0 0 1 .72.27.81.81 0 0 1 .3.65v.18a1.9 1.9 0 0 0-1.07-.25 1.9 1.9 0 0 0-1.25.32 1.2 1.2 0 0 0-.45 1 1.35 1.35 0 0 0 .45 1 1.74 1.74 0 0 0 1.1.37 1.45 1.45 0 0 0 1.23-.67v.54H18v-2.41a1.56 1.56 0 0 0-.47-1.2 1.84 1.84 0 0 0-1.35-.45m.7 3.17a1.18 1.18 0 0 1-.83.35.94.94 0 0 1-.57-.2.56.56 0 0 1-.25-.47.6.6 0 0 1 .3-.53 1.2 1.2 0 0 1 .75-.22 1.58 1.58 0 0 1 1 .27 1 1 0 0 1-.4.8M22 10.33v-.03l-.01.03zm-1.92 2.82h-.03l-1.17-2.82h-.8L19.7 14l-.92 1.97h.75l2.46-5.64h-.76zM5.31 10.73V12h1.77a1.52 1.52 0 0 1-.65 1 2 2 0 0 1-3-1.05 1.9 1.9 0 0 1 0-1.27 1.91 1.91 0 0 1 1.88-1.35 1.83 1.83 0 0 1 1.27.5l1-.95A3.14 3.14 0 0 0 5.33 8 3.26 3.26 0 0 0 2.4 9.83a3.24 3.24 0 0 0 0 3 3.28 3.28 0 0 0 2.95 1.82 3.24 3.24 0 0 0 2.19-.79 3.22 3.22 0 0 0 1-2.43c0-.22 0-.45-.05-.67z" />
            </svg>

          </div>

          {/* Service List */}
          <ul className="space-y-3 mt-5">
            <li className="flex items-center gap-2">
              {/* Truck */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                className="w-6 h-6 stroke-text hover:stroke-primary transition">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M8.25 18.75a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.4A1.1 1.1 0 0 1 2.25 17.6V14m17.25 4.75a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.2a1.1 1.1 0 0 0 1.1-1.2c-.4-3-1.4-6.2-3.2-9.2a2.1 2.1 0 0 0-1.6-.9H14.25M16.5 18.75h-2.25m0-11.2V6.6c0-.6-.4-1.1-.9-1.2a48.6 48.6 0 0 0-10 0c-.6.1-.9.6-.9 1.2v7.6" />
              </svg>
              Home Delivery
            </li>

            <li className="flex items-center gap-2">
              {/* Location */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                className="w-6 h-6 stroke-text hover:stroke-primary transition">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Click & Collect
            </li>

            <li className="flex items-center gap-2">
              {/* Box */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                className="w-6 h-6 stroke-text hover:stroke-primary transition">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="m21 7.5-9-4.5-9 4.5m18 0-9 4.5m9-4.5v9l-9 4.5m0-9-9-4.5m9 4.5v9m-9-13.5v9l9 4.5" />
              </svg>
              Delivery to Locker
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl opacity-90">

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" className="hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="w-7 h-7 fill-current">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5H15c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.1v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" className="hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="w-7 h-7 fill-current">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3zm6.1-.8a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
              </svg>
            </a>

            {/* TikTok */}
            <a href="https://tiktok.com" target="_blank" className="hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="w-7 h-7 fill-current">
                <path d="M17 1c.3 2.3 1.7 3.7 4 4v3c-1.7 0-3.3-.5-4.6-1.5v7.5a6 6 0 1 1-6-6c.5 0 1 .1 1.5.2v3a3 3 0 1 0 3 3V1h2.1z" />
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-secondary pt-5 text-center text-sm opacity-70">
        <p>© 2026 Your Company. All rights reserved.</p>
        <p>Design by Tony • Developed by Tony</p>
      </div>
    </footer>
  );
}