class Person {
    constructor(name, surname, age, gender, hasDriverLicense) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.hasDriverLicense = hasDriverLicense;
    }
}

const people = [
    new Person("John", "Doe", 28, "Male", true),
    new Person("Jane", "Smith", 32, "Female", false),
    new Person("Tom", "Johnson", 45, "Male", true),
    new Person("Lucy", "Brown", 22, "Female", true),
    new Person("Mike", "Davis", 36, "Male", false),
    new Person("Emily", "Garcia", 29, "Female", true),
    new Person("David", "Martinez", 52, "Male", true),
    new Person("Sophia", "Miller", 19, "Female", false),
    new Person("Jack", "Wilson", 41, "Male", true),
    new Person("Mia", "Anderson", 34, "Female", true)
];


/*

Zadanie 1: Wyświetl wszystkie osoby, które mają prawo jazdy.

const withDriverLicense = people.filter(person => person.hasDriverLicense);
console.log(withDriverLicense);


Zadanie 2: Wyświetl wszystkie osoby w wieku powyżej 30 lat.

const aboveThirty = people.filter(person => person.age > 30);
console.log(aboveThirty);


Zadanie 3: Posortuj osoby według wieku rosnąco.

const sortedByAge = people.sort((a, b) => a.age - b.age);
console.log(sortedByAge);


Zadanie 4: Wyświetl imiona i nazwiska wszystkich kobiet.

const femaleNames = people
    .filter(person => person.gender === "Female")
    .map(person => `${person.name} ${person.surname}`);
console.log(femaleNames);


Zadanie 5: Oblicz średni wiek wszystkich osób.

const averageAge = people.reduce((sum, person) => sum + person.age, 0) / people.length;
console.log(averageAge);


Zadanie 6: Znajdź osobę o najmłodszym wieku.

const youngestPerson = people.reduce((youngest, person) => person.age < youngest.age ? person : youngest, people[0]);
console.log(youngestPerson);


Zadanie 7: Wyświetl liczbę osób, które nie mają prawa jazdy.

const noDriverLicenseCount = people.filter(person => !person.hasDriverLicense).length;
console.log(noDriverLicenseCount);


Zadanie 8:
Wypisz metody HTTP, które są używane w REST API.

GET
POST
PUT
DELETE
PATCH

Zadanie 9:
Wypisz statusy HTTP, które są używane w REST API.

200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Serwer Error

