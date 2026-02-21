import Button from "./Button";

export default function AboutSection() {
    return (
        <section className="relative py-16 px-6 bg-primary/20 overflow-hidden">
            <div className="relative max-w-5xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl font-bold mb-4 text-primary">
                    BookStore
                </h2>

                {/* Paragraph */}
                <p className="text-text/80 leading-relaxed text-lg max-w-3xl">
                    Founded in 2024, BookStore is a modern online bookstore,
                    created with the mission of making discovering new books easy,
                    enjoyable and inspiring. With us you will find a variety of genres —
                    from fantasy and thrillers to contemporary literature, classics, non-fiction books
                    and much more. We work with publishers and authors from all over the world to
                    offer you the best of book publishing today.
                </p>

                {/* CTA */}
                <div className="mt-8">
                    <Button variant="primary">
                        View All Books
                    </Button>
                </div>
            </div>
        </section>
    );
}