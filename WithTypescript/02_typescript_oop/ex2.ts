interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
    genre: string;
}

const movie2: MovieGenre = {
    name: "Star Wars",
    genre: "Action",
    ratings: 8.9,
    printMovieInfo(
        name: string,
        price: number,
        ratings: number
    ): string | number {
        return `Movie name: ${name}, Price: ${price}, Ratings: ${ratings}`;
    },
};

// Corrected usage
console.log(movie2.printMovieInfo(movie2.name, 15, movie2.ratings));
