import books from "../data/books.json";
import BookCard from "./BookCard";

export default function FeaturedBooks() {
    const featuredIDs = [1, 4, 7, 12, 11];
    const randomBooks = books.filter(b => featuredIDs.includes(b.id));


    return (
        <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
            Featured Books
        </h2>

        <div className="flex justify-center gap-6 flex-wrap max-w-7xl mx-auto px-4">
            {randomBooks.map((book) => (
            <BookCard key={book.id} book={book} />
            ))}
        </div>
        </section>
    );
}