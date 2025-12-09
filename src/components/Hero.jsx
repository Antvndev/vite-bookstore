import Button from "./Button";

export default function Hero() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE — TEXT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight">
            Discover Your Next Favorite Book
          </h1>

          <p className="text-text/70 text-base md:text-lg max-w-md">
            Explore thousands of books across all genres. Find bestsellers, new releases, 
            and curated collections tailored just for you.
          </p>

          <div className="flex gap-4">
            <Button variant="secondary">
              Browse Catalog
            </Button>
            <Button variant="primary">
              Shop Now
            </Button>
          </div>
        </div>
        
        {/* RIGHT SIDE — IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-xl shadow-md flex items-center justify-center overflow-hidden">
            {/* Replace this with real image later */}
            <img 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" 
              alt="Books"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
