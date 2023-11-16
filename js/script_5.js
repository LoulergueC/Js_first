function script_5() {
    const books = [
        { title: "Gatsby le magnifique", id: 133712, rented: 39 },
        { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
        { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
        { title: "Les frères Karamazov", id: 450911, rented: 55 },
        { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
        { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
        { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
        { title: "Le meilleur des mondes", id: 88847, rented: 58 },
        { title: "La disparition", id: 364445, rented: 33 },
        { title: "La lune seule le sait", id: 63541, rented: 43 },
        { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
        { title: "Guerre et Paix", id: 748147, rented: 19 },
    ];

    function areBooksAllRented(books) {
        return books.every((book) => book.rented > 0);
    }

    function mostRentedBook(books) {
        return books.reduce((a, b) => (a.rented > b.rented ? a : b));
    }

    function leastRentedBook(books) {
        return books.reduce((a, b) => (a.rented < b.rented ? a : b));
    }

    function findBookWithId(books, id) {
        return books.find((book) => book.id === id);
    }

    function deleteBook(books, id) {
        return books.filter((book) => book.id !== id);
    }

    function sortByAlphabeticalOrder(books) {
        return books.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
    }

    return {
        "Are books all rented": areBooksAllRented(books),
        "Most rented book": mostRentedBook(books),
        "Least rented book": leastRentedBook(books),
        "Book with id 873495": findBookWithId(books, 873495),
        "Delete book with id 133712": deleteBook(books, 133712),
        "Sort by alphabetical order": sortByAlphabeticalOrder(
            deleteBook(books, 133712)
        ),
    };
}
