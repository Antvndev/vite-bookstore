import { useCart } from "./Cartcontext";
import Button from "./Button";

export default function BookCard({ book }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-background border border-text/10 rounded-lg p-3 shadow-sm hover:shadow-md transition hover:-translate-y-1 w-full max-w-[220px] mx-auto flex flex-col">
      <div className="w-full h-64 overflow-hidden rounded-md shrink-0">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col flex-1 mt-3">
        <h3 className="text-lg font-bold leading-tight line-clamp-2 min-h-12">
          {book.title}
        </h3>

        <p className="text-sm text-text/70 mt-1 mb-1">
          By {book.author}
        </p>

        {/* Accent is OK here → decorative rating */}
        <div className="text-accent text-sm mb-2">
          {"★".repeat(book.rating)}
          <span className="text-text/30">
            {"★".repeat(5 - book.rating)}
          </span>
        </div>

        {/* Price = IMPORTANT → use primary */}
        <p className="text-primary font-bold text-base mt-auto mb-3">
          ${book.price.toFixed(2)}
        </p>

        <Button
          variant="addToCart"
          onClick={() => addToCart(book)}
          aria-label={`Add ${book.title} to cart`}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}