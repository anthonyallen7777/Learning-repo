interface Product5 {
    name: string;
    price: number;
}

type ReadOnly<T> = {
    // Index signature
    // keyof
    //kind of like a for loop
    readonly [K in keyof T]: T[K]
}

type Optional<T> = {
    [K in keyof T]?: T[K]
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null
}


let product6: ReadOnly<Product5> = {
    name: 'a',
    price: 1
};

product6.name = 'a';