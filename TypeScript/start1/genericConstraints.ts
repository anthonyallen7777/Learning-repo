function echo<T extends number | string>(value: T): T {
    return value;
}

function echo2<T extends { name: string}>(value: T): T {
    return value;
}

interface Person {
    name: string
}

function echo3<T extends Person>(value: T): T {
    return value;
}

class Person2 {
    constructor(public name: string) {}
}

class Customer2 extends Person2 {
}

function echo4<T extends Person2>(value: T): T {
    return value;
}


echo4(new Customer2('a'))