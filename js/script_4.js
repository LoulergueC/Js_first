function script_4() {
    const entrepreneurs = [
        { first: "Steve", last: "Jobs", year: 1955 },
        { first: "Oprah", last: "Winfrey", year: 1954 },
        { first: "Bill", last: "Gates", year: 1955 },
        { first: "Sheryl", last: "Sandberg", year: 1969 },
        { first: "Mark", last: "Zuckerberg", year: 1984 },
        { first: "Beyonce", last: "Knowles", year: 1981 },
        { first: "Jeff", last: "Bezos", year: 1964 },
        { first: "Diane", last: "Hendricks", year: 1947 },
        { first: "Elon", last: "Musk", year: 1971 },
        { first: "Marissa", last: "Mayer", year: 1975 },
        { first: "Walt", last: "Disney", year: 1901 },
        { first: "Larry", last: "Page", year: 1973 },
        { first: "Jack", last: "Dorsey", year: 1976 },
        { first: "Evan", last: "Spiegel", year: 1990 },
        { first: "Brian", last: "Chesky", year: 1981 },
        { first: "Travis", last: "Kalanick", year: 1976 },
        { first: "Marc", last: "Andreessen", year: 1971 },
        { first: "Peter", last: "Thiel", year: 1967 },
    ];

    function filterAfter70(entrepreneurs) {
        return entrepreneurs.filter((entrepreneur) => entrepreneur.year > 1970);
    }

    function arrayName(entrepreneurs) {
        let arrayName = [];
        entrepreneurs.forEach((entrepreneur) => {
            arrayName.push(entrepreneur.first + " " + entrepreneur.last);
        });
        return arrayName;
    }

    function ageToday(entrepreneurs) {
        let ageToday = [];
        entrepreneurs.forEach((entrepreneur) => {
            ageToday.push(
                entrepreneur.first +
                    " " +
                    entrepreneur.last +
                    " aurait " +
                    (new Date().getFullYear() - entrepreneur.year) +
                    " ans aujourd'hui"
            );
        });
        return ageToday;
    }

    function sortByLastName(entrepreneurs) {
        return entrepreneurs.sort((a, b) => {
            if (a.last < b.last) {
                return -1;
            }
            if (a.last > b.last) {
                return 1;
            }
            return 0;
        });
    }

    return {
        "filtered after 70": filterAfter70(entrepreneurs),
        "array of names": arrayName(entrepreneurs),
        "age today": ageToday(entrepreneurs),
        "sorted by last name": sortByLastName(entrepreneurs),
    };
}
