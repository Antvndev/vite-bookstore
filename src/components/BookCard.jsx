export default function BookCard({ book }) {
  return (
    <div className="bg-background border border-text/10 rounded-lg p-3 shadow-sm hover:shadow-md transition hover:-translate-y-1 w-full max-w-[220px] mx-auto">
      
      <div className="w-full h-64 overflow-hidden rounded-md">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-69 object-cover rounded-md "
        />
      </div>

      <h3 className="text-lg font-bold mt-3 leading-tight line-clamp-2">
        {book.title}
      </h3>

      <p className="text-s text-text/70 mb-2">By {book.author}</p>

      <div className="text-primary text-s">
        {"★".repeat(book.rating)}
        <span className="text-text/30">
          {"★".repeat(5 - book.rating)}
        </span>
      </div>
    </div>
  );
}
