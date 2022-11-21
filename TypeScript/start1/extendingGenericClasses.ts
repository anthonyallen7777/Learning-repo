interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = []
    
    add(obj: T): void {
        this._objects.push(obj);
    }

    // T is Product
    // keyof T => 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value);
    }
}

// Passing on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {}
}

let store = new CompressibleStore<Product>();
store.compress()

// Restricting the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//     find(name: string): T | undefined {
//         return this._objects.find(obj => obj.name === name);
//     }
// }

// Fixing or terminating the generic type parameter
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}

let store2 = new Store<Product>();
store2.add({name: 'a', price: 1});
store2.find('name', 'a');
store2.find('price', 1);
store.find('nonExistanceProperty', 1)