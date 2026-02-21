import Button from "./Button";
import { useRef } from "react";

const categories = [
    { id: 1, name: "Thriller", color: "from-primary/20 to-primary/5" },
    { id: 2, name: "Fantasy", color: "from-accent/20 to-accent/5" },
    { id: 3, name: "Romance", color: "from-secondary/20 to-secondary/5" },
    { id: 4, name: "Science Fiction", color: "from-text/10 to-background" },
    { id: 5, name: "Mystery", color: "from-primary/15 to-background" },
];

export default function BrowseCategories() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const distance = 260; // width of one card
        scrollRef.current.scrollBy({
            left: direction === "left" ? -distance : distance,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-14 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl text-primary font-bold mb-8 text-center">Browse Categories</h2>

            <div className="flex items-center gap-4">
                <Button variant="carousel" onClick={() => scroll("left")}>
                    ←
                </Button>

                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-hidden scrollbar-hide scroll-smooth px-1"
                >
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`min-w-[240px] p-6 rounded-2xl bg-gradient-to-br ${cat.color}
                          border border-text/10 backdrop-blur shadow-sm
                          hover:shadow-md transition`}
                        >
                            <h3 className="text-xl font-bold">{cat.name}</h3>
                            <p className="text-text/70 text-sm mt-1">Explore {cat.name} books</p>
                        </div>
                    ))}
                </div>

                <Button variant="carousel" onClick={() => scroll("right")}>
                    →
                </Button>
            </div>
        </section>
    );
}
